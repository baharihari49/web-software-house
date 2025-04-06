// types.ts
export type ProjectStatus = "Completed" | "In Progress" | "Maintenance";

export type Category = "All" | "Web Development" | "Web Design" | "Web Application" | "Mobile App" | "Data Visualization";

export interface PortfolioItemType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  client: string;
  completion: string;
  status: ProjectStatus;
  link?: string;
  achievements?: string[];
}