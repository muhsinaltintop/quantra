export type BlogCategory =
  | "GCSE Success Strategies"
  | "IGCSE Success Strategies"
  | "Revision Techniques"
  | "Exam Preparation"
  | "Parent Resources"
  | "Cambridge Curriculum Insights";

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: BlogCategory;
  readingTime: string;
  featured?: boolean;
  introduction: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  takeaway: string;
};

export const blogCategories: BlogCategory[] = [
  "GCSE Success Strategies",
  "IGCSE Success Strategies",
  "Revision Techniques",
  "Exam Preparation",
  "Parent Resources",
  "Cambridge Curriculum Insights",
];

export const articles: BlogArticle[] = [
  {
    slug: "gcse-maths-grade-7-to-9-plan",
    title: "How to Move from a Grade 7 to a Grade 9 in GCSE Mathematics",
    excerpt:
      "A practical plan for high-attaining students who need sharper problem solving, cleaner working, and stronger exam decisions.",
    author: "Dr Aisha Rahman",
    date: "2026-02-18",
    category: "GCSE Success Strategies",
    readingTime: "6 min read",
    featured: true,
    introduction:
      "Students already working around grade 7 often know the core methods. The difference at grade 8 and 9 is usually precision: choosing the right strategy quickly, linking topics together, and writing solutions that earn every available mark.",
    sections: [
      {
        heading: "Audit the marks being lost",
        body:
          "Begin with two recent papers and classify every lost mark. Separate knowledge gaps from slips, weak algebra, incomplete explanations, and time pressure. This turns revision from general practice into a targeted improvement plan.",
      },
      {
        heading: "Practise mixed, multi-step questions",
        body:
          "Top grades require students to combine ratio, algebra, geometry, graphs, and proof without being told which topic is being tested. Replace long blocks of single-topic worksheets with mixed sets that force method selection.",
      },
      {
        heading: "Improve written mathematical communication",
        body:
          "Many capable students lose marks because their working is hard to follow. Encourage clear definitions, labelled diagrams, exact values before rounding, and short explanatory statements in proof or reasoning questions.",
      },
    ],
    takeaway:
      "A grade 9 plan should be diagnostic, mixed, and exam-focused. Students need fewer comfortable questions and more deliberate work on the moments where their reasoning breaks down.",
  },
  {
    slug: "igcse-physics-command-words",
    title: "Understanding IGCSE Physics Command Words",
    excerpt:
      "Why terms such as describe, explain, calculate, and compare change the structure of a high-scoring physics answer.",
    author: "Michael Edwards",
    date: "2026-03-04",
    category: "IGCSE Success Strategies",
    readingTime: "5 min read",
    introduction:
      "In IGCSE Physics, students can understand the science yet still lose marks by answering the wrong type of question. Command words are the examiner’s instructions for how the knowledge should be presented.",
    sections: [
      {
        heading: "Match the response to the command",
        body:
          "A calculate question needs formula selection, substitution, units, and sensible rounding. An explain question needs a cause-and-effect chain. A compare question needs direct similarities or differences, not two unrelated descriptions.",
      },
      {
        heading: "Use mark values as a guide",
        body:
          "A two-mark explanation usually needs two linked scientific points. A four-mark question may need a sequence, reference to data, or a conclusion. Students should learn to let the mark value shape the depth of the answer.",
      },
      {
        heading: "Build a command-word notebook",
        body:
          "After each paper, students should record command words that caused mistakes and rewrite one improved answer. Over time, this creates a personal bank of exam-ready response patterns.",
      },
    ],
    takeaway:
      "Command words are not decoration. They are a scoring framework, and mastering them helps students convert physics knowledge into exam marks.",
  },
  {
    slug: "revision-timetable-that-students-follow",
    title: "How to Build a Revision Timetable Students Actually Follow",
    excerpt:
      "A realistic approach to weekly planning that balances school, rest, retrieval practice, and exam-paper review.",
    author: "Emily Carter",
    date: "2026-03-21",
    category: "Revision Techniques",
    readingTime: "7 min read",
    introduction:
      "The best revision timetable is not the most colourful or ambitious. It is the one a student can follow consistently, adjust honestly, and use to improve weak areas before the exam season arrives.",
    sections: [
      {
        heading: "Start with fixed commitments",
        body:
          "Add school hours, travel, meals, sports, family time, and sleep before revision blocks. This prevents the common mistake of planning more study hours than the week can realistically hold.",
      },
      {
        heading: "Use short, specific sessions",
        body:
          "Replace vague blocks such as revise maths with tasks like complete ten quadratic equations and mark errors. Specific sessions reduce procrastination because the student knows exactly what success looks like.",
      },
      {
        heading: "Schedule review, not just learning",
        body:
          "A strong timetable includes retrieval practice, correction time, and spaced return to difficult topics. Without review, students can feel busy while forgetting material they studied only a week earlier.",
      },
    ],
    takeaway:
      "A sustainable timetable protects energy and creates measurable progress. It should be reviewed every Sunday and adjusted using evidence from quizzes, homework, and past-paper marks.",
  },
  {
    slug: "mock-exams-how-to-use-results",
    title: "What to Do After Mock Exam Results",
    excerpt:
      "A calm, structured way to turn mock papers into a focused action plan for the final months before exams.",
    author: "James Whitfield",
    date: "2026-04-09",
    category: "Exam Preparation",
    readingTime: "6 min read",
    introduction:
      "Mock results can feel final, but their real value is diagnostic. The paper shows which topics, habits, and exam decisions need attention while there is still time to improve.",
    sections: [
      {
        heading: "Look beyond the headline grade",
        body:
          "A single grade does not show whether the issue is topic knowledge, timing, question interpretation, or careless working. Students should review the paper question by question and group errors into patterns.",
      },
      {
        heading: "Choose three priority areas",
        body:
          "Trying to fix everything at once leads to scattered revision. Select three high-impact targets, such as algebraic manipulation, electricity calculations, or extended-response explanations, then assign weekly practice tasks.",
      },
      {
        heading: "Repeat under timed conditions",
        body:
          "Once weak areas have been revised, students need timed practice to prove the improvement transfers to exam conditions. Confidence grows when progress is visible in marked papers, not just notes.",
      },
    ],
    takeaway:
      "Mock exams are a rehearsal, not a verdict. A useful response is specific, prioritised, and checked through fresh exam-style practice.",
  },
  {
    slug: "parents-support-without-pressure",
    title: "How Parents Can Support Revision Without Adding Pressure",
    excerpt:
      "Practical ways parents can provide structure, encouragement, and accountability during GCSE and IGCSE preparation.",
    author: "Sofia Bennett",
    date: "2026-04-24",
    category: "Parent Resources",
    readingTime: "5 min read",
    introduction:
      "Parents play an important role in exam preparation, especially for students balancing school demands and independent revision. The goal is to create calm structure rather than constant monitoring.",
    sections: [
      {
        heading: "Ask about the plan, not only the result",
        body:
          "Questions such as what are you practising today and how will you check it are more useful than repeated grade predictions. They help students focus on controllable actions.",
      },
      {
        heading: "Protect routines",
        body:
          "Regular sleep, meals, exercise, and breaks improve learning. Parents can support revision by keeping evenings predictable and helping students avoid last-minute cramming cycles.",
      },
      {
        heading: "Use evidence for conversations",
        body:
          "Marked papers, homework feedback, and teacher comments make discussions more constructive. Instead of arguing about effort, families can agree next steps based on clear academic evidence.",
      },
    ],
    takeaway:
      "Supportive parents combine warmth with structure. They help students plan, review, and recover, without making every conversation about exams.",
  },
  {
    slug: "cambridge-igcse-assessment-objectives",
    title: "A Parent-Friendly Guide to Cambridge IGCSE Assessment Objectives",
    excerpt:
      "An accessible explanation of how knowledge, application, and analysis appear in Cambridge-style assessment.",
    author: "Dr Aisha Rahman",
    date: "2026-05-12",
    category: "Cambridge Curriculum Insights",
    readingTime: "8 min read",
    introduction:
      "Cambridge IGCSE courses are designed to test more than memorisation. Students are expected to recall key knowledge, apply it in unfamiliar contexts, and communicate reasoning clearly.",
    sections: [
      {
        heading: "Knowledge is the foundation",
        body:
          "Students need secure definitions, formulae, facts, and methods. However, strong recall is only the first layer of preparation, because exam questions often place familiar content in new settings.",
      },
      {
        heading: "Application shows flexible understanding",
        body:
          "Application questions ask students to use what they know with data, diagrams, experiments, or worded scenarios. Regular exposure to unfamiliar contexts helps students become less dependent on memorised question types.",
      },
      {
        heading: "Analysis rewards clear reasoning",
        body:
          "Higher-level responses often require comparison, justification, evaluation, or explanation. Students should practise making claims, supporting them with evidence, and linking each point back to the question.",
      },
    ],
    takeaway:
      "Parents can support Cambridge preparation by encouraging students to explain how they know an answer, not just whether the answer is correct.",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? articles[0];
}
