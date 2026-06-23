import { PhysicsSubjectPage } from "../_components/PhysicsSubjectPage";

const gcsePhysicsPage = {
  eyebrow: "GCSE Physics",
  headline: "GCSE Physics Preparation",
  subheadline:
    "Structured online GCSE Physics support designed to build conceptual understanding, strengthen problem-solving skills, and prepare students for exam-style questions.",
  heroCard: {
    eyebrow: "Structured science preparation",
    title: "Conceptual clarity, confident calculations, and careful exam practice.",
    description:
      "QUANTRA helps students connect physical ideas, equations, practical contexts, and written explanations through a calm and academically rigorous preparation pathway.",
    highlights: ["Concept-led", "Calculation-aware", "Practical-focused", "Exam-oriented"],
  },
  audience: {
    id: "programme-fit",
    eyebrow: "Who This Programme Is For",
    title: "Designed for GCSE Physics students who need clearer understanding and structured preparation.",
    description:
      "The programme supports learners who want to strengthen core scientific knowledge, become more confident with physics calculations, and practise communicating answers in exam-style contexts.",
    points: [
      "Need clearer explanations of abstract physics concepts",
      "Want stronger confidence with equations and units",
      "Are preparing for GCSE Physics assessments",
      "Need guided practice with practical and data questions",
      "Benefit from structured revision and teacher feedback",
    ],
  },
  topics: {
    title: "GCSE Physics content taught with application and exam technique in mind.",
    description:
      "Teaching covers core topic knowledge while helping students apply ideas accurately in calculations, practical contexts, data tasks, and extended written responses.",
    items: [
      "Forces and motion",
      "Energy",
      "Electricity",
      "Waves",
      "Magnetism and electromagnetism",
      "Particle model of matter",
      "Atomic structure",
      "Required practical understanding",
      "Data analysis and exam technique",
    ],
  },
  support: {
    eyebrow: "How QUANTRA Supports Physics Students",
    title: "A structured route from scientific understanding to exam-ready application.",
    description:
      "Students receive careful instruction, purposeful practice, and feedback that helps them understand both the physics and the assessment demands of GCSE-style questions.",
    cards: [
      {
        title: "Diagnostic Review",
        description:
          "Students begin with an academic review to identify secure topics, misconceptions, calculation confidence, and the practical skills that need attention.",
      },
      {
        title: "Conceptual Teaching",
        description:
          "Lessons explain physical ideas clearly before moving into equations, examples, diagrams, and structured application in unfamiliar contexts.",
      },
      {
        title: "Exam-Style Practice",
        description:
          "Students practise calculations, explanations, data interpretation, and practical questions with guidance on how marks are typically awarded.",
      },
      {
        title: "Progress Guidance",
        description:
          "Families receive clear insight into completed topics, current priorities, revision habits, and realistic next steps for more confident preparation.",
      },
    ],
  },
  learningFormats: {
    title: "Flexible physics preparation for different confidence levels and study stages.",
    description:
      "Support can be shaped around foundation building, ongoing topic consolidation, revision periods, and focused preparation before assessments.",
    items: [
      "Small group online classes",
      "Intensive revision courses",
      "Mock exam preparation",
      "Optional one-to-one support",
    ],
  },
  outcomes: {
    eyebrow: "Expected Outcomes",
    title: "Realistic progress through clearer physics learning and consistent practice.",
    description:
      "QUANTRA does not promise guaranteed grades. The aim is to help students develop stronger understanding, sharper problem-solving habits, and more confident preparation.",
    items: [
      "Clearer understanding of physics concepts",
      "Improved confidence with equations and units",
      "Stronger practical and data analysis skills",
      "More precise exam-style explanations",
      "Clearer revision priorities",
    ],
  },
  cta: {
    headline: "Start GCSE Physics Preparation with QUANTRA",
    description:
      "Begin with a clear academic assessment and receive parent-friendly guidance on the most suitable GCSE Physics preparation pathway.",
  },
};

export default function GCSEPhysicsPage() {
  return <PhysicsSubjectPage {...gcsePhysicsPage} />;
}
