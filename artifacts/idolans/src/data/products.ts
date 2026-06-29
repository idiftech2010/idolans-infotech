import type { LucideIcon } from "lucide-react";
import { GraduationCap, Stethoscope, BrainCircuit, ShieldCheck, Briefcase } from "lucide-react";
import scholarlyImg from "@/assets/images/scholarly.png";
import apexcareImg from "@/assets/images/apexcare.png";
import eduaiImg from "@/assets/images/eduai.png";
import integritestImg from "@/assets/images/integritest.png";
import servicesImg from "@/assets/images/services.png";

export interface ProductDefinition {
  id: string;
  slug: string;
  name: string;
  image: string;
  color: string;
  label: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  heroAccent: string;
  overview: string;
  highlights: Array<{ title: string; description: string }>;
  outcomes: Array<{ label: string; value: string }>;
  useCases: string[];
  ctaLabel: string;
  ctaHref: string;
  subItems?: string[];
}

export const PRODUCT_CATALOG: ProductDefinition[] = [
  {
    id: "scholarly",
    slug: "scholarly",
    name: "SCHOLARLY",
    image: scholarlyImg,
    color: "from-blue-500/20 to-transparent",
    label: "School Management",
    tagline: "School management done right",
    description: "Next-generation school operations designed for principals, registrars, teachers, and parents who need clarity and control.",
    icon: GraduationCap,
    heroAccent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    overview:
      "SCHOLARLY brings student records, attendance, fees, timetables, parent communication, and reporting into one elegant operating system for modern schools.",
    highlights: [
      {
        title: "Unified school operations",
        description: "Connect admissions, academics, finance, and parent engagement into one secure command center.",
      },
      {
        title: "Parent-friendly experience",
        description: "Give families visibility into attendance, fees, report cards, and school announcements in real time.",
      },
      {
        title: "Trusted by ambitious institutions",
        description: "Designed for schools that want reliability, speed, and a polished digital experience for every role.",
      },
    ],
    outcomes: [
      { label: "Administrative hours reclaimed", value: "40%" },
      { label: "Fee collection efficiency", value: "2x" },
      { label: "Parent engagement uplift", value: "35%" },
    ],
    useCases: ["Primary schools", "Secondary schools", "Private academies", "Multi-campus networks"],
    ctaLabel: "Book a SCHOLARLY demo",
    ctaHref: "/products/scholarly",
    subItems: ["Admissions & Student Records", "Attendance & Timetables", "Results & Reports", "Fees & Payments"],
  },
  {
    id: "apexcare",
    slug: "apexcare",
    name: "ApexCare HMS",
    image: apexcareImg,
    color: "from-emerald-500/20 to-transparent",
    label: "Hospital System",
    tagline: "Clinical command center",
    description: "An enterprise-grade hospital management suite that unifies clinical workflows, revenue operations, and patient experiences.",
    icon: Stethoscope,
    heroAccent: "from-emerald-500/20 via-lime-400/10 to-transparent",
    overview:
      "ApexCare HMS reimagines hospital operations through an intelligent blend of electronic medical records, workflow automation, scheduling, billing, and clinical visibility.",
    highlights: [
      {
        title: "Connected care delivery",
        description: "Bring patient administration, diagnostics, clinical notes, and billing into one harmonized workflow.",
      },
      {
        title: "Faster clinical decisions",
        description: "Support care teams with real-time patient snapshots, alerts, and structured medical history.",
      },
      {
        title: "Operational resilience",
        description: "Give leadership control over occupancy, revenue cycles, and departmental throughput with clarity.",
      },
    ],
    outcomes: [
      { label: "Patient information access", value: "Instant" },
      { label: "Clinical note turnaround", value: "50% faster" },
      { label: "Billing accuracy", value: "99%" },
    ],
    useCases: ["Hospitals", "Multi-specialty clinics", "Diagnostics centers", "Primary care networks"],
    ctaLabel: "Explore ApexCare",
    ctaHref: "/products/apexcare",
  },
  {
    id: "eduai",
    slug: "eduai",
    name: "EduAI",
    image: eduaiImg,
    color: "from-purple-500/20 to-transparent",
    label: "Learning AI",
    tagline: "AI-powered learning",
    description: "A modern learning platform that pairs course delivery, AI guidance, and secure assessment in a beautifully crafted experience.",
    icon: BrainCircuit,
    heroAccent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    overview:
      "EduAI blends course content, intelligent study tools, AI-assisted proctoring, and role-based dashboards to create a smarter learning ecosystem.",
    highlights: [
      {
        title: "Learning that feels personal",
        description: "Students receive summaries, practices, and guidance that adapt to their pace and progress.",
      },
      {
        title: "Integrity-first assessments",
        description: "Secure exams, proctoring nudges, and auditability make digital assessments dependable.",
      },
      {
        title: "A platform for every learner",
        description: "Designed for students, instructors, and administrators to collaborate with clarity and confidence.",
      },
    ],
    outcomes: [
      { label: "Content comprehension", value: "Higher" },
      { label: "Assessment integrity", value: "Protected" },
      { label: "Instructor efficiency", value: "30% better" },
    ],
    useCases: ["Universities", "Training institutes", "Online academies", "Corporate learning teams"],
    ctaLabel: "See EduAI in action",
    ctaHref: "/products/eduai",
  },
  {
    id: "integritest",
    slug: "integritest",
    name: "Integritest",
    image: integritestImg,
    color: "from-red-500/20 to-transparent",
    label: "Secure Exams",
    tagline: "Unbreakable assessments",
    description: "A secure, streamlined assessment platform that brings proctoring, attendance, and instant reporting into one experience.",
    icon: ShieldCheck,
    heroAccent: "from-rose-500/20 via-orange-400/10 to-transparent",
    overview:
      "Integritest is built for institutions that need trusted digital examinations with strong controls, live oversight, and elegant reporting.",
    highlights: [
      {
        title: "Secure exam orchestration",
        description: "Create sessions, verify candidates, and monitor events with confidence and transparency.",
      },
      {
        title: "Live supervision",
        description: "Real-time monitoring, alerts, and accountability reduce risk and preserve exam integrity.",
      },
      {
        title: "Fast, audit-ready reporting",
        description: "Turn assessments into polished results and compliance-ready reports without unnecessary friction.",
      },
    ],
    outcomes: [
      { label: "Cheating risk exposure", value: "Reduced" },
      { label: "Grading speed", value: "Faster" },
      { label: "Institution confidence", value: "Higher" },
    ],
    useCases: ["Universities", "Certification bodies", "Training programs", "Remote assessment teams"],
    ctaLabel: "Discover Integritest",
    ctaHref: "/products/integritest",
  },
  {
    id: "services",
    slug: "idolans-services",
    name: "Idolans Services",
    image: servicesImg,
    color: "from-amber-500/20 to-transparent",
    label: "Pro Services",
    tagline: "Expert-led professional services",
    description: "A premium services division that helps organizations design, build, secure, and scale digital capability with precision.",
    icon: Briefcase,
    heroAccent: "from-amber-500/20 via-yellow-400/10 to-transparent",
    overview:
      "Idolans Services brings product engineering, cybersecurity, architecture consulting, academic mentorship, and certification-focused training together under one trusted partner.",
    highlights: [
      {
        title: "Strategy and delivery",
        description: "From concept to launch, the team supports business strategy, technical architecture, and delivery excellence.",
      },
      {
        title: "Security-first consulting",
        description: "Red team, blue team, GRC, and compliance support keep organizations resilient and prepared.",
      },
      {
        title: "Capability building",
        description: "Mentorship and training equip teams to grow with long-term confidence and quality.",
      },
    ],
    outcomes: [
      { label: "Implementation support", value: "Hands-on" },
      { label: "Security readiness", value: "Stronger" },
      { label: "Delivery confidence", value: "Elevated" },
    ],
    useCases: ["Software delivery", "Cybersecurity programs", "Training initiatives", "Organization modernization"],
    ctaLabel: "Discuss your roadmap",
    ctaHref: "/products/idolans-services",
    subItems: ["Software Development", "Cybersecurity Solutions", "IT Consultation & Training", "Academic Mentorship", "Certifications"],
  },
];

export function getProductBySlug(slug: string | undefined) {
  return PRODUCT_CATALOG.find((product) => product.slug === slug);
}
