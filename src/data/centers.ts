export interface TrainingCenter {
  id: string;
  name: string;
  type: "CFPA" | "INSFP";
  wilaya: string;
  address: string;
  phone: string;
  specializations: string[];
}

export const trainingCentersData: TrainingCenter[] = [
  {
    id: "c1",
    name: "المعهد الوطني المتخصص في التكوين المهني - الحراش",
    type: "INSFP",
    wilaya: "الجزائر",
    address: "الحراش، الجزائر العاصمة",
    phone: "021 52 44 88",
    specializations: ["تطوير الويب", "صيانة الأنظمة المعلوماتية", "الكهرباء الصناعية"]
  },
  {
    id: "c2",
    name: "مركز التكوين المهني والتمهين - السانية",
    type: "CFPA",
    wilaya: "وهران",
    address: "السانية، وهران",
    phone: "041 24 55 11",
    specializations: ["اللحام", "ميكانيك السيارات", "الكهرباء المعمارية"]
  },
  {
    id: "c3",
    name: "المعهد الوطني لتطوير التكوين المهني",
    type: "INSFP",
    wilaya: "قسنطينة",
    address: "سيدي مبروك، قسنطينة",
    phone: "031 66 77 22",
    specializations: ["الفلاحة الحديثة", "المحاسبة والمالية", "تركيب الألواح الشمسية"]
  },
  {
    id: "c4",
    name: "مركز التكوين المهني - سطيف",
    type: "CFPA",
    wilaya: "سطيف",
    address: "حي عين تبينت، سطيف",
    phone: "036 88 11 22",
    specializations: ["الخياطة و الفصالة", "الحلاقة", "تسيير المخزونات"]
  },
  {
    id: "c5",
    name: "معهد التكوين المهني المختلط - ورقلة",
    type: "INSFP",
    wilaya: "ورقلة",
    address: "طريق تقرت، ورقلة",
    phone: "029 76 54 32",
    specializations: ["تقنيات استخراج البترول", "الميكانيك الثقيلة", "الطاقات المتجددة"]
  }
];
