// ========================================
// KPI Congress 27 - Registration Script
// ========================================

// Placeholder data
const thaiSubs = {
  kmth_sp: [
    'คณะกรรมาธิการการกฎหมาย การยุติธรรมและสิทธิมนุษยชน สภาผู้แทนราษฎร',
    'คณะกรรมาธิการกิจการสภาผู้แทนราษฎร',
    'คณะกรรมาธิการกิจการศาล องค์กรอิสระ องค์กรอัยการ รัฐวิสาหกิจ องค์การมหาชน และกองทุน สภาผู้แทนราษฎร',
    'คณะกรรมาธิการกีฬา สภาผู้แทนราษฎร',
    'คณะกรรมาธิการกิจการเด็ก เยาวชน สตรี ผู้สูงอายุ ผู้พิการ กลุ่มชาติพันธุ์ และผู้มีความหลากหลายทางเพศ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการแก้ปัญหาหนี้สิน ความยากจนและลดความเหลื่อมล้ำ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการเกษตรและสหกรณ์ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการคมนาคม สภาผู้แทนราษฎร',
    'คณะกรรมาธิการความมั่นคงแห่งรัฐ กิจการชายแดนไทย ยุทธศาสตร์ชาติและการปฏิรูปประเทศ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการคุ้มครองผู้บริโภค สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการเงิน การคลัง สถาบันการเงินและตลาดการเงิน สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการต่างประเทศ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการตำรวจ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการศึกษาการจัดทำและติดตามการบริหารงบประมาณ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการทหาร สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการท่องเที่ยว สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการที่ดิน ทรัพยากรธรรมชาติและสิ่งแวดล้อม สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการปกครอง สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการกระจายอำนาจ การปกครองส่วนท้องถิ่น และการบริหารราชการรูปแบบพิเศษ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการป้องกันปราบปรามการฟอกเงินและยาเสพติด สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการป้องกันและบรรเทาผลกระทบจากภัยธรรมชาติและสาธารณภัย สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการป้องกันและปราบปรามการทุจริตประพฤติมิชอบ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการพลังงาน สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการพัฒนาการเมือง การสื่อสารมวลชน และการมีส่วนร่วมของประชาชน สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการพัฒนาเศรษฐกิจ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการพาณิชย์และทรัพย์สินทางปัญญา สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการแรงงาน สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการบริหารจัดการทรัพยากรน้ำ สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการศาสนา ศิลปะและวัฒนธรรม สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการศึกษา สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการสวัสดิการสังคม สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการสาธารณสุข สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการสื่อสาร โทรคมนาคม และดิจิทัลเพื่อเศรษฐกิจและสังคม สภาผู้แทนราษฎร',
    'คณะกรรมาธิการการอุตสาหกรรม สภาผู้แทนราษฎร'
  ],
  kmth_sw: [
    'คณะกรรมาธิการวิสามัญกิจการวุฒิสภา',
    'คณะกรรมาธิการการกฎหมาย และการยุติธรรม วุฒิสภา',
    'คณะกรรมาธิการการเกษตรและสหกรณ์ วุฒิสภา',
    'คณะกรรมาธิการการคมนาคม วุฒิสภา',
    'คณะกรรมาธิการการต่างประเทศ วุฒิสภา',
    'คณะกรรมาธิการการทหารและความมั่นคงของรัฐ วุฒิสภา',
    'คณะกรรมาธิการการท่องเที่ยวและการกีฬา วุฒิสภา',
    'คณะกรรมาธิการการเทคโนโลยีสารสนเทศ การสื่อสาร และการโทรคมนาคม วุฒิสภา',
    'คณะกรรมาธิการการบริหารราชการแผ่นดิน วุฒิสภา',
    'คณะกรรมาธิการการปกครองท้องถิ่น วุฒิสภา',
    'คณะกรรมาธิการการพลังงาน วุฒิสภา',
    'คณะกรรมาธิการการพัฒนาการเมือง การมีส่วนร่วมของประชาชน สิทธิมนุษยชน สิทธิ เสรีภาพ และการคุ้มครองผู้บริโภค วุฒิสภา',
    'คณะกรรมาธิการการพัฒนาสังคม และกิจการเด็ก เยาวชน สตรี ผู้สูงอายุ คนพิการ ผู้ด้อยโอกาส และความหลากหลายทางสังคม วุฒิสภา',
    'คณะกรรมาธิการการพาณิชย์และการอุตสาหกรรม วุฒิสภา',
    'คณะกรรมาธิการการแรงงาน วุฒิสภา',
    'คณะกรรมาธิการการศาสนา คุณธรรม จริยธรรม ศิลปะและวัฒนธรรม วุฒิสภา',
    'คณะกรรมาธิการการศึกษา การอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม วุฒิสภา',
    'คณะกรรมาธิการการเศรษฐกิจ การเงิน และการคลัง วุฒิสภา',
    'คณะกรรมาธิการการสาธารณสุข วุฒิสภา',
    'คณะกรรมาธิการกิจการองค์กรอิสระตามรัฐธรรมนูญ การป้องกันและปราบปรามการทุจริต ประพฤติมิชอบ และการเสริมสร้างธรรมาภิบาล วุฒิสภา',
    'คณะกรรมาธิการติดตามการบริหารงบประมาณ วุฒิสภา',
    'คณะกรรมาธิการทรัพยากรธรรมชาติและสิ่งแวดล้อม วุฒิสภา'
  ],
  thai_other: [
    'สำนักงานการตรวจเงินแผ่นดิน',
    'สำนักงานคณะกรรมการการเลือกตั้ง',
    'สำนักงานคณะกรรมการสิทธิมนุษยชนแห่งชาติ',
    'สำนักงาน กสทช.',
    'สำนักงานอัยการสูงสุด',
    'สำนักงานสภาพัฒนาการเศรษฐกิจและสังคมแห่งชาติ',
    'สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ',
    'สำนักงานผู้ตรวจการแผ่นดิน',
    'สำนักงานศาลปกครองสูงสุด',
    'สำนักงานศาลฎีกา',
    'สำนักงานศาลรัฐธรรมนูญ',
    'สำนักเลขาธิการคณะรัฐมนตรี',
    'สำนักข่าวกรองแห่งชาติ',
    'สำนักงานสภาความมั่นคงแห่งชาติ',
    'สำนักงานคณะกรรมการกฤษฎีกา',
    'สำนักงานคณะกรรมการข้าราชการพลเรือน',
    'สำนักงานคณะกรรมการส่งเสริมการลงทุน',
    'สำนักงานทรัพยากรน้ำแห่งชาติ',
    'สำนักงานคณะกรรมการนโยบายที่ดินแห่งชาติ',
    'สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตในภาครัฐ',
    'สำนักงานป้องกันและปราบปรามการฟอกเงิน',
    'สำนักงานคณะกรรมการพิเศษเพื่อประสานงานโครงการอันเนื่องมาจากพระราชดำริ',
    'สำนักงานพระพุทธศาสนาแห่งชาติ'
  ]
};
const intSubs = [
  'ESCAP - Economic and Social Commission for Asia and the Pacific',
  'FAO - Food and Agriculture Organization',
  'FNF - Friedrich Naumann Foundation for Freedom',
  'ILO - International Labour Organization',
  'JICA - Japan International Cooperation Agency',
  'NDI - National Democratic Institute',
  'UNDP - United Nations Development Programme',
  'UNEP - United Nations Environment Programme',
  'UN-HABITAT - United Nations Human Settlements Programme',
  'UNIDO - United Nations Industrial Development Organization',
];
const embassySubs = [
  'Argentina',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Belgium',
  'Bhutan',
  'Brazil',
  'United Kingdom (British)',
  'Brunei',
  'Cambodia',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Cuba',
  'Czech Republic',
  'Denmark',
  'Egypt',
  'European Union',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Guatemala',
  'Hungary',
  'India',
  'Indonesia',
  'Iran',
  'Ireland',
  'Israel',
  'Italy',
  'Japan',
  'Kazakhstan',
  'Kenya',
  'Korea (North)',
  'Korea (South)',
  'Kosovo',
  'Kuwait',
  'Laos',
  'Libya',
  'Luxembourg',
  'Malaysia',
  'Maldives',
  'Order of Malta',
  'Mexico',
  'Mongolia',
  'Morocco',
  'Myanmar',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Panama',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'Singapore',
  'Slovakia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sweden',
  'Switzerland',
  'Timor-Leste',
  'Turkey',
  'Ukraine',
  'United Arab Emirates',
  'United States of America',
  'Vietnam'
];

// DOM elements cache
const elements = {
  thaiSub: document.getElementById('thaiSub'),
  intSub: document.getElementById('intSub'),
  embassySub: document.getElementById('embassySub'),
  thaiGroup: document.getElementById('thaiGroup'),
  thaiGroupDetail: document.getElementById('thaiGroupDetail'),
  thaiSubDetail: document.getElementById('thaiSubDetail'),
  intSubDetail: document.getElementById('intSubDetail'),
  embassySubDetail: document.getElementById('embassySubDetail'),
  morningBlock: document.getElementById('morningBlock'),
  eveningBlock: document.getElementById('eveningBlock'),
  spouseInvite: document.getElementById('spouseInvite'),
  attendMorning: document.getElementById('attendMorning'),
  parkingBox: document.getElementById('parkingBox'),
  needParking: document.getElementById('needParking'),
  carPlateBox: document.getElementById('carPlateBox'),
  attendEvening: document.getElementById('attendEvening'),
  foodBox: document.getElementById('foodBox'),
  allergyBox: document.getElementById('allergyBox'),
  withSpouse: document.getElementById('withSpouse'),
  spouseFields: document.getElementById('spouseFields'),
  prefix: document.getElementById('prefix'),
  prefixOtherBox: document.getElementById('prefixOtherBox')
};

// Initialize QR Code
let qr;
if (typeof QRious !== 'undefined') {
  qr = new QRious({
    element: document.getElementById('qrCanvas'),
    size: 220,
    value: ''
  });
}

// ========================================
// Populate dropdown lists
// ========================================
function populateSubLists() {
  // International organizations
  elements.intSubDetail.innerHTML =
    '<option value="">-- เลือก --</option>' +
    intSubs.map((s) => `<option value="${s}">${s}</option>`).join('');

  // Embassy/Countries
  elements.embassySubDetail.innerHTML =
    '<option value="">-- เลือก --</option>' +
    embassySubs.map((s) => `<option value="${s}">${s}</option>`).join('');
}

// ========================================
// Organization type selection handler
// ========================================
document.querySelectorAll('input[name="mainOrgType"]').forEach((radio) => {
  radio.addEventListener('change', (e) => {
    // Hide all sub-sections
    elements.thaiSub.classList.add('hidden');
    elements.intSub.classList.add('hidden');
    elements.embassySub.classList.add('hidden');
    elements.morningBlock.classList.add('hidden');
    elements.eveningBlock.classList.add('hidden');
    elements.spouseInvite.classList.add('hidden');

    const value = e.target.value;

    // Show relevant sections based on selection
    if (value === 'thai') {
      elements.thaiSub.classList.remove('hidden');
      // Wait for Thai group selection to show morning/evening
    } else if (value === 'international') {
      elements.intSub.classList.remove('hidden');
      elements.morningBlock.classList.remove('hidden');
      elements.eveningBlock.classList.remove('hidden');
    } else if (value === 'embassy') {
      elements.embassySub.classList.remove('hidden');
      elements.morningBlock.classList.remove('hidden');
      elements.eveningBlock.classList.remove('hidden');
      // Don't show spouse invite yet - wait for evening attendance confirmation
    }

    // Reset all conditional fields
    resetConditionalFields();
  });
});

// ========================================
// Thai group selection handler
// ========================================
elements.thaiGroup.addEventListener('change', function () {
  const v = this.value;
  elements.thaiGroupDetail.classList.toggle('hidden', !v);

  if (v) {
    elements.thaiSubDetail.innerHTML =
      '<option value="">-- เลือก --</option>' +
      (thaiSubs[v] || []).map((s) => `<option value="${s}">${s}</option>`).join('');
  }

  // Show morning/evening based on Thai group selection
  elements.morningBlock.classList.add('hidden');
  elements.eveningBlock.classList.add('hidden');

  if (v === 'kmth_sp' || v === 'kmth_sw') {
    elements.morningBlock.classList.remove('hidden');
    elements.eveningBlock.classList.remove('hidden');
  } else if (v === 'thai_other') {
    elements.eveningBlock.classList.remove('hidden');
  }
});

// ========================================
// Morning session handlers
// ========================================
elements.attendMorning.addEventListener('change', function () {
  elements.parkingBox.classList.toggle('hidden', this.value !== 'yes');
  if (this.value !== 'yes') {
    elements.needParking.value = '';
    document.getElementById('carPlate').value = '';
    elements.carPlateBox.classList.add('hidden');
  }
});

elements.needParking.addEventListener('change', function () {
  elements.carPlateBox.classList.toggle('hidden', this.value !== 'yes');
});

// ========================================
// Evening session handlers
// ========================================
elements.attendEvening.addEventListener('change', function () {
  const show = this.value === 'yes';
  elements.foodBox.classList.toggle('hidden', !show);
  elements.allergyBox.classList.toggle('hidden', !show);
  
  // Show spouse invite only for embassy when attending evening
  const isEmbassy = document.querySelector('input[name="mainOrgType"]:checked')?.value === 'embassy';
  if (isEmbassy && show) {
    elements.spouseInvite.classList.remove('hidden');
  } else {
    elements.spouseInvite.classList.add('hidden');
    elements.withSpouse.value = '';
    elements.spouseFields.classList.add('hidden');
  }
  
  if (!show) {
    document.getElementById('foodType').value = '';
    document.getElementById('foodAllergy').value = '';
  }
});

// ========================================
// Spouse handlers
// ========================================
elements.withSpouse.addEventListener('change', function () {
  elements.spouseFields.classList.toggle('hidden', this.value !== 'yes');
  if (this.value !== 'yes') {
    document.getElementById('spousePrefix').value = '';
    document.getElementById('spouseFirst').value = '';
    document.getElementById('spouseLast').value = '';
    document.getElementById('spouseFood').value = '';
    document.getElementById('spouseAllergy').value = '';
  }
});

// ========================================
// Prefix other handler
// ========================================
elements.prefix.addEventListener('change', function () {
  elements.prefixOtherBox.classList.toggle('hidden', this.value !== 'other');
  if (this.value !== 'other') {
    document.getElementById('prefixOther').value = '';
  }
});

// ========================================
// Reset conditional fields
// ========================================
function resetConditionalFields() {
  elements.attendMorning.value = '';
  elements.needParking.value = '';
  document.getElementById('carPlate').value = '';
  elements.attendEvening.value = '';
  document.getElementById('foodType').value = '';
  document.getElementById('foodAllergy').value = '';
  elements.withSpouse.value = '';

  elements.parkingBox.classList.add('hidden');
  elements.carPlateBox.classList.add('hidden');
  elements.foodBox.classList.add('hidden');
  elements.allergyBox.classList.add('hidden');
  elements.spouseFields.classList.add('hidden');
}

// ========================================
// Generate UID
// ========================================
function generateUID() {
  const t = Date.now().toString(36).toUpperCase();
  const r = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `KPI27-${t}-${r}`;
}

// ========================================
// Show response message
// ========================================
function showResponse(text, type) {
  const msg = document.getElementById('responseMessage');
  msg.className = 'alert mt-3';
  
  if (type === 'success') {
    msg.classList.add('alert-success');
  } else if (type === 'danger') {
    msg.classList.add('alert-danger');
  } else if (type === 'info') {
    msg.classList.add('alert-info');
  }
  
  msg.innerHTML = text;
  msg.classList.remove('hidden');
}

// ========================================
// Form validation
// ========================================
function validateForm() {
  // Check organization type
  const mainOrgType = document.querySelector('input[name="mainOrgType"]:checked');
  if (!mainOrgType) {
    showResponse('❌ กรุณาเลือกประเภทหน่วยงาน', 'danger');
    return false;
  }

  // Check name
  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  if (!firstname || !lastname) {
    showResponse('❌ กรุณากรอกชื่อ-นามสกุลให้ครบ', 'danger');
    return false;
  }

  // Check phone
  const phone = document.getElementById('phone').value.trim();
  if (!/^[0-9]{9,10}$/.test(phone)) {
    showResponse('❌ กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (9-10 หลัก)', 'danger');
    return false;
  }

  // Check PDPA consent
  const pdpaConsent = document.getElementById('pdpaConsent');
  if (!pdpaConsent.checked) {
    showResponse('❌ กรุณายอมรับนโยบายคุ้มครองข้อมูลส่วนบุคคล', 'danger');
    return false;
  }

  return true;
}

// ========================================
// Prepare form data
// ========================================
function prepareFormData() {
  const mainOrgType = document.querySelector('input[name="mainOrgType"]:checked').value;
  
  return {
    uid: generateUID(),
    mainOrgType: mainOrgType,
    thaiGroup: elements.thaiGroup.value || '',
    thaiSubDetail: elements.thaiSubDetail.value || '',
    intSubDetail: elements.intSubDetail.value || '',
    embassySubDetail: elements.embassySubDetail.value || '',
    prefix: elements.prefix.value === 'other' 
      ? document.getElementById('prefixOther').value 
      : elements.prefix.value,
    firstname: document.getElementById('firstname').value.trim(),
    lastname: document.getElementById('lastname').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    position: document.getElementById('position').value.trim(),
    organization: document.getElementById('organization').value.trim(),
    coordName: document.getElementById('coordName').value.trim(),
    coordEmail: document.getElementById('coordEmail').value.trim(),
    coordPhone: document.getElementById('coordPhone').value.trim(),
    attendMorning: elements.attendMorning.value || '',
    needParking: elements.needParking.value || '',
    carPlate: document.getElementById('carPlate').value.trim() || '',
    attendEvening: elements.attendEvening.value || '',
    foodType: document.getElementById('foodType').value || '',
    foodAllergy: document.getElementById('foodAllergy').value.trim() || '',
    withSpouse: elements.withSpouse.value || '',
    spousePrefix: document.getElementById('spousePrefix').value || '',
    spouseFirst: document.getElementById('spouseFirst').value.trim() || '',
    spouseLast: document.getElementById('spouseLast').value.trim() || '',
    spouseFood: document.getElementById('spouseFood').value || '',
    spouseAllergy: document.getElementById('spouseAllergy').value.trim() || ''
  };
}

// ========================================
// Update UI after registration
// ========================================
function updateUIAfterRegistration(data) {
  // Update status panel
  document.getElementById('uidText').textContent = data.uid;
  document.getElementById('statusText').textContent = 'ลงทะเบียนแล้ว (Registered)';
  document.getElementById('emailText').textContent = data.email;
  document.getElementById('phoneText').textContent = data.phone;

  // Show QR Code
  const qrCanvas = document.getElementById('qrCanvas');
  if (qrCanvas) {
    qrCanvas.classList.remove('hidden');
  }

  // Generate QR Code
  if (qr) {
    const qrData = {
      uid: data.uid,
      name: `${data.firstname} ${data.lastname}`,
      email: data.email,
      org: data.organization
    };
    qr.value = JSON.stringify(qrData);
  }

  // Scroll to QR code
  setTimeout(() => {
    document.getElementById('qrArea').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }, 300);
}

// ========================================
// Form submission
// ========================================
const form = document.getElementById('registerForm');
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTb5Qiba2-9zERJ58yug1w64bwk8fj2EFaXq0m9r-v-nPrxCnLVbuwFWS2jzT4BUvsnQ/exec';

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Validate form
  if (!validateForm()) {
    return;
  }

  // Prepare data
  const data = prepareFormData();

  // Show loading
  showResponse(
    '<div class="d-flex align-items-center"><div class="spinner-border spinner-border-sm me-2"></div>กำลังลงทะเบียน... กรุณารอสักครู่</div>',
    'info'
  );

  try {
    // Send to Google Apps Script
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data)
    });

    // Update UI
    updateUIAfterRegistration(data);

    // Show success message
    showResponse(
      `✅ ลงทะเบียนสำเร็จ!<br><strong>UID:</strong> ${data.uid}<br>โปรดตรวจสอบ QR Code และข้อมูลทางอีเมล`,
      'success'
    );

    // Optional: Reset form after successful submission
    // form.reset();
    // resetConditionalFields();

  } catch (error) {
    console.error('Registration Error:', error);
    showResponse(
      '❌ เกิดข้อผิดพลาดในการลงทะเบียน<br>กรุณาลองใหม่อีกครั้งหรือติดต่อเจ้าหน้าที่',
      'danger'
    );
  }
});

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', function () {
  populateSubLists();
  console.log('KPI Congress 27 Registration Form Initialized');
});