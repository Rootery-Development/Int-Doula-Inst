import { Category, Course, /*Profile edit*/ } from "@prisma/client";

export type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
};

export type SafeProfile = Omit<
  `Profile edit`,
  "createdAt" | "updatedAt" 
> & {
  createdAt: string;
  updatedAt: string;
};