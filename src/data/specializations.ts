export type Specialization = {
  id: string;
  name: string;
  description: string;
  category: "Barber City" | "Pastry City" | "Aluminum Workshop" | "Home Electricity Zone" | "Car Electricity Garage" | "Sewing Studio" | "Administration Center" | "Plumbing District";
  difficulty?: "easy" | "medium" | "hard" | string;
  market_demand?: string;
  duration: string;
  admission_level: string;
  certificate: string;
  skills: string[];
  subjects: string[];
  job_opportunities: string[];
  salary_range: string;
  freelance_possible: boolean;
  image_url: string;
  source: string;
  created_at: string;
  related_exam_ids?: string[];
  requiredDocuments: string[];
};

export const specializationsData: Specialization[] = [
  {
    id: "barber-hairdressing",
    name: "حلاقة الرجال والنساء",
    description: "تعلم أحدث تقنيات قص وتصفيف الشعر للرجال والنساء، مع العناية بمظهر العملاء.",
    category: "Barber City",
    difficulty: "medium",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط",
    certificate: "شهادة تقني (CFPA)",
    skills: ["قص الشعر", "التصفيف", "العناية بالشعر", "التواصل مع العملاء"],
    subjects: ["أساسيات الحلاقة", "أدوات الحلاقة", "تصفيف وتسريحات", "سلامة ونظافة"],
    job_opportunities: ["حلاق", "مصفف شعر", "صاحب صالون"],
    salary_range: "40,000 - 120,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1503951914875-452162b09f6f?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "pastry",
    name: "صناعة الحلويات",
    description: "احتراف صناعة الحلويات التقليدية والعصرية والحلويات الفاخرة.",
    category: "Pastry City",
    difficulty: "medium",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط / ثانوي",
    certificate: "شهادة تقني (CFPA)",
    skills: ["صناعة العجائن", "التزيين", "إدارة المكونات", "الابتكار في الحلويات"],
    subjects: ["أساسيات الحلويات", "الحلويات التقليدية", "صناعة المرطبات", "النظافة الغذائية"],
    job_opportunities: ["حلواني", "شيف حلويات", "صاحب مخبزة/محل حلويات"],
    salary_range: "45,000 - 150,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "aluminum-carpentry",
    name: "نجارة الألمنيوم",
    description: "تركيب وصيانة هياكل الألمنيوم للنوافذ، الأبواب، والواجهات.",
    category: "Aluminum Workshop",
    difficulty: "hard",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط",
    certificate: "شهادة تقني (CFPA)",
    skills: ["قياس وتفصيل الألمنيوم", "تركيب الإكسسوارات", "القراءة الفنية للمخططات", "استخدام أدوات الحفر والقطع"],
    subjects: ["مبادئ نجارة الألمنيوم", "المخططات الهندسية", "تكنولوجيا المواد"],
    job_opportunities: ["نجار ألمنيوم", "مسؤول ورشة", "مقاول تركيب"],
    salary_range: "50,000 - 160,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "home-electricity",
    name: "كهرباء المنازل",
    description: "تركيب وصيانة الشبكات الكهربائية في المباني والمنازل.",
    category: "Home Electricity Zone",
    difficulty: "medium",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط",
    certificate: "شهادة تقني (CFPA)",
    skills: ["تركيب الدوائر", "تشخيص الأعطال", "السلامة الكهربائية", "أسلاك التمديدات"],
    subjects: ["أساسيات الكهرباء", "المخططات الكهربائية", "تقنيات التمديد"],
    job_opportunities: ["كهربائي منازل", "فني صيانة", "مستقل"],
    salary_range: "45,000 - 130,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "car-electricity",
    name: "كهرباء السيارات",
    description: "تشخيص وإصلاح الأنظمة الكهربائية والإلكترونية في المركبات.",
    category: "Car Electricity Garage",
    difficulty: "hard",
    duration: "12 - 18 شهراً",
    admission_level: "ثانوي",
    certificate: "شهادة تقني (CFPA)",
    skills: ["استخدام أجهزة التشخيص (Scanner)", "إصلاح المولدات", "إصلاح أنظمة الإنارة والشحن", "فحص الدوائر الإلكترونية"],
    subjects: ["كهرباء وإلكترونيك السيارات", "المخططات الكهربائية للسيارات", "تكنولوجيا السيارات"],
    job_opportunities: ["كهربائي سيارات", "فني في مراكز الخدمة", "صاحب ورشة"],
    salary_range: "50,000 - 180,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1598974358095-155b22693d39?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "sewing",
    name: "الخياطة",
    description: "تعلم التفصيل، الباترون، وخياطة الملابس بجميع أنواعها.",
    category: "Sewing Studio",
    difficulty: "medium",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط",
    certificate: "شهادة تقني (CFPA)",
    skills: ["التفصيل", "استخدام ماكينات الخياطة", "أخذ المقاسات", "التطريز"],
    subjects: ["أساسيات الخياطة", "رسم الباترونات", "أقمشة وأدوات"],
    job_opportunities: ["خياط(ة)", "مصمم أزياء", "صاحب مشغل"],
    salary_range: "35,000 - 100,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1556228578-8d89f5bc5cf5?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "archiving",
    name: "الأرشيف والإدارة",
    description: "تنظيم وحفظ الوثائق والمستندات في مختلف المؤسسات.",
    category: "Administration Center",
    difficulty: "easy",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط / ثانوي",
    certificate: "شهادة تقني (CFPA)",
    skills: ["إدارة الوثائق", "الأرشفة الرقمية", "تنظيم المكتب", "استخدام برامج الحاسوب"],
    subjects: ["أساسيات الأرشفة", "التسيير الإداري", "أمن الوثائق"],
    job_opportunities: ["أرشيفي", "موظف إداري", "مسؤول تنظيم الوثائق"],
    salary_range: "35,000 - 80,000 دج",
    freelance_possible: false,
    image_url: "https://images.unsplash.com/photo-1569428034239-f9565b331044?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  },
  {
    id: "plumbing",
    name: "التركيب الصحي (السباكة)",
    description: "تركيب وصيانة أنظمة التزويد بالمياه والصرف الصحي.",
    category: "Plumbing District",
    difficulty: "medium",
    duration: "12 - 18 شهراً",
    admission_level: "متوسط",
    certificate: "شهادة تقني (CFPA)",
    skills: ["لحام الأنابيب", "تركيب التجهيزات الصحية", "تشخيص تسربات المياه", "تركيب أنظمة التصريف"],
    subjects: ["طبوغرافيا المباني", "تكنولوجيا التجهيزات الصحية", "السلامة المهنية"],
    job_opportunities: ["سباك", "مهني تركيب", "مقاول"],
    salary_range: "40,000 - 140,000 دج",
    freelance_possible: true,
    image_url: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600&h=400",
    source: "https://www.mfep.gov.dz/",
    created_at: new Date().toISOString(),
    requiredDocuments: ["شهادة مدرسية", "نسخة بطاقة التعريف", "صور شمسية", "استمارة تسجيل", "شهادة إقامة"]
  }
];
