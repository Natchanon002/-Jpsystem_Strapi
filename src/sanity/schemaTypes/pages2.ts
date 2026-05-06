import { defineField, defineType } from "sanity";

/* ─── Helpers (same as pages.ts) ─── */
function tri(name: string, title: string, desc: string, ph?: { en?: string; th?: string; ja?: string }) {
  return defineField({ name, title, type: "object", description: desc, fields: [
    defineField({ name: "en", title: "🇬🇧 EN", type: "text", rows: 3, placeholder: ph?.en || "" }),
    defineField({ name: "th", title: "🇹🇭 TH", type: "text", rows: 3, placeholder: ph?.th || "" }),
    defineField({ name: "ja", title: "🇯🇵 JP", type: "text", rows: 3, placeholder: ph?.ja || "" }),
  ], options: { collapsible: true, collapsed: false } });
}
function triLong(name: string, title: string, desc: string, ph?: { en?: string; th?: string; ja?: string }) {
  return defineField({ name, title, type: "object", description: desc, fields: [
    defineField({ name: "en", title: "🇬🇧 EN", type: "text", rows: 8, placeholder: ph?.en || "" }),
    defineField({ name: "th", title: "🇹🇭 TH", type: "text", rows: 8, placeholder: ph?.th || "" }),
    defineField({ name: "ja", title: "🇯🇵 JP", type: "text", rows: 8, placeholder: ph?.ja || "" }),
  ], options: { collapsible: true, collapsed: true } });
}

/* ══════ 📊 MylogStar ══════ */
export const myLogStarPage = defineType({
  name: "myLogStarPage", title: "📊 MylogStar", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "My Log Star" }),
    tri("pageSubtitle", "✏️ คำอธิบาย", "", { en: "Enterprise log management with deep technical clarity.", th: "ระบบจัดการ Log สำหรับองค์กร" }),
    triLong("heroDesc", "✏️ เนื้อหาหลัก (Hero)", "ข้อความยาวอธิบาย MylogStar", { en: "What is log management? When you use a personal computer...", th: "การจัดการ Log คืออะไร?..." }),
    tri("featureTitle", "หัวข้อ: Features", "", { en: "MylogStar Features", th: "คุณสมบัติของ MylogStar" }),
    tri("featLogTitle", "Feature: Log Collection", "", { en: "Log collection power", th: "พลังในการเก็บ Log" }),
    tri("featLogDesc", "Feature: Log Collection คำอธิบาย", "", { en: "Acquires logs at the kernel level of the OS.", th: "เก็บ Log ในระดับ Kernel ของ OS" }),
    tri("featAvailTitle", "Feature: Log Availability", "", { en: "Log availability", th: "ความพร้อมใช้งานของ Log" }),
    tri("featAvailDesc", "Feature: Log Availability คำอธิบาย", "", { en: "Highly accurate logs for information leakage countermeasures.", th: "Log ที่มีความแม่นยำสูง" }),
    // Accordion 1
    tri("acc1Title", "📂 Accordion 1 — ชื่อ", "ปุ่มกดเปิด-ปิด แรก", { en: "My log star" }),
    triLong("acc1Content", "📂 Accordion 1 — เนื้อหา", "ข้อความยาวข้างใน", { en: "What is log management?\nWhen you use a personal computer..." }),
    // Accordion 2
    tri("acc2Title", "📂 Accordion 2 — ชื่อ", "", { en: "MylogStar Features" }),
    triLong("acc2Content", "📂 Accordion 2 — เนื้อหา", "Log collection power, availability, telework", { en: "Log collection power\nWhen managing logs..." }),
    // Accordion 3
    tri("acc3Title", "📂 Accordion 3 — ชื่อ", "", { en: "My log Star FileServer" }),
    triLong("acc3Content", "📂 Accordion 3 — เนื้อหา", "FileServer monitoring, access log, audit log", { en: "Pinpoint monitoring of important servers..." }),
    // Accordion 4
    tri("acc4Title", "📂 Accordion 4 — ชื่อ", "", { en: "My log star" }),
    triLong("acc4Content", "📂 Accordion 4 — เนื้อหา", "Desktop log management, device control", { en: "My log Star Desktop — Log management & device control..." }),
    // Chips
    tri("chip1", "Chip 1", "", { en: "SIEM-ready", th: "พร้อมต่อ SIEM" }),
    tri("chip2", "Chip 2", "", { en: "Audit trails", th: "ตรวจสอบย้อนหลัง" }),
    tri("chip3", "Chip 3", "", { en: "Retention policies", th: "นโยบายการเก็บรักษา" }),
    tri("chip4", "Chip 4", "", { en: "Role-based access", th: "กำหนดสิทธิ์ผู้ใช้" }),
    // Details
    tri("det1Title", "Detail 1: ชื่อ", "", { en: "Architecture", th: "สถาปัตยกรรม" }),
    tri("det1Desc", "Detail 1: คำอธิบาย", "", { en: "Designed for predictable ingestion pipelines.", th: "ออกแบบเพื่อ ingestion ที่คาดเดาได้" }),
    tri("det2Title", "Detail 2: ชื่อ", "", { en: "Compliance", th: "การปฏิบัติตามกฎระเบียบ" }),
    tri("det2Desc", "Detail 2: คำอธิบาย", "", { en: "Retention, immutability options, and exportability." }),
    tri("det3Title", "Detail 3: ชื่อ", "", { en: "Performance", th: "ประสิทธิภาพ" }),
    tri("det3Desc", "Detail 3: คำอธิบาย", "", { en: "Optimized querying patterns and dashboards." }),
  ],
  preview: { prepare: () => ({ title: "📊 MylogStar" }) },
});

/* ══════ 🧾 Invoice & E-Receipt ══════ */
export const invoicePage = defineType({
  name: "invoicePage", title: "📄 e-Tax Invoice & e-Receipt (หน้าสรุป)", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "Invoice & e-Receipt" }),
    tri("heroSubtitle", "✏️ คำอธิบาย", "", { en: "Digital invoicing and receipts—streamlined for compliance.", th: "ใบแจ้งหนี้และใบเสร็จดิจิทัล" }),
    tri("heroChip", "Chip: Hero", "", { en: "Clean Professionalism", th: "ความเป็นมืออาชีพ" }),
    tri("painTitle", "หัวข้อ: Pain Points", "", { en: "Pain Points", th: "ปัญหาที่พบบ่อย" }),
    tri("painItem1", "Pain 1", "", { en: "Too many documents to sign", th: "เอกสารที่ต้องเซ็นมีจำนวนมาก" }),
    tri("painItem2", "Pain 2", "", { en: "Sometimes I have to go to the office just for one document" }),
    tri("painItem3", "Pain 3", "", { en: "The time to sign has become a burden on my work" }),
    tri("painItem4", "Pain 4", "", { en: "Get tired when signing" }),
    tri("painItem5", "Pain 5", "", { en: "Very troublesome because it is a sign of many" }),
    tri("painItemSub", "Pain: คำอธิบายเพิ่ม", "", { en: "Reduce friction with digital workflow + secure signing." }),
    tri("solutionTitle", "หัวข้อ: Solution", "", { en: "Comprehensive Invoice & e-Receipt Support" }),
    triLong("solutionDesc", "เนื้อหา: Solution", "", { en: "Japan System supports Invoice & e-Receipt—one of the nine DX measures..." }),
    tri("blockEtaxTitle", "Block: e-Tax ชื่อ", "", { en: "What is e-Tax Invoice & e-Receipt" }),
    tri("blockEtaxDesc", "Block: e-Tax คำอธิบาย", "", { en: "Digitize invoice/receipt issuance, storage, and retrieval." }),
    tri("blockSigTitle", "Block: Digital Signature ชื่อ", "", { en: "What is Digital Signature" }),
    tri("blockSigDesc", "Block: Digital Signature คำอธิบาย", "", { en: "A secure signing method that verifies identity." }),
    tri("compareTitle", "หัวข้อ: เปรียบเทียบ", "", { en: "COST REDUCTION EXAMPLE BY INTRODUCING E-TAX" }),
    tri("trustTitle", "หัวข้อ: Trust", "", { en: "Trust by design", th: "ออกแบบเพื่อความน่าเชื่อถือ" }),
    tri("trustDesc", "เนื้อหา: Trust", "", { en: "Thin separators, clear information architecture, and enterprise-grade posture." }),
    tri("ctaTitle", "CTA: หัวข้อ", "", { en: "Ready to modernize approvals?", th: "พร้อมที่จะปรับปรุงกระบวนการอนุมัติหรือยัง?" }),
    tri("ctaDesc", "CTA: คำอธิบาย", "", { en: "Start with a clean pilot—then scale with confidence." }),
    tri("ctaPrimary", "ปุ่ม CTA หลัก", "", { en: "Contact us", th: "ติดต่อเรา" }),
    tri("ctaSecondary", "ปุ่ม CTA รอง", "", { en: "See e-Tax detail", th: "ดูรายละเอียด e-Tax" }),
  ],
  preview: { prepare: () => ({ title: "📄 e-Tax Invoice & e-Receipt (หน้าสรุป)" }) },
});

/* ══════ 🆕 New Release ══════ */
export const newReleasePage = defineType({
  name: "newReleasePage", title: "🆕 New Release", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "New Release", th: "ผลิตภัณฑ์ใหม่" }),
    tri("pageSubtitle", "✏️ คำอธิบาย", "", { en: "Clean, focused product updates with enterprise polish.", th: "อัปเดตผลิตภัณฑ์แบบเรียบหรู" }),
    tri("eTaxHeading", "หัวข้อ: e-Tax", "", { en: "Refers to the use of tax invoices," }),
    tri("taxInvoiceSubtitle", "หัวข้อ: Tax Invoice", "", { en: "Tax Invoice (Paper medium)", th: "ใบกำกับภาษี (รูปแบบกระดาษ)" }),
    tri("monthlyCostLabel", "ต้นทุนรายเดือน: หัวข้อ", "", { en: "Monthly cost when the circulation is 1,000 copies / month" }),
    tri("monthlyCostValue", "ต้นทุนรายเดือน: ค่า", "", { en: "39.82 Baht x 1,000 = 39,820 Baht / month" }),
    tri("monthlyCostReduction", "ต้นทุน: สรุป", "", { en: "Monthly 39,820 baht + labor cost reduction!" }),
    tri("product1Name", "ผลิตภัณฑ์ 1: ชื่อ", "", { en: "e-Tax" }),
    tri("product1Desc", "ผลิตภัณฑ์ 1: คำอธิบาย", "", { en: "A modern problem-solution workflow for tax digitization." }),
    tri("product2Name", "ผลิตภัณฑ์ 2: ชื่อ", "", { en: "My Log Star" }),
    tri("product2Desc", "ผลิตภัณฑ์ 2: คำอธิบาย", "", { en: "A secure log management platform—designed for compliance." }),
  ],
  preview: { prepare: () => ({ title: "🆕 New Release" }) },
});

/* ══════ 📞 Contact ══════ */
export const contactPage = defineType({
  name: "contactPage", title: "📞 ติดต่อเรา", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "Contact Us", th: "ติดต่อเรา", ja: "お問い合わせ" }),
    tri("pageSubtitle", "✏️ คำอธิบาย", "", { en: "If you have any questions or inquiries, please feel free to contact us.", th: "หากคุณมีคำถามหรือข้อสงสัยใด ๆ โปรดติดต่อเราได้เลย" }),
    tri("formTitle", "ฟอร์ม: หัวข้อ", "", { en: "Send us a message", th: "ส่งข้อความถึงเรา" }),
    tri("formCompanyName", "ฟอร์ม: ชื่อบริษัท", "", { en: "Company Name", th: "ชื่อบริษัท" }),
    tri("formName", "ฟอร์ม: ชื่อ", "", { en: "Name", th: "ชื่อ" }),
    tri("formEmail", "ฟอร์ม: อีเมล", "", { en: "Email", th: "อีเมล" }),
    tri("formSubject", "ฟอร์ม: หัวข้อ", "", { en: "Subject", th: "หัวข้อ" }),
    tri("formMessage", "ฟอร์ม: ข้อความ", "", { en: "Message", th: "ข้อความ" }),
    tri("formNote", "ฟอร์ม: หมายเหตุ", "", { en: "We'll respond within 1–2 business days.", th: "เราจะติดต่อกลับภายใน 1–2 วันทำการ" }),
    tri("officeTitle", "สำนักงาน: หัวข้อ", "", { en: "Office", th: "สำนักงาน" }),
    tri("officeLine1", "สำนักงาน: ที่อยู่", "", { en: "Asoke, Bangkok", th: "อโศก กรุงเทพฯ" }),
    tri("officeLine2", "สำนักงาน: เวลาทำการ", "", { en: "Mon–Fri, 09:00–18:00", th: "จันทร์–ศุกร์ 09:00–18:00" }),
  ],
  preview: { prepare: () => ({ title: "📞 ติดต่อเรา" }) },
});
