export type AssessmentSubmission = {
  id: string;
  submittedAt: string;
  studentFirstName: string;
  studentLastName: string;
  age: string;
  currentSchool: string;
  country: string;
  curriculum: string;
  subjectOfInterest: string;
  currentPredictedGrade: string;
  targetGrade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  preferredContactMethod: string;
  preferredDays: string[];
  preferredTimes: string[];
  timeZone: string;
};

const STORAGE_KEY = "quantra_assessment_submissions";

const delay = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

export async function saveAssessmentSubmission(
  submission: Omit<AssessmentSubmission, "id" | "submittedAt">,
): Promise<AssessmentSubmission> {
  await delay(700);

  const savedSubmission: AssessmentSubmission = {
    ...submission,
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`,
    submittedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    const submissions = existing ? (JSON.parse(existing) as AssessmentSubmission[]) : [];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...submissions, savedSubmission]));
  }

  return savedSubmission;
}
