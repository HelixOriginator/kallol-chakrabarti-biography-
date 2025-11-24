import { LucideIcon } from "lucide-react";

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  category: 'Profile' | 'Project' | 'Publication';
  icon: LucideIcon;
  description?: string;
}

export interface Milestone {
  id: string;
  count: string;
  label: string;
  subLabel?: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}