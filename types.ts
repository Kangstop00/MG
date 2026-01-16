import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
}

export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon?: LucideIcon;
  highlight?: boolean;
}

export interface QuickLink {
  id: string;
  label: string;
  icon: LucideIcon;
}