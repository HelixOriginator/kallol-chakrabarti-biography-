import { 
  BookOpen, 
  Globe, 
  Github, 
  PenTool, 
  FileText, 
  Award, 
  Download, 
  Copyright,
  Lightbulb,
  Search,
  BookMarked,
  BrainCircuit,
  ShieldCheck,
  Landmark,
  Cpu,
  Zap,
  Activity,
  Scale
} from 'lucide-react';
import { SocialLink, Milestone } from './types';

export const PROFILE_NAME = "Kallol Chakrabarti";
export const PROFILE_TITLE = "Top 2% Researcher | Helix Originator | AI Policy Architect";

export const PROFILE_BIO = `Kallol Chakrabarti (known as "Kallol") is a world-leading independent researcher specializing in governance innovation, civilizational studies, and ethical AI. He has given his name new meaning through his creation of the Kallol Wave Framework, and as the originator of the Karma Index and Bharat Vikas Mandal. He holds the highest documented downloads among independent researchers (3,850+), ranking among the top 2% of researchers globally in terms of download metrics. He has applied for the National Intellectual Property Awards 2025, leaving the category to be determined by the reviewers.`;

// Updated to point to your local file
export const PROFILE_IMAGE_URL = "profile-pic.jpg"; 

export const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    count: '3,850+',
    label: 'Total Downloads',
    subLabel: 'Zenodo (3k+) & SSRN (584)',
    icon: Download
  },
  {
    id: 'm2',
    count: '200+',
    label: 'Original Concepts',
    subLabel: 'Highest by unaffiliated researcher',
    icon: BrainCircuit
  },
  {
    id: 'm3',
    count: '238+',
    label: 'DOI Publications',
    icon: BookOpen
  },
  {
    id: 'm4',
    count: '25',
    label: 'Registered Copyrights',
    icon: Copyright
  },
  {
    id: 'm5',
    count: '90+',
    label: 'Novelty Index',
    subLabel: 'On 25 DeSci Lab Articles',
    icon: Award
  },
  {
    id: 'm6',
    count: '1',
    label: 'Patent Filed',
    subLabel: 'India (2024)',
    icon: Lightbulb
  }
];

export const KEY_CONCEPTS = [
  {
    id: 'c1',
    title: 'Helix Kallol Doctrine',
    description: 'A strategic framework designed to navigate complex governance challenges by integrating adaptive leadership with structural resilience.',
    icon: Activity
  },
  {
    id: 'c2',
    title: 'Karma Index',
    description: 'A pioneering policy tool that measures the ethical impact and long-term consequences of governance actions, moving beyond purely economic metrics.',
    icon: Scale
  },
  {
    id: 'c3',
    title: 'Sanatana Samyata',
    description: 'A civilizational study concept focused on restoring balance and harmony in modern society through the application of ancient wisdom traditions.',
    icon: Landmark
  },
  {
    id: 'c4',
    title: 'DTRPI',
    description: 'Digital Transparency & Research Policy Index. A metric for evaluating the integrity, openness, and impact of digital research initiatives.',
    icon: Search
  },
  {
    id: 'c5',
    title: 'Kallol Wave Framework',
    description: 'A theoretical model describing the propagation of influence in digital policy, explaining how independent ideas can shape global discourse.',
    icon: Zap
  },
  {
    id: 'c6',
    title: 'Bharat Vikas Mandal',
    description: 'A holistic developmental model proposed for national growth, emphasizing cultural roots alongside technological advancement.',
    icon: Globe
  }
];

export const RECOGNITIONS = [
  {
    id: 'r1',
    organization: 'Election Commission of India',
    title: 'Safeguarding Democratic Truth',
    description: 'Acknowledged and accepted suggestions for countering electoral misinformation.',
    icon: ShieldCheck
  },
  {
    id: 'r2',
    organization: 'Assam Chief Minister\'s Office',
    title: 'Transformational Governance',
    description: 'Personally acknowledged (Ref. No. 3726013) for policy contributions.',
    icon: Landmark
  },
  {
    id: 'r3',
    organization: 'HarvardX',
    title: 'Certified in Rhetoric',
    description: 'The Art of Persuasive Writing and Public Speaking.',
    icon: Award
  },
  {
    id: 'r4',
    organization: 'Ronin Institute',
    title: 'Research Scholar',
    description: 'Member of the Ronin Institute for Independent Scholarship.',
    icon: Globe
  }
];

export const NOTABLE_WORKS = [
  {
    title: "Silent Wars",
    type: "Book",
    desc: "Published 2025 (Kindle). A deep dive into modern strategic conflicts."
  },
  {
    title: "Sacred Stories for Children",
    type: "Copyrighted Work",
    desc: "Officially registered with Indian Copyright Office; simplifying ancient wisdom."
  },
  {
    title: "Safeguarding Democratic Truth",
    type: "Policy Paper",
    desc: "Published on DeSci Lab; recognized by ECI."
  },
  {
    title: "Sanskrit AI Lab Proposal",
    type: "Policy Brief",
    desc: "Published on mygov.in; cybersecurity applications using Sanskrit phonetics."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'web',
    title: 'Personal Webpage',
    url: 'https://helixoriginator.github.io/Kallol/',
    category: 'Profile',
    icon: Globe,
    description: 'Main personal landing page'
  },
  {
    id: 'scholar',
    title: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=ixmIlRAAAAAJ&hl=en',
    category: 'Publication',
    icon: BookMarked,
    description: 'Citation indices and paper list'
  },
  {
    id: 'orcid',
    title: 'ORCID',
    url: 'https://orcid.org/0009-0007-4971-8936',
    category: 'Profile',
    icon: FileText,
    description: '0009-0007-4971-8936'
  },
  {
    id: 'research-sanatan',
    title: 'Sanatan Dharma Research',
    url: 'https://helixoriginator.github.io/sanatan-dharma-research-repository/',
    category: 'Project',
    icon: BookOpen,
    description: 'Civilizational studies hub'
  },
  {
    id: 'project-netlify',
    title: 'Project Helix',
    url: 'https://starlit-beijinho-f71d90.netlify.app/',
    category: 'Project',
    icon: Globe,
    description: 'Netlify hosted research project'
  },
  {
    id: 'github',
    title: 'GitHub Profile',
    url: 'https://github.com/helixoriginator',
    category: 'Profile',
    icon: Github,
    description: 'Code repositories and open source'
  },
  {
    id: 'gov-ai',
    title: 'Governance & AI',
    url: 'https://helixoriginator.github.io/strategic-leadership-governance-ai/',
    category: 'Project',
    icon: Cpu,
    description: 'Strategic leadership in AI ethics'
  },
  {
    id: 'medium',
    title: 'Medium Blog',
    url: 'https://medium.com/@kallolchitralimagicpen',
    category: 'Publication',
    icon: PenTool,
    description: 'Featured in "Innovation Policies"'
  },
  {
    id: 'ssrn',
    title: 'SSRN Papers',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5286196',
    category: 'Publication',
    icon: FileText,
    description: '584+ Downloads'
  },
  {
    id: 'zenodo',
    title: 'Zenodo',
    url: 'https://zenodo.org/search?q=Kallol%20Chakrabarti&sort=newest',
    category: 'Publication',
    icon: Search,
    description: '3,000+ Downloads'
  },
  {
    id: 'academia',
    title: 'Academia.edu',
    url: 'https://independent.academia.edu/KallolChakrabarti1',
    category: 'Profile',
    icon: BookOpen,
    description: 'Academic community profile'
  }
];

function Cpu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}