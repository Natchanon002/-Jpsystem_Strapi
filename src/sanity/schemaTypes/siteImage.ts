import { defineField, defineType } from "sanity";

export const siteImage = defineType({
  name: "siteImage",
  title: "รูปภาพเว็บไซต์",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "หน้าที่ใช้",
      type: "string",
      description: "เลือกหน้าที่ต้องการใส่/แก้รูป",
      options: {
        list: [
          { title: "🏠 หน้าแรก (Homepage)", value: "home" },
          { title: "🏢 ข้อมูลบริษัท (Company Profile)", value: "company-profile" },
          { title: "💻 IT System", value: "it-system" },
          { title: "📄 E-Tax", value: "e-tax" },
          { title: "📢 Marketing", value: "marketing" },
          { title: "📊 MylogStar", value: "my-log-star" },
          { title: "🧾 Invoice & E-Receipt", value: "invoice-e-receipt" },
          { title: "🆕 New Release", value: "new-release" },
          { title: "📞 ติดต่อเรา (Contact)", value: "contact" },
          { title: "🔗 ใช้ทุกหน้า (Navbar / Footer)", value: "shared" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "ตำแหน่งรูปในหน้า",
      type: "string",
      description: "เลือกว่ารูปนี้จะแสดงตรงไหนของหน้าเว็บ",
      options: {
        list: [
          { title: "🖼️ รูปพื้นหลัง Hero (รูปใหญ่ด้านบนสุด)", value: "hero-bg" },
          { title: "🏢 รูปประกอบเนื้อหา (ตรงกลางหน้า)", value: "content" },
          { title: "🎨 โลโก้/ไอคอน", value: "logo" },
          { title: "📸 รูปอื่นๆ", value: "other" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "title",
      title: "ชื่อรูป",
      type: "string",
      description: "ตั้งชื่อเพื่อให้จำง่าย เช่น 'รูปพื้นหลังหน้าแรก', 'โลโก้บริษัท'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currentImageNote",
      title: "📌 รูปปัจจุบันที่ใช้อยู่",
      type: "text",
      rows: 2,
      description: "จดไว้ว่ารูปเดิมชื่ออะไร/หน้าตาเป็นยังไง เพื่อกันแก้ผิดรูป",
      placeholder: "เช่น: รูปตึกสำนักงานสีขาว ชื่อไฟล์เดิม homebg.jpg",
    }),
    defineField({
      name: "image",
      title: "อัปโหลดรูปใหม่",
      type: "image",
      description: "ลากวางรูปใหม่ที่ต้องการเปลี่ยน",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "คำอธิบายรูป (สำหรับ SEO)",
      type: "string",
      description: "อธิบายสั้นๆ ว่ารูปนี้คืออะไร เช่น 'โลโก้บริษัท Japan System'",
    }),
  ],
  orderings: [
    {
      title: "ตามหน้า",
      name: "pageAsc",
      by: [{ field: "page", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "page",
      position: "position",
      media: "image",
    },
    prepare({ title, subtitle, position, media }) {
      const pageNames: Record<string, string> = {
        home: "🏠 หน้าแรก",
        "company-profile": "🏢 ข้อมูลบริษัท",
        "it-system": "💻 IT System",
        "e-tax": "📄 E-Tax",
        marketing: "📢 Marketing",
        "my-log-star": "📊 MylogStar",
        "invoice-e-receipt": "🧾 Invoice",
        "new-release": "🆕 New Release",
        contact: "📞 ติดต่อเรา",
        shared: "🔗 ทุกหน้า",
      };
      const posNames: Record<string, string> = {
        "hero-bg": "พื้นหลัง Hero",
        content: "ประกอบเนื้อหา",
        logo: "โลโก้/ไอคอน",
        other: "อื่นๆ",
      };
      const pageName = pageNames[subtitle] || subtitle;
      const posName = posNames[position] || "";
      return {
        title: title || "ยังไม่ได้ตั้งชื่อ",
        subtitle: `${pageName}${posName ? " → " + posName : ""}`,
        media,
      };
    },
  },
});
