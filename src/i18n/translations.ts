export type Language = "th" | "en" | "jp";

export type Translations = typeof translations;

export const languages: Array<{ code: Language; label: string }> = [
  { code: "th", label: "TH" },
  { code: "en", label: "EN" },
  { code: "jp", label: "JP" },
];

export const translations = {
  en: {
    brand: "Japan System Thailand",
    nav: {
      home: "Home",
      solution: "Solution",
      newRelease: "New Release",
      itSystem: "IT System",
      eTax: "e-Tax",
      invoiceReceipt: "Invoice & e-Receipt",
      marketing: "Marketing",
      myLogStar: "My Log Star",
      company: "Company",
      contact: "Contact",
    },
    common: {
      readMore: "READ MORE",
      viewDetails: "View details",
      learnMore: "Learn more",
      send: "Send message",
    },
    pages: {
      home: {
        metaTitle: "Modern Japanese Zen IT Partner",
        hero: {
          eyebrow: "Modern Japanese Zen",
          title: "High-end IT systems for reliable business growth.",
          subtitle:
            "Minimal, precise, and engineered for enterprise—system development, e-Tax solutions, and DX marketing.",
          ctaPrimary: "Explore services",
          ctaSecondary: "Company profile",
        },
        services: {
          title: "Our Service",
          items: [
            {
              title: "IT System",
              desc: "Custom software development and system integration solutions tailored to your business needs.",
            },
            {
              title: "e-Tax Invoice & e-Receipt",
              desc: "Comprehensive tax management and compliance solutions for modern businesses.",
            },
            {
              title: "Website & Online marketing",
              desc: "Digital transformation and IT marketing strategies to boost your online presence.",
            },
            {
              title: "Mylogstar",
              desc: "Advanced security solutions and comprehensive logging systems for data protection.",
            },
            {
              title: "New Release",
              desc: "Expert consulting services to guide your digital transformation journey.",
            },
          ],
        },
      },
      newRelease: {
        metaTitle: "New Release",
        title: "New Release",
        subtitle: "Clean, focused product updates with enterprise polish.",
        products: [
          {
            name: "e-Tax",
            desc: "A modern problem-solution workflow for tax digitization and cost reduction.",
            href: "/e-tax",
          },
          {
            name: "My Log Star",
            desc: "A secure log management platform—designed for compliance and deep technical visibility.",
            href: "/my-log-star",
          },
        ],
      },
      itSystem: {
        metaTitle: "IT System Solutions",
        title: "IT System",
        subtitle: "Feature-rich solutions delivered with thin-line precision.",
        features: [
          { title: "Web Application", desc: "Scalable app delivery for modern enterprises." },
          { title: "Mobile & Tablet", desc: "High-quality UX across devices and contexts." },
          { title: "Integration", desc: "APIs, ERP, and workflow automation that fit." },
          { title: "Cloud & DevOps", desc: "Reliable CI/CD and infrastructure foundations." },
        ],
      },
      eTax: {
        metaTitle: "e-Tax Invoice & e-Receipt",
        title: "e-Tax Invoice & e-Receipt",
        heroSubtitle:
          "Clean professionalism—built for trust, compliance, and operational speed.",
        painTitle: "Pain Points",
        painItems: [
          "Too many documents to sign",
          "Sometimes I have to go to the office just for one document",
          "The time to sign has become a burden on my work",
          "Get tired when signing",
          "Very troublesome because it is a sign of many",
        ],
        solutionTitle: "Comprehensive e-Tax & Digital Signature Support",
        solutionDesc:
          "In Japan System, we support e-Tax Invoice & e-Receipt—one of the nine DX measures promoted by the Thai Revenue Service.",
        blocks: {
          eTax: {
            title: "What is e-Tax Invoice & e-Receipt",
            desc: "Digitize invoice/receipt issuance, storage, and retrieval to reduce paper, speed up workflows, and improve audit readiness.",
          },
          signature: {
            title: "What is Digital Signature",
            desc: "A secure signing method that verifies identity and protects integrity—reducing risk while enabling remote approvals.",
          },
        },
        compareTitle: "COST REDUCTION EXAMPLE BY INTRODUCING E-TAX",
        compareSubtitle: "Current Process vs. With Japan System e‑Tax",
        metrics: [
          { k: "Time saved", current: 25, withSystem: 75 },
          { k: "Paper cost reduction", current: 15, withSystem: 70 },
          { k: "Security enhancement", current: 35, withSystem: 85 },
        ],
        cta: { primary: "Contact us", secondary: "See e‑Tax detail" },
        detailsTitle: "e-Tax Details",
        detailsSubtitle: "Deep dive into e-Tax implementation and best practices.",
        detailsProblemTitle: "Pain Points",
        detailsProblemItems: [
          "Manual tax document handling and errors",
          "Slow approval cycles and fragmented data",
          "Compliance risk due to inconsistent records",
        ],
        detailsSolutionTitle: "Digital Transformation",
        detailsSolutionItems: [
          "End-to-end electronic workflows",
          "Searchable, auditable, centralized records",
          "Automation that reduces cost and turnaround time",
        ],
        detailsImpactTitle: "Cost reduction impact",
        detailsImpactItems: [
          { label: "Processing time", value: "-40%" },
          { label: "Manual errors", value: "-60%" },
          { label: "Operational cost", value: "-25%" },
        ],
      },
      marketing: {
        metaTitle: "DX & IT Marketing",
        title: "Marketing",
        subtitle: "Modern DX and IT marketing services—presented as a refined masonry gallery.",
        cards: [
          { title: "DX Strategy", tag: "Consulting" },
          { title: "MarTech Stack", tag: "Implementation" },
          { title: "Content Systems", tag: "Automation" },
          { title: "Performance Ads", tag: "Growth" },
          { title: "SEO & Technical", tag: "Engineering" },
          { title: "Analytics & BI", tag: "Insights" },
          { title: "CRM Journeys", tag: "Lifecycle" },
          { title: "Brand + Product", tag: "Creative" },
        ],
      },
      myLogStar: {
        metaTitle: "My Log Star Detail",
        title: "My Log Star",
        subtitle: "Enterprise log management with deep technical clarity.",
        videoTitle: "Product overview (16:9)",
        chips: ["SIEM-ready", "Audit trails", "Retention policies", "Role-based access"],
        details: [
          {
            title: "Architecture",
            desc: "Designed for predictable ingestion pipelines and structured indexing with secure access boundaries.",
          },
          {
            title: "Compliance",
            desc: "Retention, immutability options, and exportability—built for real-world audit requirements.",
          },
          {
            title: "Performance",
            desc: "Optimized querying patterns and dashboards for fast incident triage and reporting.",
          },
        ],
      },
      company: {
        metaTitle: "Company Profile",
        title: "Company Profile",
        subtitle:
          "A calm, precise presence in Thailand—delivering Japanese-quality execution with local expertise.",
        about: {
          title: "About Our Company",
          body: "Japan System (Thailand) Co., Ltd. provides high-quality IT solutions, leveraging Japanese precision with local expertise.",
          imageAlt: "Minimal office building",
        },
        infoTitle: "Corporate Information",
        info: [
          {
            k: "Company Name",
            v: "Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd.",
          },
          {
            k: "Address",
            v: "28th Fl., 253 Asoke Building, Sukhumvit 21 Rd., Khlong Toei Nuea, Watthana, Bangkok 10110.",
          },
          { k: "Establishment", v: "2015/12" },
          { k: "Capital", v: "2,000,000 THB" },
          { k: "Representative", v: "Tsubasa Hoshino" },
          { k: "Email", v: "info@jpsys-th.com" },
          { k: "Phone", v: "02-664-1674" },
        ],
        servicesTitle: "Our Service List",
        services: [
          "Planning, design, and construction of in-house networks.",
          "System development/customization.",
          "ERP system planning.",
          "Sales of communication equipment (Servers, PCs).",
        ],
      },
      contact: {
        metaTitle: "Contact",
        title: "Contact Us",
        subtitle: "If you have any questions or inquiries, please feel free to contact us.",
        form: {
          title: "Send us a message",
          companyName: "Company Name",
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          note: "We’ll respond within 1–2 business days.",
        },
        office: {
          title: "Office",
          lines: ["Asoke, Bangkok", "Mon–Fri, 09:00–18:00"],
          email: "info@jpsys-th.com",
          phone: "02-664-1674",
          map: "Map placeholder",
        },
      },

    },
  },
  th: {
    brand: "Japan System Thailand",
    nav: {
      home: "หน้าแรก",
      solution: "โซลูชัน",
      newRelease: "ข่าวสาร/ผลิตภัณฑ์ใหม่",
      itSystem: "ระบบ IT",
      eTax: "e-Tax",
      invoiceReceipt: "Invoice & e-Receipt",
      marketing: "การตลาด",
      myLogStar: "My Log Star",
      company: "ข้อมูลบริษัท",
      contact: "ติดต่อเรา",
    },
    common: {
      readMore: "อ่านเพิ่มเติม",
      viewDetails: "ดูรายละเอียด",
      learnMore: "ดูเพิ่มเติม",
      send: "ส่งข้อความ",
    },
    pages: {
      home: {
        metaTitle: "พาร์ตเนอร์ IT สไตล์ Zen ญี่ปุ่น",
        hero: {
          eyebrow: "Modern Japanese Zen",
          title: "ระบบ IT ระดับองค์กร เพื่อการเติบโตอย่างมั่นคง",
          subtitle:
            "เรียบหรู แม่นยำ และออกแบบเพื่อองค์กร—พัฒนาระบบ, e-Tax และ DX/IT Marketing",
          ctaPrimary: "ดูบริการ",
          ctaSecondary: "ข้อมูลบริษัท",
        },
        services: {
          title: "บริการของเรา",
          items: [
            {
              title: "พัฒนาระบบ IT",
              desc: "ออกแบบสถาปัตยกรรมก่อนพัฒนา เพื่อคุณภาพ ความเร็ว และดูแลต่อได้ระยะยาว",
            },
            {
              title: "e-Tax & Compliance",
              desc: "ปรับกระบวนการเป็นดิจิทัล ลดต้นทุน และทำงานตามข้อกำหนดได้อย่างมั่นใจ",
            },
            {
              title: "DX / IT Marketing",
              desc: "ตั้งแต่ข้อมูลจนถึงแคมเปญ—เชื่อมกลยุทธ์กับการลงมือทำด้วยเทคโนโลยี",
            },
            {
              title: "Security & Logging",
              desc: "รวมบันทึกตรวจสอบและระบบมอนิเตอร์ เพื่อรองรับ Governance และ Incident",
            },
            {
              title: "ที่ปรึกษา",
              desc: "Roadmap ที่ชัดเจนสำหรับผู้บริหาร สอดคล้องกับเป้าหมายธุรกิจ",
            },
          ],
        },
      },
      newRelease: {
        metaTitle: "ผลิตภัณฑ์ใหม่",
        title: "New Release",
        subtitle: "อัปเดตผลิตภัณฑ์แบบเรียบหรู พร้อมใช้งานในองค์กร",
        products: [
          {
            name: "e-Tax",
            desc: "แปลงปัญหาเป็นโซลูชัน—ดิจิทัลไทซ์งานภาษี ลดต้นทุน และเพิ่มความเร็ว",
            href: "/e-tax",
          },
          {
            name: "My Log Star",
            desc: "แพลตฟอร์มจัดการ Log ที่ปลอดภัย รองรับ Compliance และรายละเอียดเชิงเทคนิค",
            href: "/my-log-star",
          },
        ],
      },
      itSystem: {
        metaTitle: "โซลูชันระบบ IT",
        title: "IT System",
        subtitle: "โซลูชันครบ พร้อมไอคอนเส้นบางแบบมืออาชีพ",
        features: [
          { title: "Web Application", desc: "ระบบเว็บที่ขยายได้สำหรับองค์กร" },
          { title: "Mobile & Tablet", desc: "UX คุณภาพสูง ครอบคลุมทุกอุปกรณ์" },
          { title: "Integration", desc: "เชื่อมต่อ API/ERP/Workflow อย่างลงตัว" },
          { title: "Cloud & DevOps", desc: "CI/CD และโครงสร้างพื้นฐานที่เชื่อถือได้" },
        ],
      },
      eTax: {
        metaTitle: "e-Tax Invoice & e-Receipt",
        title: "e-Tax Invoice & e-Receipt",
        heroSubtitle: "โทนมืออาชีพ เน้นความน่าเชื่อถือ ความเร็ว และความสอดคล้องตามข้อกำหนด",
        painTitle: "ปัญหาที่พบบ่อย",
        painItems: [
          "เอกสารที่ต้องเซ็นมีจำนวนมาก",
          "บางครั้งต้องเข้าบริษัทเพื่อเซ็นเอกสารเพียง 1 ฉบับ",
          "เวลาที่ใช้ในการเซ็นกลายเป็นภาระของงาน",
          "เหนื่อย/ล้าจากการเซ็นเอกสาร",
          "ยุ่งยากมากเพราะต้องเซ็นหลายฉบับ",
        ],
        solutionTitle: "บริการสนับสนุน e‑Tax และลายเซ็นดิจิทัลแบบครบวงจร",
        solutionDesc:
          "Japan System สนับสนุน e‑Tax Invoice & e‑Receipt ซึ่งเป็นหนึ่งใน 9 มาตรการ DX ที่กรมสรรพากรไทยผลักดัน",
        blocks: {
          eTax: {
            title: "e‑Tax Invoice & e‑Receipt คืออะไร",
            desc: "ออกเอกสาร/จัดเก็บ/ค้นหาใบกำกับและใบเสร็จแบบดิจิทัล ลดกระดาษ เพิ่มความเร็ว และพร้อมตรวจสอบย้อนหลัง",
          },
          signature: {
            title: "Digital Signature คืออะไร",
            desc: "การลงนามที่ปลอดภัย ตรวจสอบตัวตนและความถูกต้องของเอกสาร ช่วยอนุมัติจากระยะไกลและลดความเสี่ยง",
          },
        },
        compareTitle: "ตัวอย่างการลดต้นทุนเมื่อใช้ E‑TAX",
        compareSubtitle: "กระบวนการเดิม เทียบกับ เมื่อใช้ Japan System e‑Tax",
        metrics: [
          { k: "ประหยัดเวลา", current: 25, withSystem: 75 },
          { k: "ลดต้นทุนกระดาษ", current: 15, withSystem: 70 },
          { k: "เพิ่มความปลอดภัย", current: 35, withSystem: 85 },
        ],
        cta: { primary: "ติดต่อเรา", secondary: "ดูรายละเอียด e‑Tax" },
        detailsTitle: "รายละเอียด e-Tax",
        detailsSubtitle: "จาก Pain Points สู่ Digital Transformation ที่ชัดเจน",
        detailsProblemTitle: "ปัญหาที่พบบ่อย",
        detailsProblemItems: [
          "จัดการเอกสารด้วยมือ เสี่ยงผิดพลาด",
          "อนุมัติช้า ข้อมูลกระจัดกระจาย",
          "ความเสี่ยงด้าน Compliance จากบันทึกไม่สม่ำเสมอ",
        ],
        detailsSolutionTitle: "Digital Transformation",
        detailsSolutionItems: [
          "Workflow อิเล็กทรอนิกส์ตั้งแต่ต้นจนจบ",
          "ค้นหาได้ ตรวจสอบได้ จัดเก็บรวมศูนย์",
          "ออโตเมชันช่วยลดต้นทุนและเวลาทำงาน",
        ],
        detailsImpactTitle: "ผลลัพธ์ด้านการลดต้นทุน",
        detailsImpactItems: [
          { label: "เวลาประมวลผล", value: "-40%" },
          { label: "ความผิดพลาด", value: "-60%" },
          { label: "ต้นทุนดำเนินงาน", value: "-25%" },
        ],
      },
      marketing: {
        metaTitle: "DX & IT Marketing",
        title: "Marketing",
        subtitle: "บริการ DX และ IT Marketing แบบโมเดิร์น ในเลย์เอาต์ Masonry",
        cards: [
          { title: "DX Strategy", tag: "Consulting" },
          { title: "MarTech Stack", tag: "Implementation" },
          { title: "Content Systems", tag: "Automation" },
          { title: "Performance Ads", tag: "Growth" },
          { title: "SEO & Technical", tag: "Engineering" },
          { title: "Analytics & BI", tag: "Insights" },
          { title: "CRM Journeys", tag: "Lifecycle" },
          { title: "Brand + Product", tag: "Creative" },
        ],
      },
      myLogStar: {
        metaTitle: "รายละเอียด My Log Star",
        title: "My Log Star",
        subtitle: "ระบบจัดการ Log สำหรับองค์กร พร้อมรายละเอียดเชิงเทคนิค",
        videoTitle: "วิดีโอแนะนำ (16:9)",
        chips: ["พร้อมต่อ SIEM", "Audit trails", "Retention policies", "กำหนดสิทธิ์ผู้ใช้"],
        details: [
          {
            title: "Architecture",
            desc: "ออกแบบเพื่อ ingestion ที่คาดเดาได้ พร้อม indexing แบบมีโครงสร้าง และขอบเขตการเข้าถึงที่ปลอดภัย",
          },
          {
            title: "Compliance",
            desc: "กำหนด retention และตัวเลือกด้าน immutability พร้อม export รองรับงานตรวจสอบจริง",
          },
          {
            title: "Performance",
            desc: "Query และ dashboard เร็ว ช่วย triage incident และทำรายงานได้คล่องตัว",
          },
        ],
      },
      company: {
        metaTitle: "ข้อมูลบริษัท",
        title: "Company Profile",
        subtitle:
          "วิสัยทัศน์ที่ชัดเจนในไทย—คุณภาพงานแบบญี่ปุ่น ผสานความเชี่ยวชาญในท้องถิ่น",
        about: {
          title: "เกี่ยวกับบริษัท",
          body: "Japan System (Thailand) Co., Ltd. provides high-quality IT solutions, leveraging Japanese precision with local expertise.",
          imageAlt: "อาคารสำนักงานแบบมินิมอล",
        },
        infoTitle: "ข้อมูลนิติบุคคล",
        info: [
          {
            k: "ชื่อบริษัท",
            v: "Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd.",
          },
          {
            k: "ที่อยู่",
            v: "ชั้น 28, 253 อาคารอโศก, ถนนสุขุมวิท 21, คลองเตยเหนือ, วัฒนา, กรุงเทพฯ 10110",
          },
          { k: "ก่อตั้ง", v: "2015/12" },
          { k: "ทุนจดทะเบียน", v: "2,000,000 THB" },
          { k: "ผู้แทน", v: "Tsubasa Hoshino" },
          { k: "อีเมล", v: "info@jpsys-th.com" },
          { k: "โทร", v: "02-664-1674" },
        ],
        servicesTitle: "รายการบริการ",
        services: [
          "วางแผน ออกแบบ และติดตั้งเครือข่ายภายในองค์กร",
          "พัฒนาระบบ/ปรับแต่งระบบตามความต้องการ",
          "วางแผนระบบ ERP",
          "จำหน่ายอุปกรณ์สื่อสาร (Server, PC)",
        ],
      },
      contact: {
        metaTitle: "ติดต่อเรา",
        title: "ติดต่อเรา",
        subtitle: "หากคุณมีคำถามหรือข้อสงสัยใด ๆ โปรดติดต่อเราได้เลย",
        form: {
          title: "ส่งข้อความถึงเรา",
          companyName: "ชื่อบริษัท",
          name: "ชื่อ",
          email: "อีเมล",
          subject: "หัวข้อ",
          message: "ข้อความ",
          note: "เราจะติดต่อกลับภายใน 1–2 วันทำการ",
        },
        office: {
          title: "สำนักงาน",
          lines: ["อโศก กรุงเทพฯ", "จันทร์–ศุกร์ 09:00–18:00"],
          email: "info@jpsys-th.com",
          phone: "02-664-1674",
          map: "ตัวอย่างแผนที่",
        },
      },

    },
  },
  jp: {
    brand: "Japan System Thailand",
    nav: {
      home: "ホーム",
      solution: "ソリューション",
      newRelease: "新製品",
      itSystem: "ITシステム",
      eTax: "e-Tax",
      invoiceReceipt: "Invoice / e-Receipt",
      marketing: "マーケティング",
      myLogStar: "My Log Star",
      company: "会社概要",
      contact: "お問い合わせ",
    },
    common: {
      readMore: "詳細を見る",
      viewDetails: "詳細",
      learnMore: "もっと見る",
      send: "送信",
    },
    pages: {
      home: {
        metaTitle: "モダン禅 IT パートナー",
        hero: {
          eyebrow: "Modern Japanese Zen",
          title: "企業の成長を支える上質なITシステム。",
          subtitle:
            "ミニマルで精緻。システム開発、e-Tax、DX/ITマーケティングを一貫して提供します。",
          ctaPrimary: "サービスを見る",
          ctaSecondary: "会社概要",
        },
        services: {
          title: "サービス",
          items: [
            {
              title: "ITシステム開発",
              desc: "設計から品質を担保し、拡張性と保守性を重視した実装を行います。",
            },
            {
              title: "e-Tax / コンプライアンス",
              desc: "業務を電子化し、コスト削減とスピード向上を実現します。",
            },
            {
              title: "DX / ITマーケティング",
              desc: "分析から運用まで—戦略と実行をテクノロジーでつなぎます。",
            },
            {
              title: "セキュリティ / ログ",
              desc: "監査ログと可観測性の整備で、ガバナンスと運用を強化します。",
            },
            {
              title: "コンサルティング",
              desc: "経営層にも伝わるロードマップで意思決定を支援します。",
            },
          ],
        },
      },
      newRelease: {
        metaTitle: "新製品",
        title: "New Release",
        subtitle: "洗練されたプロダクト情報を、静かな余白で。",
        products: [
          {
            name: "e-Tax",
            desc: "課題を整理し、デジタル化でコストと時間を削減します。",
            href: "/e-tax",
          },
          {
            name: "My Log Star",
            desc: "コンプライアンスと技術視点を両立したログ管理プラットフォーム。",
            href: "/my-log-star",
          },
        ],
      },
      itSystem: {
        metaTitle: "ITシステム",
        title: "IT System",
        subtitle: "薄い線と円形アイコンで、機能を端正に見せる。",
        features: [
          { title: "Web Application", desc: "企業向けのスケーラブルな開発。" },
          { title: "Mobile & Tablet", desc: "端末を問わない高品質UX。" },
          { title: "Integration", desc: "API/ERP/業務連携を自然に。" },
          { title: "Cloud & DevOps", desc: "CI/CDと基盤で信頼性を担保。" },
        ],
      },
      eTax: {
        metaTitle: "e-Tax Invoice & e-Receipt",
        title: "e-Tax Invoice & e-Receipt",
        heroSubtitle: "信頼と効率にフォーカスした、クリーンでプロフェッショナルな設計。",
        painTitle: "よくある課題",
        painItems: [
          "署名する書類が多すぎる",
          "1枚のために出社しなければならないことがある",
          "署名の時間が業務負担になっている",
          "署名作業に疲れてしまう",
          "大量に署名が必要でとても面倒",
        ],
        solutionTitle: "e‑Tax とデジタル署名を包括的にサポート",
        solutionDesc:
          "Japan Systemは、タイ歳入局が推進する9つのDX施策の一つである e‑Tax Invoice & e‑Receipt を支援します。",
        blocks: {
          eTax: {
            title: "e‑Tax Invoice & e‑Receipt とは",
            desc: "請求書・領収書の発行、保管、検索をデジタル化し、紙コスト削減と業務スピード、監査対応力を向上します。",
          },
          signature: {
            title: "デジタル署名とは",
            desc: "本人性の確認と改ざん防止を実現する安全な署名方式。リモート承認を可能にし、リスクを低減します。",
          },
        },
        compareTitle: "E‑TAX 導入によるコスト削減例",
        compareSubtitle: "現状のプロセス vs Japan System e‑Tax",
        metrics: [
          { k: "時間短縮", current: 25, withSystem: 75 },
          { k: "紙コスト削減", current: 15, withSystem: 70 },
          { k: "セキュリティ強化", current: 35, withSystem: 85 },
        ],
        cta: { primary: "お問い合わせ", secondary: "e‑Tax 詳細へ" },
        detailsTitle: "e-Tax 詳細",
        detailsSubtitle: "課題から変革までを、論理的に可視化。",
        detailsProblemTitle: "課題（Pain Points）",
        detailsProblemItems: [
          "手作業による書類処理とミス",
          "承認が遅く、データが分散",
          "記録の不整合によるコンプライアンスリスク",
        ],
        detailsSolutionTitle: "デジタルトランスフォーメーション",
        detailsSolutionItems: [
          "電子ワークフローを一気通貫で",
          "検索可能で監査対応の集中管理",
          "自動化によりコストと時間を削減",
        ],
        detailsImpactTitle: "コスト削減インパクト",
        detailsImpactItems: [
          { label: "処理時間", value: "-40%" },
          { label: "手作業ミス", value: "-60%" },
          { label: "運用コスト", value: "-25%" },
        ],
      },
      marketing: {
        metaTitle: "DX / ITマーケティング",
        title: "Marketing",
        subtitle: "DXとITマーケティングを、モダンなMasonryで。",
        cards: [
          { title: "DX Strategy", tag: "Consulting" },
          { title: "MarTech Stack", tag: "Implementation" },
          { title: "Content Systems", tag: "Automation" },
          { title: "Performance Ads", tag: "Growth" },
          { title: "SEO & Technical", tag: "Engineering" },
          { title: "Analytics & BI", tag: "Insights" },
          { title: "CRM Journeys", tag: "Lifecycle" },
          { title: "Brand + Product", tag: "Creative" },
        ],
      },
      myLogStar: {
        metaTitle: "My Log Star 詳細",
        title: "My Log Star",
        subtitle: "企業向けログ管理を、技術的にわかりやすく。",
        videoTitle: "プロダクト概要 (16:9)",
        chips: ["SIEM連携", "監査ログ", "保持ポリシー", "権限制御"],
        details: [
          {
            title: "Architecture",
            desc: "取り込みパイプラインと構造化インデックスを前提に、境界を守る設計。",
          },
          {
            title: "Compliance",
            desc: "保持・不変性・エクスポートなど、実運用の監査要件を想定。",
          },
          {
            title: "Performance",
            desc: "インシデント対応とレポート作成を高速化するクエリ/ダッシュボード。",
          },
        ],
      },
      company: {
        metaTitle: "会社概要",
        title: "Company Profile",
        subtitle:
          "タイでのビジョンを静かな余白で—日本品質の精度とローカルの知見を融合します。",
        about: {
          title: "私たちについて",
          body: "Japan System (Thailand) Co., Ltd. provides high-quality IT solutions, leveraging Japanese precision with local expertise.",
          imageAlt: "ミニマルなオフィスビル",
        },
        infoTitle: "会社情報",
        info: [
          {
            k: "会社名",
            v: "Japan System Co., Ltd. & Japan System (Thailand) Co., Ltd.",
          },
          {
            k: "住所",
            v: "28th Fl., 253 Asoke Building, Sukhumvit 21 Rd., Khlong Toei Nuea, Watthana, Bangkok 10110.",
          },
          { k: "設立", v: "2015/12" },
          { k: "資本金", v: "2,000,000 THB" },
          { k: "代表者", v: "Tsubasa Hoshino" },
          { k: "Email", v: "info@jpsys-th.com" },
          { k: "電話", v: "02-664-1674" },
        ],
        servicesTitle: "サービス",
        services: [
          "社内ネットワークの企画・設計・構築",
          "システム開発／カスタマイズ",
          "ERPシステムの企画",
          "通信機器販売（サーバー、PC）",
        ],
      },
      contact: {
        metaTitle: "お問い合わせ",
        title: "お問い合わせ",
        subtitle: "ご質問やお問い合わせがございましたら、お気軽にお問い合わせください。",
        form: {
          title: "メッセージを送る",
          companyName: "会社名",
          name: "お名前",
          email: "メール",
          subject: "件名",
          message: "内容",
          note: "1〜2営業日以内にご連絡します。",
        },
        office: {
          title: "オフィス",
          lines: ["バンコク（アソーク）", "平日 09:00–18:00"],
          email: "info@jpsys-th.com",
          phone: "02-664-1674",
          map: "マップ（プレースホルダー）",
        },
      },
    },
  },
} as const;

