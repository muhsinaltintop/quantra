import type { Metadata } from "next";
import { courseJsonLd, createMetadata, JsonLd } from "@/lib/seo";
import { PhysicsSubjectPage } from "../_components/PhysicsSubjectPage";

export const metadata: Metadata = createMetadata({
  title: "IGCSE Physics Tuition",
  description: "Cambridge-focused IGCSE Physics tutoring online for international students who need structured preparation and exam practice.",
  path: "/subjects/igcse-physics",
  keywords: ['IGCSE Physics tutoring', 'IGCSE tuition', 'Cambridge IGCSE preparation', 'IGCSE tutors Dubai'],
});

const courseStructuredData = courseJsonLd({
  name: "IGCSE Physics Tuition",
  description: "Cambridge-focused IGCSE Physics tutoring online for international students who need structured preparation and exam practice.",
  path: "/subjects/igcse-physics",
});
const igcsePhysicsPage = {
  eyebrow: "IGCSE Physics",
  headline: "IGCSE Physics Preparation",
  subheadline:
    "Cambridge-focused IGCSE Physics tuition for students who need clear explanations, structured practice, and exam-focused preparation.",
  heroCard: {
    eyebrow: "Cambridge-focused physics support",
    title: "Syllabus clarity, scientific precision, and purposeful exam practice.",
    description:
      "QUANTRA supports international learners with a clear preparation pathway that connects IGCSE Physics concepts, practical skills, data interpretation, and Cambridge-style questions.",
    highlights: ["Syllabus-led", "Concept-focused", "Practice-rich", "Parent-friendly"],
  },
  audience: {
    id: "international-students",
    eyebrow: "Designed for International Students",
    title: "IGCSE Physics preparation for students in international and British curriculum schools.",
    description:
      "The programme is designed for families seeking clear English-language tuition, structured academic guidance, and focused preparation for Cambridge-style IGCSE Physics assessment.",
    points: [
      "Study in international or British curriculum schools",
      "Need Cambridge-focused Physics preparation",
      "Want clearer explanations of scientific ideas and equations",
      "Need support with practical and data-based questions",
      "Benefit from structured revision and parent-friendly updates",
    ],
  },
  topics: {
    title: "IGCSE Physics coverage aligned with international syllabus expectations.",
    description:
      "Students work through essential physics content while developing the practical, numerical, and written skills needed for confident exam preparation.",
    items: [
      "Motion, forces and energy",
      "Thermal physics",
      "Waves",
      "Electricity and magnetism",
      "Nuclear physics",
      "Space physics where relevant",
      "Practical skills",
      "Data interpretation",
      "Exam technique",
    ],
  },
  support: {
    eyebrow: "Cambridge-Focused Support",
    title: "Preparation that links syllabus content with practical exam demands.",
    description:
      "Teaching is organised to help students understand topic expectations, practise Cambridge-style questions, and improve through precise feedback on scientific communication.",
    cards: [
      {
        title: "Syllabus-Based Planning",
        description:
          "Preparation follows a structured topic pathway so students understand what needs to be learned, revised, and practised before assessment periods.",
      },
      {
        title: "Clear Concept Teaching",
        description:
          "Complex ideas are explained step by step, with attention to scientific vocabulary, diagrams, equations, and accurate use of units.",
      },
      {
        title: "Past-Paper Style Practice",
        description:
          "Students apply knowledge through Cambridge-style questions, including calculations, practical contexts, graph work, and written explanations.",
      },
      {
        title: "Feedback on Technique",
        description:
          "Teacher feedback focuses on common errors, mark-aware explanations, data interpretation, and ways to make answers more precise.",
      },
    ],
  },
  learningFormats: {
    title: "Flexible routes for international learners preparing for IGCSE Physics.",
    description:
      "Families can choose support that matches the student’s school timetable, current confidence, and stage of preparation.",
    items: [
      "Small group online classes",
      "Intensive revision courses",
      "Mock exam preparation",
      "Optional one-to-one support",
    ],
  },
  outcomes: {
    eyebrow: "Why Parents Choose QUANTRA",
    title: "Premium academic guidance with clarity, structure, and realistic expectations.",
    description:
      "Parents choose QUANTRA for focused teaching, transparent communication, and careful preparation without unrealistic promises or guaranteed grade claims.",
    items: [
      "Cambridge-focused academic planning",
      "Clear explanations for complex physics topics",
      "Structured practice and revision priorities",
      "Support with data, practical, and exam technique skills",
      "Parent-friendly progress communication",
    ],
  },
  cta: {
    headline: "Prepare for IGCSE Physics with Confidence",
    description:
      "Begin with a clear academic assessment and receive practical guidance on the most suitable IGCSE Physics preparation pathway for your child.",
  },
};

export default function IGCSEPhysicsPage() {
  return (
    <>
      <JsonLd data={courseStructuredData} />
      <PhysicsSubjectPage {...igcsePhysicsPage} />
    </>
  );
}
