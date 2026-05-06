import { defineField, defineType } from "sanity";

/* ─── Helpers ─── */
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

/* ══════ Shared (Navbar / Footer / Common) ══════ */
export const sharedContent = defineType({
  name: "sharedContent", title: "🔗 Navbar / Footer / ข้อความส่วนกลาง", type: "document",
  fields: [
    tri("brand", "ชื่อแบรนด์", "ชื่อบริษัทที่แสดงบน Navbar", { en: "Japan System Thailand", th: "Japan System Thailand", ja: "Japan System Thailand" }),
    tri("navHome", "เมนู: หน้าแรก", "", { en: "Home", th: "หน้าแรก", ja: "ホーム" }),
    tri("navSolution", "เมนู: Solution", "", { en: "Solution", th: "โซลูชัน", ja: "ソリューション" }),
    tri("navNewRelease", "เมนู: New Release", "", { en: "New Release", th: "ข่าวสาร/ผลิตภัณฑ์ใหม่", ja: "新製品" }),
    tri("navItSystem", "เมนู: IT System", "", { en: "IT System", th: "ระบบ IT", ja: "ITシステム" }),
    tri("navETax", "เมนู: e-Tax", "", { en: "e-Tax Invoice & e-Receipt", th: "e-Tax Invoice & e-Receipt", ja: "e-Tax Invoice & e-Receipt" }),
    tri("navInvoice", "เมนู: Invoice", "", { en: "Invoice & e-Receipt", th: "Invoice & e-Receipt", ja: "Invoice / e-Receipt" }),
    tri("navMarketing", "เมนู: Marketing", "", { en: "Marketing", th: "การตลาด", ja: "マーケティング" }),
    tri("navMyLogStar", "เมนู: MyLogStar", "", { en: "My Log Star", th: "My Log Star", ja: "My Log Star" }),
    tri("navCompany", "เมนู: Company", "", { en: "Company", th: "ข้อมูลบริษัท", ja: "会社概要" }),
    tri("navContact", "เมนู: Contact", "", { en: "Contact", th: "ติดต่อเรา", ja: "お問い合わせ" }),
    tri("readMore", "ปุ่ม: อ่านเพิ่มเติม", "", { en: "READ MORE", th: "อ่านเพิ่มเติม", ja: "詳細を見る" }),
    tri("learnMore", "ปุ่ม: ดูเพิ่มเติม", "", { en: "Learn more", th: "ดูเพิ่มเติม", ja: "もっと見る" }),
    tri("send", "ปุ่ม: ส่งข้อความ", "", { en: "Send message", th: "ส่งข้อความ", ja: "送信" }),
    tri("copyright", "ข้อความลิขสิทธิ์ (Footer)", "", { en: "Copyright Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd. All rights Reserved." }),
    tri("addressValue", "ที่อยู่บริษัท", "", { en: "28th Fl., 253 Asoke Building, Sukhumvit 21 Rd., Khlong Toei Nuea, Watthana, Bangkok 10110.", th: "ชั้น 28, 253 อาคารอโศก, ถนนสุขุมวิท 21, คลองเตยเหนือ, วัฒนา, กรุงเทพฯ 10110" }),
    tri("footerCompany", "Footer: Company Profile", "", { en: "Company Profile", th: "ข้อมูลบริษัท", ja: "会社概要" }),
    tri("footerContact", "Footer: Contact", "", { en: "Contact", th: "ติดต่อเรา", ja: "お問い合わせ" }),
  ],
  preview: { prepare: () => ({ title: "🔗 Navbar / Footer / ข้อความส่วนกลาง" }) },
});

/* ══════ 🏠 Homepage ══════ */
export const homePage = defineType({
  name: "homePage", title: "🏠 หน้าแรก", type: "document",
  fields: [
    tri("heroTitle", "✏️ หัวข้อใหญ่ (Hero)", "ข้อความตัวใหญ่บนรูปพื้นหลัง", { en: "We will help your company with DX (Digital Transformation).", th: "Japan System พร้อมช่วยเหลือบริษัทของคุณด้าน DX", ja: "Japan System では貴社の DX をお手伝いいたします。" }),
    tri("heroSubtitle", "✏️ คำอธิบาย Hero", "ข้อความตัวเล็กใต้หัวข้อใหญ่", { en: "Minimal, precise, and engineered for enterprise—system development, e-Tax solutions, and DX marketing.", th: "เรียบหรู แม่นยำ และออกแบบเพื่อองค์กร", ja: "ミニマルで精緻。システム開発、e-Tax、DX/ITマーケティング" }),
    tri("heroCtaPrimary", "ปุ่ม CTA หลัก", "", { en: "Explore services", th: "ดูบริการ", ja: "サービスを見る" }),
    tri("heroCtaSecondary", "ปุ่ม CTA รอง", "", { en: "Company profile", th: "ข้อมูลบริษัท", ja: "会社概要" }),
    tri("servicesTitle", "✏️ หัวข้อส่วนบริการ", "", { en: "Our Service", th: "บริการของเรา", ja: "サービス" }),
    tri("svc1Title", "บริการ 1: ชื่อ", "", { en: "IT System", th: "พัฒนาระบบ IT", ja: "ITシステム開発" }),
    tri("svc1Desc", "บริการ 1: คำอธิบาย", "", { en: "Custom software development and system integration solutions.", th: "ออกแบบสถาปัตยกรรมก่อนพัฒนา เพื่อคุณภาพและความเร็ว" }),
    tri("svc2Title", "บริการ 2: ชื่อ", "", { en: "e-Tax Invoice & e-Receipt", th: "e-Tax Invoice & e-Receipt" }),
    tri("svc2Desc", "บริการ 2: คำอธิบาย", "", { en: "Comprehensive tax management and compliance solutions.", th: "ปรับกระบวนการเป็นดิจิทัล ลดต้นทุน" }),
    tri("svc3Title", "บริการ 3: ชื่อ", "", { en: "Website & Online marketing", th: "การตลาด DX / IT" }),
    tri("svc3Desc", "บริการ 3: คำอธิบาย", "", { en: "Digital transformation and IT marketing strategies.", th: "ตั้งแต่ข้อมูลจนถึงแคมเปญ" }),
    tri("svc4Title", "บริการ 4: ชื่อ", "", { en: "Mylogstar", th: "ความปลอดภัย & การบันทึก" }),
    tri("svc4Desc", "บริการ 4: คำอธิบาย", "", { en: "Advanced security solutions and logging systems.", th: "รวมบันทึกตรวจสอบและระบบมอนิเตอร์" }),
    tri("svc5Title", "บริการ 5: ชื่อ", "", { en: "New Release", th: "ที่ปรึกษา" }),
    tri("svc5Desc", "บริการ 5: คำอธิบาย", "", { en: "Expert consulting services for digital transformation.", th: "Roadmap ที่ชัดเจนสำหรับผู้บริหาร" }),
  ],
  preview: { prepare: () => ({ title: "🏠 หน้าแรก" }) },
});

/* ══════ 🏢 Company ══════ */
export const companyPage = defineType({
  name: "companyPage", title: "🏢 ข้อมูลบริษัท", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "Company Profile", th: "ข้อมูลบริษัท Japan System (Thailand)", ja: "会社概要" }),
    tri("pageSubtitle", "✏️ คำอธิบายหน้า", "", { en: "A calm, precise presence in Thailand—delivering Japanese-quality execution.", th: "วิสัยทัศน์ที่ชัดเจนในไทย—คุณภาพงานแบบญี่ปุ่น" }),
    tri("aboutTitle", "หัวข้อ: เกี่ยวกับเรา", "", { en: "About Our Company", th: "เกี่ยวกับบริษัท" }),
    tri("aboutBody", "เนื้อหา: เกี่ยวกับเรา", "", { en: "Japan System (Thailand) Co., Ltd. provides high-quality IT solutions.", th: "Japan System (Thailand) Co., Ltd. ให้บริการโซลูชัน IT คุณภาพสูง" }),
    tri("infoTitle", "หัวข้อ: ข้อมูลบริษัท", "", { en: "Corporate Information", th: "ข้อมูลนิติบุคคล" }),
    tri("infoCompanyName", "ชื่อบริษัท", "", { en: "Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd." }),
    tri("infoAddress", "ที่อยู่", "", { en: "28th Fl., 253 Asoke Building, Sukhumvit 21 Rd.", th: "ชั้น 28, 253 อาคารอโศก, ถนนสุขุมวิท 21" }),
    tri("infoEstablishment", "ก่อตั้ง", "", { en: "2015/12" }),
    tri("infoCapital", "ทุนจดทะเบียน", "", { en: "2,000,000 THB" }),
    tri("infoRepresentative", "ผู้แทน", "", { en: "Tsubasa Hoshino" }),
  ],
  preview: { prepare: () => ({ title: "🏢 ข้อมูลบริษัท" }) },
});

/* ══════ 💻 IT System ══════ */
export const itSystemPage = defineType({
  name: "itSystemPage", title: "💻 IT System", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "IT System", th: "โซลูชันระบบ IT" }),
    tri("pageSubtitle", "✏️ คำอธิบาย", "", { en: "Feature-rich solutions delivered with thin-line precision.", th: "โซลูชันครบ พร้อมไอคอนเส้นบางแบบมืออาชีพ" }),
    tri("productsTitle", "หัวข้อ: ผลิตภัณฑ์/บริการ", "", { en: "Products / Services", th: "ผลิตภัณฑ์ / บริการ" }),
    tri("svcItem1", "บริการ 1", "", { en: "Maintenance", th: "บำรุงรักษาระบบ" }),
    tri("svcItem2", "บริการ 2", "", { en: "Website & Online Marketing", th: "เว็บไซต์และการตลาดออนไลน์" }),
    tri("svcItem3", "บริการ 3", "", { en: "IT Support & Help Desk", th: "ฝ่ายสนับสนุนด้านไอที" }),
    tri("svcItem4", "บริการ 4", "", { en: "Product Management System", th: "ระบบจัดการสินค้า" }),
    tri("feat1Title", "Feature 1: ชื่อ", "", { en: "Web Application" }),
    tri("feat1Desc", "Feature 1: คำอธิบาย", "", { en: "Scalable app delivery for modern enterprises.", th: "ระบบเว็บที่ขยายได้สำหรับองค์กร" }),
    tri("feat2Title", "Feature 2: ชื่อ", "", { en: "Mobile & Tablet" }),
    tri("feat2Desc", "Feature 2: คำอธิบาย", "", { en: "High-quality UX across devices.", th: "UX คุณภาพสูง ครอบคลุมทุกอุปกรณ์" }),
    tri("feat3Title", "Feature 3: ชื่อ", "", { en: "Integration" }),
    tri("feat3Desc", "Feature 3: คำอธิบาย", "", { en: "APIs, ERP, and workflow automation.", th: "เชื่อมต่อ API/ERP/Workflow อย่างลงตัว" }),
    tri("feat4Title", "Feature 4: ชื่อ", "", { en: "Cloud & DevOps" }),
    tri("feat4Desc", "Feature 4: คำอธิบาย", "", { en: "Reliable CI/CD and infrastructure.", th: "CI/CD และโครงสร้างพื้นฐานที่เชื่อถือได้" }),
  ],
  preview: { prepare: () => ({ title: "💻 IT System" }) },
});

/* ══════ 📄 E-Tax ══════ */
export const eTaxPage = defineType({
  name: "eTaxPage", title: "📄 E-Tax", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "e-Tax Invoice & e-Receipt" }),
    tri("heroSubtitle", "✏️ คำอธิบาย Hero", "", { en: "Clean professionalism—built for trust, compliance, and operational speed.", th: "โทนมืออาชีพ เน้นความน่าเชื่อถือ" }),
    tri("painHeading", "หัวข้อคำถาม Pain", "", { en: "Are you wasting your time on handwritten signatures on various documents?", th: "คุณกำลังเสียเวลาไปกับการเซ็นชื่อด้วยลายมือบนเอกสารต่าง ๆ อยู่หรือไม่?" }),
    tri("painTitle", "หัวข้อ: Pain Points", "", { en: "Pain Points", th: "ปัญหาที่พบบ่อย" }),
    tri("painItem1", "Pain 1", "", { en: "Too many documents to sign", th: "เอกสารที่ต้องเซ็นมีจำนวนมาก" }),
    tri("painItem2", "Pain 2", "", { en: "Sometimes I have to go to the office just for one document", th: "บางครั้งต้องเข้าบริษัทเพื่อเซ็นเอกสารเพียง 1 ฉบับ" }),
    tri("painItem3", "Pain 3", "", { en: "The time to sign has become a burden on my work", th: "เวลาที่ใช้ในการเซ็นกลายเป็นภาระของงาน" }),
    tri("painItem4", "Pain 4", "", { en: "Get tired when signing", th: "เหนื่อย/ล้าจากการเซ็นเอกสาร" }),
    tri("painItem5", "Pain 5", "", { en: "Very troublesome because it is a sign of many", th: "ยุ่งยากมากเพราะต้องเซ็นหลายฉบับ" }),
    tri("aboutTitle", "หัวข้อ: เกี่ยวกับ e-Tax", "", { en: "About e-Tax Invoice & e-Receipt and Digital Signature" }),
    triLong("aboutDesc", "เนื้อหา: เกี่ยวกับ e-Tax", "", { en: "In Japan System We support the introduction of e-Tax invoice & e-Receipt and digital signatures..." }),
    tri("defEtaxTitle", "หัวข้อ: e-Tax คืออะไร", "", { en: "What is e-Tax Invoice & e-Receipt?" }),
    triLong("defEtaxDesc", "เนื้อหา: e-Tax คืออะไร", "", { en: "Refers to the use of tax invoices, electronic receipts, and digital signatures." }),
    tri("defSigTitle", "หัวข้อ: Digital Signature คืออะไร", "", { en: "What is a digital signature?" }),
    triLong("defSigDesc", "เนื้อหา: Digital Signature คืออะไร", "", { en: "Digital signature and electronic signatures it is the information attached to the Invoice..." }),
    tri("benefitsTitle", "หัวข้อ: ประโยชน์", "", { en: "Benefits of introducing e-Tax Invoice & e-Receipt and digital signatures" }),
    tri("benefit1", "ประโยชน์ 1", "", { en: "Saving tax invoices on your own server or cloud server..." }),
    tri("benefit2", "ประโยชน์ 2", "", { en: "Copies of certifications are stored on the IRS server." }),
    tri("benefit3", "ประโยชน์ 3", "", { en: "There is no need to go to the office and sign." }),
    tri("benefit4", "ประโยชน์ 4", "", { en: "Eliminate the risk of misuse of signatures..." }),
    tri("mechanismTitle", "หัวข้อ: กลไก", "", { en: "e-Tax Invoice & e-Receipt and Digital Signature Mechanism" }),
    tri("introTitle", "หัวข้อ: การนำมาใช้", "", { en: "For the introduction of e-Tax Invoice & e-Receipt and digital signatures," }),
    triLong("introDesc", "เนื้อหา: การนำมาใช้", "", { en: "In addition to the application process for various services..." }),
    tri("costTitle", "หัวข้อ: ลดต้นทุน", "", { en: "Cost reduction example by introducing e-Tax Invoice & e-Receipt" }),
    tri("solutionTitle", "หัวข้อ: โซลูชัน", "", { en: "Comprehensive e-Tax & Digital Signature Support" }),
    triLong("solutionDesc", "เนื้อหา: โซลูชัน", "", { en: "In Japan System, we support e-Tax Invoice & e-Receipt—one of the nine DX measures..." }),
    tri("contactBtn", "ปุ่ม: ติดต่อ", "", { en: "Contact", th: "ติดต่อเรา" }),
  ],
  preview: { prepare: () => ({ title: "📄 e-Tax Invoice & e-Receipt and Digital Signature" }) },
});

/* ══════ 📢 Marketing ══════ */
export const marketingPage = defineType({
  name: "marketingPage", title: "📢 Marketing", type: "document",
  fields: [
    tri("pageTitle", "✏️ หัวข้อหน้า", "", { en: "Marketing", th: "การตลาด" }),
    tri("pageSubtitle", "✏️ คำอธิบาย", "", { en: "Modern DX and IT marketing services.", th: "บริการ DX และ IT การตลาด แบบโมเดิร์น" }),
    tri("heroTitle", "หัวข้อ Hero", "", { en: "Website and Online Marketing", th: "เว็บไซต์และการตลาดออนไลน์" }),
    tri("cardWebsite", "Card: Website", "", { en: "Website", th: "เว็บไซต์" }),
    tri("cardOnlineMkt", "Card: Online Marketing", "", { en: "Online Marketing", th: "การตลาดออนไลน์" }),
    tri("card1", "Card 1", "", { en: "DX Strategy" }),
    tri("card2", "Card 2", "", { en: "MarTech Stack" }),
    tri("card3", "Card 3", "", { en: "Content Systems" }),
    tri("card4", "Card 4", "", { en: "Performance Ads" }),
    tri("card5", "Card 5", "", { en: "SEO & Technical" }),
    tri("card6", "Card 6", "", { en: "Analytics & BI" }),
    tri("card7", "Card 7", "", { en: "CRM Journeys" }),
    tri("card8", "Card 8", "", { en: "Brand + Product" }),
  ],
  preview: { prepare: () => ({ title: "📢 Marketing" }) },
});
