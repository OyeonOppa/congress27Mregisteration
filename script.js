// ========================================
// KPI Congress 27 - Registration Script
// ========================================

// Organization data
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
    // กระทรวง
    'กระทรวงกลาโหม',
    'กระทรวงการคลัง',
    'กระทรวงการต่างประเทศ',
    'กระทรวงการท่องเที่ยวและกีฬา',
    'กระทรวงการพัฒนาสังคมและความมั่นคงมนุษย์',
    'กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม',
    'กระทรวงเกษตรและสหกรณ์',
    'กระทรวงคมนาคม',
    'กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม',
    'กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม',
    'กระทรวงพลังงาน',
    'กระทรวงพาณิชย์',
    'กระทรวงมหาดไทย',
    'กระทรวงยุติธรรม',
    'กระทรวงแรงงาน',
    'กระทรวงวัฒนธรรม',
    'กระทรวงศึกษาธิการ',
    'กระทรวงสาธารณสุข',
    'กระทรวงอุตสาหกรรม',
    
    // เลขาธิการ สภา ศาล
    'เลขาธิการคณะรัฐมนตรี',
    'สภาความมั่นคงแห่งชาติ',
    'สภาพัฒนาการเศรษฐกิจและสังคมแห่งชาติ',
    'ศาลฎีกา',
    'ศาลปกครองสูงสุด',
    'ศาลรัฐธรรมนูญ',
    
    // สำนักงาน
    'สำนักข่าวกรองแห่งชาติ',
    'สำนักงานกรรมการการเลือกตั้ง',
    'สำนักงานกรรมการกิจการกระจายเสียง กิจการโทรทัศน์ และกิจการโทรคมนาคมแห่งชาติ',
    'สำนักงานกรรมการตรวจเงินแผ่นดิน',
    'สำนักงานกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ',
    'สำนักงานกรรมการสิทธิมนุษยชนแห่งชาติ',
    'สำนักงานคณะกรรมการกฤษฎีกา',
    'สำนักงานคณะกรรมการข้าราชการพลเรือน',
    'สำนักงานคณะกรรมการนโยบายที่ดินแห่งชาติ',
    'สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตในภาครัฐ',
    'สำนักงานคณะกรรมการป้องกันและปราบปรามการฟอกเงิน',
    'สำนักงานคณะกรรมการพิเศษเพื่อประสานงานโครงการอันเนื่องมาจากพระราชดำริ',
    'สำนักงานคณะกรรมการส่งเสริมการลงทุน',
    'สำนักงานทรัพยากรน้ำแห่งชาติ',
    'สำนักงานผู้ตรวจการแผ่นดิน',
    'สำนักงานพระพุทธศาสนาแห่งชาติ',
    'สำนักงานอัยการสูงสุด',
    'สำนักนายกรัฐมนตรี',
  ]
};

const intSubs = [
  'AIPA - ASEAN Inter-Parliamentary Assembly',
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
  'WFD - Westminster Foundation for Democracy'
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
  sessionSelection: document.getElementById('sessionSelection'),
  morningBlock: document.getElementById('morningBlock'),
  eveningBlock: document.getElementById('eveningBlock'),
  participantBlock: document.getElementById('participantBlock'),
  notAttendingMessage: document.getElementById('notAttendingMessage'),
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
  prefixOtherBox: document.getElementById('prefixOtherBox'),
  qrHint: document.getElementById('qrHint')
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
// Generate UID with organization type prefix
// ========================================
function generateUID(orgType) {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  
  let prefix = '';
  switch(orgType) {
    case 'thai':
      prefix = 'TH';
      break;
    case 'international':
      prefix = 'INT';
      break;
    case 'embassy':
      prefix = 'EMB';
      break;
    default:
      prefix = 'KPI';
  }
  
  return `${prefix}-${timestamp}-${random}`;
}

// ========================================
// Check if attending any session
// ========================================
function checkAttendance() {
  const morningValue = elements.attendMorning.value;
  const eveningValue = elements.attendEvening.value;
  
  // Check which blocks are visible
  const morningVisible = !elements.morningBlock.classList.contains('hidden');
  const eveningVisible = !elements.eveningBlock.classList.contains('hidden');
  
  // Determine if all visible sessions have been selected
  let allVisibleSelected = false;
  
  if (morningVisible && eveningVisible) {
    // Both visible - both must be selected
    allVisibleSelected = morningValue && eveningValue;
  } else if (morningVisible) {
    // Only morning visible
    allVisibleSelected = morningValue !== '';
  } else if (eveningVisible) {
    // Only evening visible
    allVisibleSelected = eveningValue !== '';
  }
  
  // If all visible sessions have been selected, check attendance
  if (allVisibleSelected) {
    const attendingAny = morningValue === 'yes' || eveningValue === 'yes';
    const notAttendingAll = 
      (!morningVisible || morningValue === 'no') && 
      (!eveningVisible || eveningValue === 'no');
    
    if (attendingAny) {
      // Attending at least one session - show participant info
      elements.participantBlock.classList.remove('hidden');
      elements.notAttendingMessage.classList.add('hidden');
      elements.qrHint.textContent = 'กรอกข้อมูลเพื่อรับ QR Code';
    } else if (notAttendingAll) {
      // Not attending any session - hide participant info
      elements.participantBlock.classList.add('hidden');
      elements.notAttendingMessage.classList.remove('hidden');
      elements.qrHint.textContent = 'กดส่งข้อมูลเพื่อยืนยัน';
    }
  } else {
    // Not all visible sessions selected yet - hide both
    elements.participantBlock.classList.add('hidden');
    elements.notAttendingMessage.classList.add('hidden');
  }
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
    elements.sessionSelection.classList.add('hidden');
    elements.participantBlock.classList.add('hidden');
    elements.notAttendingMessage.classList.add('hidden');
    elements.spouseInvite.classList.add('hidden');

    const value = e.target.value;

    // Show relevant sections based on selection
    if (value === 'thai') {
      elements.thaiSub.classList.remove('hidden');
    } else if (value === 'international') {
      elements.intSub.classList.remove('hidden');
      elements.sessionSelection.classList.remove('hidden');
      elements.morningBlock.classList.remove('hidden');
      elements.eveningBlock.classList.remove('hidden');
    } else if (value === 'embassy') {
      elements.embassySub.classList.remove('hidden');
      elements.sessionSelection.classList.remove('hidden');
      elements.morningBlock.classList.remove('hidden');
      elements.eveningBlock.classList.remove('hidden');
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

  // Show session selection based on Thai group
  elements.sessionSelection.classList.add('hidden');
  elements.morningBlock.classList.add('hidden');
  elements.eveningBlock.classList.add('hidden');
  elements.participantBlock.classList.add('hidden');
  elements.notAttendingMessage.classList.add('hidden');

  if (v === 'kmth_sp' || v === 'kmth_sw') {
    elements.sessionSelection.classList.remove('hidden');
    elements.morningBlock.classList.remove('hidden');
    elements.eveningBlock.classList.remove('hidden');
  } else if (v === 'thai_other') {
    elements.sessionSelection.classList.remove('hidden');
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
  checkAttendance();
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
  
  checkAttendance();
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

  // Check if morning/evening selections are made
  const morningValue = elements.attendMorning.value;
  const eveningValue = elements.attendEvening.value;
  
  // For Thai organizations with kmth_sp or kmth_sw, both must be selected
  const thaiGroup = elements.thaiGroup.value;
  if (mainOrgType.value === 'thai' && (thaiGroup === 'kmth_sp' || thaiGroup === 'kmth_sw')) {
    if (!morningValue || !eveningValue) {
      showResponse('❌ กรุณาเลือกว่าจะเข้าร่วมงานช่วงเช้าและช่วงเย็นหรือไม่', 'danger');
      return false;
    }
  }
  
  // For Thai other, evening must be selected
  if (mainOrgType.value === 'thai' && thaiGroup === 'thai_other') {
    if (!eveningValue) {
      showResponse('❌ กรุณาเลือกว่าจะเข้าร่วมงานช่วงเย็นหรือไม่', 'danger');
      return false;
    }
  }
  
  // For international and embassy, both must be selected
  if (mainOrgType.value === 'international' || mainOrgType.value === 'embassy') {
    if (!morningValue || !eveningValue) {
      showResponse('❌ กรุณาเลือกว่าจะเข้าร่วมงานช่วงเช้าและช่วงเย็นหรือไม่', 'danger');
      return false;
    }
  }

  // Check if attending any session
  const attendingAny = morningValue === 'yes' || eveningValue === 'yes';
  
  // If attending, validate participant information
  if (attendingAny) {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const prefix = elements.prefix.value;
    const position = document.getElementById('position').value.trim();
    const organization = document.getElementById('organization').value.trim();
    
    if (!prefix) {
      showResponse('❌ กรุณาเลือกคำนำหน้าชื่อ', 'danger');
      return false;
    }
    
    if (!firstname || !lastname) {
      showResponse('❌ กรุณากรอกชื่อ-นามสกุลให้ครบ', 'danger');
      return false;
    }
    
    if (!email) {
      showResponse('❌ กรุณากรอกอีเมล', 'danger');
      return false;
    }

    if (!/^[0-9]{9,10}$/.test(phone)) {
      showResponse('❌ กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (9-10 หลัก)', 'danger');
      return false;
    }
    
    if (!position) {
      showResponse('❌ กรุณากรอกตำแหน่ง', 'danger');
      return false;
    }
    
    if (!organization) {
      showResponse('❌ กรุณากรอกหน่วยงาน', 'danger');
      return false;
    }

    // Check PDPA consent
    const pdpaConsent = document.getElementById('pdpaConsent');
    if (!pdpaConsent.checked) {
      showResponse('❌ กรุณายอมรับนโยบายคุ้มครองข้อมูลส่วนบุคคล', 'danger');
      return false;
    }
  }

  return true;
}

// ========================================
// Prepare form data
// ========================================
function prepareFormData() {
  const mainOrgType = document.querySelector('input[name="mainOrgType"]:checked').value;
  const morningValue = elements.attendMorning.value;
  const eveningValue = elements.attendEvening.value;
  const attendingAny = morningValue === 'yes' || eveningValue === 'yes';
  
  return {
    uid: attendingAny ? generateUID(mainOrgType) : '',
    mainOrgType: mainOrgType,
    thaiGroup: elements.thaiGroup.value || '',
    thaiSubDetail: elements.thaiSubDetail.value || '',
    intSubDetail: elements.intSubDetail.value || '',
    embassySubDetail: elements.embassySubDetail.value || '',
    attendMorning: morningValue || '',
    needParking: elements.needParking.value || '',
    carPlate: document.getElementById('carPlate').value.trim() || '',
    attendEvening: eveningValue || '',
    foodType: document.getElementById('foodType').value || '',
    foodAllergy: document.getElementById('foodAllergy').value.trim() || '',
    withSpouse: elements.withSpouse.value || '',
    spousePrefix: document.getElementById('spousePrefix').value || '',
    spouseFirst: document.getElementById('spouseFirst').value.trim() || '',
    spouseLast: document.getElementById('spouseLast').value.trim() || '',
    spouseFood: document.getElementById('spouseFood').value || '',
    spouseAllergy: document.getElementById('spouseAllergy').value.trim() || '',
    // Participant info - only if attending
    prefix: attendingAny ? (elements.prefix.value === 'other' 
      ? document.getElementById('prefixOther').value 
      : elements.prefix.value) : '',
    firstname: attendingAny ? document.getElementById('firstname').value.trim() : '',
    lastname: attendingAny ? document.getElementById('lastname').value.trim() : '',
    email: attendingAny ? document.getElementById('email').value.trim() : '',
    phone: attendingAny ? document.getElementById('phone').value.trim() : '',
    position: attendingAny ? document.getElementById('position').value.trim() : '',
    organization: attendingAny ? document.getElementById('organization').value.trim() : '',
    coordName: attendingAny ? document.getElementById('coordName').value.trim() : '',
    coordEmail: attendingAny ? document.getElementById('coordEmail').value.trim() : '',
    coordPhone: attendingAny ? document.getElementById('coordPhone').value.trim() : '',
    // Flag to indicate if QR code should be generated
    needsQR: attendingAny
  };
}

// ========================================
// Update UI after registration
// ========================================
function updateUIAfterRegistration(data) {
  if (data.needsQR) {
    // Update status panel for attending
    document.getElementById('uidText').textContent = data.uid;
    document.getElementById('statusText').textContent = 'ลงทะเบียนแล้ว (Registered)';
    document.getElementById('emailText').textContent = data.email;
    document.getElementById('phoneText').textContent = data.phone;

    // Show QR Code
    const qrCanvas = document.getElementById('qrCanvas');
    const qrPlaceholder = document.getElementById('qrPlaceholder');
    if (qrCanvas && qrPlaceholder) {
      qrCanvas.classList.remove('hidden');
      qrPlaceholder.classList.add('hidden');
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
  } else {
    // Update status panel for not attending
    document.getElementById('statusText').textContent = 'ยืนยันไม่เข้าร่วม (Not Attending)';
    document.getElementById('uidText').textContent = 'N/A';
    document.getElementById('emailText').textContent = '-';
    document.getElementById('phoneText').textContent = '-';
  }
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
    '<div class="d-flex align-items-center"><div class="spinner-border spinner-border-sm me-2"></div>กำลังส่งข้อมูล... กรุณารอสักครู่</div>',
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
    if (data.needsQR) {
      showResponse(
        `✅ ลงทะเบียนสำเร็จ!<br><strong>UID:</strong> ${data.uid}<br>โปรดตรวจสอบ QR Code และข้อมูลทางอีเมล`,
        'success'
      );
    } else {
      showResponse(
        '✅ ส่งข้อมูลสำเร็จ! ขอบคุณที่ให้ข้อมูลกับเรา<br>Thank you for your response!',
        'success'
      );
    }

  } catch (error) {
    console.error('Registration Error:', error);
    showResponse(
      '❌ เกิดข้อผิดพลาดในการส่งข้อมูล<br>กรุณาลองใหม่อีกครั้งหรือติดต่อเจ้าหน้าที่',
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
