// ========================================
// Google Apps Script - Backend Example
// KPI Congress 27 Registration Form
// ========================================

// Configuration
const SHEET_NAME = 'Registrations'; // ชื่อ sheet ที่จะบันทึกข้อมูล
const EMAIL_TEMPLATE_WITH_QR = 'EmailTemplate_WithQR'; // ชื่อ template สำหรับผู้เข้าร่วม
const EMAIL_TEMPLATE_NO_QR = 'EmailTemplate_NoAttending'; // ชื่อ template สำหรับผู้ไม่เข้าร่วม

/**
 * Handle POST request from registration form
 */
function doPost(e) {
  try {
    const data = e.parameter;
    
    // เช็คว่าต้องการ QR Code หรือไม่
    const needsQR = data.needsQR === 'true';
    
    // Get spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error('Sheet not found: ' + SHEET_NAME);
    }
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = prepareRowData(data, timestamp, needsQR);
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    // Send email
    if (needsQR) {
      // ผู้เข้าร่วมงาน - ส่งอีเมลพร้อม QR Code
      sendEmailWithQR(data);
    } else {
      // ผู้ไม่เข้าร่วมงาน - ส่งอีเมลขอบคุณ
      sendEmailNoAttending(data);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        uid: data.uid || 'N/A',
        needsQR: needsQR,
        message: needsQR ? 'Registration successful with QR Code' : 'Thank you for your response'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Prepare row data for spreadsheet
 */
function prepareRowData(data, timestamp, needsQR) {
  return [
    timestamp,                      // Timestamp
    data.uid || 'N/A',             // UID
    needsQR ? 'Yes' : 'No',        // Needs QR
    data.mainOrgType || '',        // Organization Type
    data.thaiGroup || '',          // Thai Group
    data.thaiSubDetail || '',      // Thai Sub Detail
    data.intSubDetail || '',       // International Org
    data.embassySubDetail || '',   // Embassy/Country
    data.attendMorning || '',      // Attend Morning
    data.needParking || '',        // Need Parking
    data.carPlate || '',           // Car Plate
    data.attendEvening || '',      // Attend Evening
    data.foodType || '',           // Food Type
    data.foodAllergy || '',        // Food Allergy
    data.withSpouse || '',         // With Spouse
    data.spousePrefix || '',       // Spouse Prefix
    data.spouseFirst || '',        // Spouse First Name
    data.spouseLast || '',         // Spouse Last Name
    data.spouseFood || '',         // Spouse Food
    data.spouseAllergy || '',      // Spouse Allergy
    data.prefix || '',             // Prefix
    data.firstname || '',          // First Name
    data.lastname || '',           // Last Name
    data.email || '',              // Email
    data.phone || '',              // Phone
    data.position || '',           // Position
    data.organization || '',       // Organization
    data.coordName || '',          // Coordinator Name
    data.coordEmail || '',         // Coordinator Email
    data.coordPhone || ''          // Coordinator Phone
  ];
}

/**
 * Send email with QR Code to attendee
 */
function sendEmailWithQR(data) {
  try {
    // Generate QR Code
    const qrCode = generateQRCode(data);
    
    // Email subject
    const subject = 'KPI Congress 27 - Registration Confirmation with QR Code';
    
    // Email body (HTML)
    const body = `
      <div style="font-family: 'Kanit', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://kpi.ac.th/wp-content/uploads/2025/09/LOGO_KPI-Congress-27-scaled.webp" 
               alt="KPI Logo" style="height: 100px;">
        </div>
        
        <h2 style="color: #333;">Registration Confirmation</h2>
        <p>Dear ${data.prefix} ${data.firstname} ${data.lastname},</p>
        
        <p>Thank you for registering for <strong>The 27th KPI Congress, 2025</strong>.</p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Registration Details</h3>
          <p><strong>UID:</strong> ${data.uid}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Organization:</strong> ${data.organization}</p>
          <p><strong>Position:</strong> ${data.position}</p>
        </div>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Session Attendance</h3>
          <p><strong>Morning Session:</strong> ${data.attendMorning === 'yes' ? '✅ Attending' : '❌ Not Attending'}</p>
          <p><strong>Evening Session:</strong> ${data.attendEvening === 'yes' ? '✅ Attending' : '❌ Not Attending'}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <h3>Your QR Code</h3>
          <p>Please present this QR Code at the event venue</p>
          <img src="${qrCode}" alt="QR Code" style="width: 250px; height: 250px;">
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>📅 Date:</strong> Friday, 7 November 2025</p>
          <p style="margin: 5px 0 0 0;"><strong>📍 Venue:</strong> National Assembly Building (Sappaya-Sapasathan)</p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          If you have any questions, please contact us at:<br>
          📧 Email: contact@kpi.ac.th<br>
          📞 Phone: +66 2 141 9800
        </p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          © 2025 King Prajadhipok's Institute. All rights reserved.
        </p>
      </div>
    `;
    
    // Send email
    GmailApp.sendEmail(data.email, subject, '', {
      htmlBody: body,
      name: 'KPI Congress 27'
    });
    
    Logger.log('Email with QR sent to: ' + data.email);
    
  } catch (error) {
    Logger.log('Error sending email with QR: ' + error.toString());
  }
}

/**
 * Send email to non-attendee (without QR Code)
 */
function sendEmailNoAttending(data) {
  try {
    // Email subject
    const subject = 'KPI Congress 27 - Thank You for Your Response';
    
    // Email body (HTML)
    const body = `
      <div style="font-family: 'Kanit', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://kpi.ac.th/wp-content/uploads/2025/09/LOGO_KPI-Congress-27-scaled.webp" 
               alt="KPI Logo" style="height: 100px;">
        </div>
        
        <h2 style="color: #333;">Thank You for Your Response</h2>
        <p>Dear Participant,</p>
        
        <p>Thank you for taking the time to respond to our invitation for <strong>The 27th KPI Congress, 2025</strong>.</p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Response</h3>
          <p>We have received your response indicating that you will not be able to attend the event.</p>
          <p><strong>Organization Type:</strong> ${getOrgTypeLabel(data.mainOrgType)}</p>
          <p><strong>Morning Session:</strong> ${data.attendMorning === 'no' ? 'Not Attending' : 'N/A'}</p>
          <p><strong>Evening Session:</strong> ${data.attendEvening === 'no' ? 'Not Attending' : 'N/A'}</p>
        </div>
        
        <div style="background: #d1fae5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;">
            We appreciate your response and hope to see you at future events!
          </p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          If you have any questions or if your plans change, please contact us at:<br>
          📧 Email: contact@kpi.ac.th<br>
          📞 Phone: +66 2 141 9800
        </p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          © 2025 King Prajadhipok's Institute. All rights reserved.
        </p>
      </div>
    `;
    
    // Get organization email if available (for record purposes)
    const recipientEmail = data.coordEmail || 'registration@kpi.ac.th'; // fallback email
    
    // Send email to coordination email or system email for record
    GmailApp.sendEmail(recipientEmail, subject, '', {
      htmlBody: body,
      name: 'KPI Congress 27'
    });
    
    Logger.log('Thank you email sent to: ' + recipientEmail);
    
  } catch (error) {
    Logger.log('Error sending thank you email: ' + error.toString());
  }
}

/**
 * Generate QR Code using Google Charts API
 */
function generateQRCode(data) {
  const qrData = {
    uid: data.uid,
    name: `${data.firstname} ${data.lastname}`,
    email: data.email,
    org: data.organization
  };
  
  const qrString = JSON.stringify(qrData);
  const encodedData = encodeURIComponent(qrString);
  
  // Google Charts QR Code API
  return `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodedData}`;
}

/**
 * Get organization type label
 */
function getOrgTypeLabel(orgType) {
  const labels = {
    'thai': 'Thai Organization',
    'international': 'International Organization',
    'embassy': 'Embassy'
  };
  return labels[orgType] || orgType;
}

/**
 * Initialize spreadsheet with headers (run once)
 */
function initializeSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Set headers
  const headers = [
    'Timestamp',
    'UID',
    'Needs QR',
    'Organization Type',
    'Thai Group',
    'Thai Sub Detail',
    'International Org',
    'Embassy/Country',
    'Attend Morning',
    'Need Parking',
    'Car Plate',
    'Attend Evening',
    'Food Type',
    'Food Allergy',
    'With Spouse',
    'Spouse Prefix',
    'Spouse First Name',
    'Spouse Last Name',
    'Spouse Food',
    'Spouse Allergy',
    'Prefix',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Position',
    'Organization',
    'Coordinator Name',
    'Coordinator Email',
    'Coordinator Phone'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
  
  Logger.log('Spreadsheet initialized with headers');
}
