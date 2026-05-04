
import { dataEntryBeginner } from "./curriculum/data_entry_beginner";
import { dataEntryIntermediate } from "./curriculum/data_entry_intermediate";
import { dataEntryAdvanced } from "./curriculum/data_entry_advanced";
import { tailoringBeginner } from "./curriculum/tailoring_beginner";
import { tailoringIntermediate } from "./curriculum/tailoring_intermediate";
import { tailoringAdvanced } from "./curriculum/tailoring_advanced";
import { aluminumBeginner } from "./curriculum/aluminum_beginner";
import { aluminumIntermediate } from "./curriculum/aluminum_intermediate";
import { aluminumAdvanced } from "./curriculum/aluminum_advanced";
import { hairBeginner } from "./curriculum/hair_beginner";
import { hairIntermediate } from "./curriculum/hair_intermediate";
import { hairAdvanced } from "./curriculum/hair_advanced";
import { fashionBeginner } from "./curriculum/fashion_beginner";
import { fashionIntermediate } from "./curriculum/fashion_intermediate";
import { fashionAdvanced } from "./curriculum/fashion_advanced";
import { msAccessBeginner } from "./curriculum/ms_access_beginner";
import { msAccessIntermediate } from "./curriculum/ms_access_intermediate";
import { msAccessAdvanced } from "./curriculum/ms_access_advanced";

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  feedback: string;
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  illustrationDesc: string;
  quiz: QuizQuestion[];
}

export interface Level {
  id: number;
  lessons: Lesson[];
}

export interface CraftCurriculum {
  craftId: string;
  levels: Level[];
}

// Memory-efficient storage for 360 lessons
export const curriculumData: Record<string, Level[]> = {
  'data_entry': [...dataEntryBeginner, ...dataEntryIntermediate, ...dataEntryAdvanced],
  'tailoring': [...tailoringBeginner, ...tailoringIntermediate, ...tailoringAdvanced],
  'aluminum_carpentry': [...aluminumBeginner, ...aluminumIntermediate, ...aluminumAdvanced],
  'hair_styling': [...hairBeginner, ...hairIntermediate, ...hairAdvanced],
  'fashion_pattern': [...fashionBeginner, ...fashionIntermediate, ...fashionAdvanced],
  'ms_access': [...msAccessBeginner, ...msAccessIntermediate, ...msAccessAdvanced]
};
