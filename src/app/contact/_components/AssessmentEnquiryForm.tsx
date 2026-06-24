"use client";

import { FormEvent, useMemo, useState } from "react";
import { saveAssessmentSubmission } from "@/services/assessmentSubmissions";

type FormData = {
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

type FieldErrors = Partial<Record<keyof FormData, string>>;

type Step = {
  title: string;
  description: string;
  fields: (keyof FormData)[];
};

const steps: Step[] = [
  {
    title: "Student Information",
    description: "Tell us who the assessment is for.",
    fields: ["studentFirstName", "studentLastName", "age", "currentSchool", "country"],
  },
  {
    title: "Academic Information",
    description: "Help us understand the curriculum, subject, and goals.",
    fields: ["curriculum", "subjectOfInterest", "currentPredictedGrade", "targetGrade"],
  },
  {
    title: "Parent Information",
    description: "Share the best details for an advisor to contact you.",
    fields: ["parentName", "parentEmail", "parentPhone", "preferredContactMethod"],
  },
  {
    title: "Availability",
    description: "Choose suitable times for the consultation call.",
    fields: ["preferredDays", "preferredTimes", "timeZone"],
  },
];

const initialData: FormData = {
  studentFirstName: "",
  studentLastName: "",
  age: "",
  currentSchool: "",
  country: "",
  curriculum: "",
  subjectOfInterest: "",
  currentPredictedGrade: "",
  targetGrade: "",
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  preferredContactMethod: "",
  preferredDays: [],
  preferredTimes: [],
  timeZone: "",
};

const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeOptions = ["Morning", "Afternoon", "Evening"];
const requiredMessage = "This field is required.";

function isEmpty(value: string | string[]) {
  return Array.isArray(value) ? value.length === 0 : value.trim().length === 0;
}

export function AssessmentEnquiryForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const progress = useMemo(() => ((currentStep + 1) / steps.length) * 100, [currentStep]);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const toggleArrayValue = (field: "preferredDays" | "preferredTimes", value: string) => {
    const nextValue = data[field].includes(value)
      ? data[field].filter((item) => item !== value)
      : [...data[field], value];
    updateField(field, nextValue);
  };

  const validateFields = (fields: (keyof FormData)[]) => {
    const nextErrors: FieldErrors = {};

    fields.forEach((field) => {
      if (isEmpty(data[field])) {
        nextErrors[field] = requiredMessage;
      }
    });

    if (fields.includes("age")) {
      const age = Number(data.age);
      if (!data.age.trim()) {
        nextErrors.age = requiredMessage;
      } else if (!Number.isInteger(age) || age < 10 || age > 19) {
        nextErrors.age = "Enter a student age between 10 and 19.";
      }
    }

    if (fields.includes("parentEmail") && data.parentEmail.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(data.parentEmail)) {
        nextErrors.parentEmail = "Enter a valid email address.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (validateFields(steps[currentStep].fields)) {
      setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateFields(steps[currentStep].fields)) return;

    setIsSubmitting(true);
    try {
      await saveAssessmentSubmission(data);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[2rem] border border-gold-400/40 bg-white p-8 shadow-academic sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-500">Completion</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-950">Thank you for your enquiry.</h2>
        <p className="mt-4 text-navy-700">
          One of our academic advisors will review your information and contact you to arrange:
        </p>
        <ul className="mt-6 space-y-3 text-navy-800">
          {["A free academic assessment", "A consultation session", "A recommended learning pathway"].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-gold-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-academic sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-500">Step {currentStep + 1} of {steps.length}</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-navy-950">{step.title}</h2>
          <p className="mt-1 text-sm text-navy-700">{step.description}</p>
        </div>
        <span className="rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-800">{Math.round(progress)}% complete</span>
      </div>
      <div className="mt-6 h-2 rounded-full bg-navy-50">
        <div className="h-2 rounded-full bg-gold-400 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {currentStep === 0 && (
          <>
            <TextInput label="Student First Name" field="studentFirstName" value={data.studentFirstName} error={errors.studentFirstName} onChange={updateField} />
            <TextInput label="Student Last Name" field="studentLastName" value={data.studentLastName} error={errors.studentLastName} onChange={updateField} />
            <TextInput label="Age" field="age" value={data.age} error={errors.age} onChange={updateField} type="number" />
            <TextInput label="Current School" field="currentSchool" value={data.currentSchool} error={errors.currentSchool} onChange={updateField} />
            <TextInput label="Country" field="country" value={data.country} error={errors.country} onChange={updateField} />
          </>
        )}
        {currentStep === 1 && (
          <>
            <SelectInput label="Curriculum" field="curriculum" value={data.curriculum} error={errors.curriculum} onChange={updateField} options={["GCSE", "IGCSE", "Other"]} />
            <TextInput label="Subject of Interest" field="subjectOfInterest" value={data.subjectOfInterest} error={errors.subjectOfInterest} onChange={updateField} />
            <TextInput label="Current Predicted Grade" field="currentPredictedGrade" value={data.currentPredictedGrade} error={errors.currentPredictedGrade} onChange={updateField} />
            <TextInput label="Target Grade" field="targetGrade" value={data.targetGrade} error={errors.targetGrade} onChange={updateField} />
          </>
        )}
        {currentStep === 2 && (
          <>
            <TextInput label="Parent Name" field="parentName" value={data.parentName} error={errors.parentName} onChange={updateField} />
            <TextInput label="Parent Email" field="parentEmail" value={data.parentEmail} error={errors.parentEmail} onChange={updateField} type="email" />
            <TextInput label="Parent Phone Number" field="parentPhone" value={data.parentPhone} error={errors.parentPhone} onChange={updateField} type="tel" />
            <SelectInput label="Preferred Contact Method" field="preferredContactMethod" value={data.preferredContactMethod} error={errors.preferredContactMethod} onChange={updateField} options={["Email", "Phone", "WhatsApp"]} />
          </>
        )}
        {currentStep === 3 && (
          <>
            <CheckboxGroup label="Preferred Days" options={dayOptions} values={data.preferredDays} error={errors.preferredDays} onToggle={(value) => toggleArrayValue("preferredDays", value)} />
            <CheckboxGroup label="Preferred Times" options={timeOptions} values={data.preferredTimes} error={errors.preferredTimes} onToggle={(value) => toggleArrayValue("preferredTimes", value)} />
            <TextInput label="Time Zone" field="timeZone" value={data.timeZone} error={errors.timeZone} onChange={updateField} placeholder="e.g. GMT, EST, GST" />
          </>
        )}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button type="button" onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))} disabled={currentStep === 0 || isSubmitting} className="min-h-11 rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-800 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 disabled:cursor-not-allowed disabled:opacity-40">
          Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button type="button" onClick={goNext} className="min-h-11 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={isSubmitting} className="min-h-11 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 disabled:cursor-wait disabled:opacity-70">
            {isSubmitting ? "Submitting..." : "Submit enquiry"}
          </button>
        )}
      </div>
    </form>
  );
}

type InputProps = {
  label: string;
  field: keyof FormData;
  value: string;
  error?: string;
  onChange: (field: keyof FormData, value: string) => void;
  type?: string;
  placeholder?: string;
};

function TextInput({ label, field, value, error, onChange, type = "text", placeholder }: InputProps) {
  const inputId = `assessment-${field}`;
  const errorId = `${inputId}-error`;

  return (
    <label htmlFor={inputId} className="block text-sm font-semibold text-navy-900">
      {label}
      <input id={inputId} name={field} type={type} value={value} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} onChange={(event) => onChange(field, event.target.value)} className="mt-2 min-h-11 w-full rounded-2xl border border-navy-900/15 bg-white px-4 py-3 text-base font-normal text-navy-950 outline-none transition focus:border-gold-400 focus:ring-4 focus:ring-gold-300/20" />
      {error && <span id={errorId} className="mt-2 block text-sm font-medium text-red-600">{error}</span>}
    </label>
  );
}

function SelectInput({ label, field, value, error, onChange, options }: InputProps & { options: string[] }) {
  const inputId = `assessment-${field}`;
  const errorId = `${inputId}-error`;

  return (
    <label htmlFor={inputId} className="block text-sm font-semibold text-navy-900">
      {label}
      <select id={inputId} name={field} value={value} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} onChange={(event) => onChange(field, event.target.value)} className="mt-2 min-h-11 w-full rounded-2xl border border-navy-900/15 bg-white px-4 py-3 text-base font-normal text-navy-950 outline-none transition focus:border-gold-400 focus:ring-4 focus:ring-gold-300/20">
        <option value="">Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      {error && <span id={errorId} className="mt-2 block text-sm font-medium text-red-600">{error}</span>}
    </label>
  );
}

function CheckboxGroup({ label, options, values, error, onToggle }: { label: string; options: string[]; values: string[]; error?: string; onToggle: (value: string) => void }) {
  return (
    <fieldset className="rounded-2xl border border-navy-900/10 p-4">
      <legend className="px-1 text-sm font-semibold text-navy-900">{label}</legend>
      <div className="mt-3 grid gap-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm font-medium text-navy-800">
            <input type="checkbox" checked={values.includes(option)} onChange={() => onToggle(option)} className="h-5 w-5 rounded border-navy-900/20 text-navy-900 focus:ring-gold-400" />
            {option}
          </label>
        ))}
      </div>
      {error && <span className="mt-2 block text-sm font-medium text-red-600">{error}</span>}
    </fieldset>
  );
}
