# KPI Congress 27 - Registration Form (Updated)

## 🎯 การเปลี่ยนแปลงหลัก (Major Changes)

### 1. เปลี่ยนลำดับการกรอกฟอร์ม (New Form Flow)
**ลำดับเดิม:**
1. เลือก Organization Type
2. กรอก Participant Information
3. เลือก Morning/Evening Sessions

**ลำดับใหม่:**
1. เลือก Organization Type
2. **เลือก Morning/Evening Sessions ก่อน**
3. **ถ้าเข้าร่วมอย่างน้อย 1 งาน → แสดงฟอร์ม Participant Information**
4. **ถ้าไม่เข้าร่วมเลย → ไม่ต้องกรอกข้อมูลส่วนตัว กดส่งได้เลย**

### 2. การจัดการ QR Code (QR Code Management)
- ✅ **เข้าร่วมงาน** → สร้าง UID และ QR Code
- ❌ **ไม่เข้าร่วม** → ไม่สร้าง UID และ QR Code
- อีเมลที่ส่งจะไม่มี QR Code แนบมาด้วยสำหรับผู้ที่ไม่เข้าร่วม

### 3. Validation ใหม่ (New Validation)
- ต้องเลือกว่าจะเข้าร่วมช่วงเช้า/เย็นหรือไม่ก่อนดำเนินการต่อ
- ข้อมูล Participant Information เป็น required เฉพาะผู้ที่เข้าร่วมงาน
- PDPA consent เป็น required เฉพาะผู้ที่เข้าร่วมงาน

## 📋 การทำงานตามประเภทหน่วยงาน (Organization Type Flow)

### Thai Organization (หน่วยงานไทย)

#### กรรมาธิการ สภาผู้แทนราษฎร / วุฒิสภา (kmth_sp / kmth_sw)
1. เลือก Organization Type → Thai
2. เลือกกลุ่ม → กรรมาธิการ SP/SW
3. **แสดง Morning + Evening Sessions**
4. ถ้าเลือกเข้าร่วมอย่างน้อย 1 งาน → แสดงฟอร์มข้อมูลส่วนตัว
5. ถ้าไม่เข้าร่วมทั้ง 2 งาน → แสดงข้อความขอบคุณ, กดส่งได้เลย

#### หน่วยงานอื่น ๆ (thai_other)
1. เลือก Organization Type → Thai
2. เลือกกลุ่ม → หน่วยงานอื่น ๆ
3. **แสดงเฉพาะ Evening Session**
4. ถ้าเลือกเข้าร่วม → แสดงฟอร์มข้อมูลส่วนตัว
5. ถ้าไม่เข้าร่วม → แสดงข้อความขอบคุณ, กดส่งได้เลย

### International Organization / Embassy
1. เลือก Organization Type → International หรือ Embassy
2. เลือกหน่วยงาน/ประเทศ
3. **แสดง Morning + Evening Sessions ทันที**
4. ถ้าเลือกเข้าร่วมอย่างน้อย 1 งาน → แสดงฟอร์มข้อมูลส่วนตัว
5. ถ้าไม่เข้าร่วมทั้ง 2 งาน → แสดงข้อความขอบคุณ, กดส่งได้เลย

## 🔧 การปรับเปลี่ยนไฟล์ (File Changes)

### index.html
- ย้าย Morning/Evening Sessions มาอยู่ก่อน Participant Information
- เพิ่ม `<div id="sessionSelection">` สำหรับแสดง/ซ่อน sessions
- เพิ่ม `<div id="notAttendingMessage">` สำหรับแสดงข้อความเมื่อไม่เข้าร่วม
- เพิ่ม `<div id="participantBlock">` ครอบฟอร์มข้อมูลส่วนตัว
- ลบ `required` attributes จากฟิลด์ Participant Information
- เพิ่ม QR placeholder สำหรับแสดงข้อความเมื่อยังไม่ได้ลงทะเบียน

### script.js
- เพิ่มฟังก์ชัน `checkAttendance()` เช็คว่าเข้าร่วมงานหรือไม่
- ปรับ validation ให้เช็คข้อมูลส่วนตัวเฉพาะผู้ที่เข้าร่วม
- เพิ่มฟิลด์ `needsQR` ในข้อมูลที่ส่งไปยัง backend
- ปรับ `prepareFormData()` ให้ส่งข้อมูลว่าง ถ้าไม่เข้าร่วม
- ปรับ `updateUIAfterRegistration()` ให้แสดง UI ต่างกันระหว่างเข้าร่วม/ไม่เข้าร่วม
- ปรับ logic การแสดง/ซ่อน sections ตามลำดับใหม่

### style.css
- เพิ่ม style สำหรับ `#qrPlaceholder`
- เพิ่ม style สำหรับ alert heading (h5)

## 📊 Data Structure ที่ส่งไปยัง Backend

### กรณีเข้าร่วมงาน (Attending)
```javascript
{
  uid: "TH-xxx-xxx",           // มี UID
  needsQR: true,               // ต้องการ QR Code
  mainOrgType: "...",
  // ... organization details
  attendMorning: "yes/no",
  attendEvening: "yes/no",
  // ... session details
  prefix: "...",               // มีข้อมูลเต็ม
  firstname: "...",
  lastname: "...",
  email: "...",
  phone: "...",
  // ... participant details
}
```

### กรณีไม่เข้าร่วมงาน (Not Attending)
```javascript
{
  uid: "",                     // ไม่มี UID
  needsQR: false,              // ไม่ต้องการ QR Code
  mainOrgType: "...",
  // ... organization details
  attendMorning: "no",
  attendEvening: "no",
  prefix: "",                  // ข้อมูลว่างหมด
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  // ... empty participant details
}
```

## 🚀 วิธีใช้งาน (How to Use)

1. อัพโหลดไฟล์ทั้ง 3 ไฟล์ไปยัง web server:
   - `index.html`
   - `script.js`
   - `style.css`

2. อัพเดต Google Apps Script backend:
   - เช็คฟิลด์ `needsQR` เพื่อตัดสินใจว่าจะสร้าง QR Code หรือไม่
   - ถ้า `needsQR === true` → สร้าง QR Code และส่งอีเมล
   - ถ้า `needsQR === false` → บันทึกข้อมูลเฉพาะการไม่เข้าร่วม ไม่ส่ง QR

## 📝 ตัวอย่าง Backend Code (Google Apps Script)

```javascript
function doPost(e) {
  const data = e.parameter;
  
  // เช็คว่าต้องการ QR Code หรือไม่
  const needsQR = data.needsQR === 'true';
  
  if (needsQR) {
    // บันทึกข้อมูลผู้เข้าร่วม
    // สร้าง QR Code
    // ส่งอีเมลพร้อม QR Code
  } else {
    // บันทึกเฉพาะข้อมูลการไม่เข้าร่วม
    // ส่งอีเมลขอบคุณ (ไม่มี QR Code)
  }
  
  return ContentService.createTextOutput(JSON.stringify({success: true}));
}
```

## ✅ การทดสอบ (Testing Checklist)

- [ ] Thai Org (kmth_sp) - เข้าร่วมทั้ง 2 งาน → มี QR
- [ ] Thai Org (kmth_sp) - เข้าร่วม 1 งาน → มี QR
- [ ] Thai Org (kmth_sp) - ไม่เข้าร่วมเลย → ไม่มี QR
- [ ] Thai Org (thai_other) - เข้าร่วม → มี QR
- [ ] Thai Org (thai_other) - ไม่เข้าร่วม → ไม่มี QR
- [ ] International Org - เข้าร่วมอย่างน้อย 1 งาน → มี QR
- [ ] International Org - ไม่เข้าร่วมเลย → ไม่มี QR
- [ ] Embassy - เข้าร่วมอย่างน้อย 1 งาน → มี QR
- [ ] Embassy - ไม่เข้าร่วมเลย → ไม่มี QR

## 💡 หมายเหตุสำคัญ (Important Notes)

1. **Validation**: ฟอร์มจะบังคับให้เลือกว่าจะเข้าร่วมงานหรือไม่ก่อนที่จะส่งได้
2. **User Experience**: ผู้ใช้ที่ไม่เข้าร่วมสามารถส่งฟอร์มได้โดยไม่ต้องกรอกข้อมูลส่วนตัว
3. **QR Code**: QR Code จะถูกสร้างเฉพาะผู้ที่เข้าร่วมงาน
4. **Backend Integration**: Backend ต้องเช็คฟิลด์ `needsQR` เพื่อจัดการกับ QR Code ให้ถูกต้อง

---

สร้างโดย: Claude Sonnet 4.5
วันที่: 2025
