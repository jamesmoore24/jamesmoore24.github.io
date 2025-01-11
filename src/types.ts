export interface ProjectPost {
  id: number;
  title: string;
  date: Date;
  video?: string; // Optional YouTube embed URL
  content: {
    title: string;
    header: number;
    diagram: string | null;
    markdown: string;
  }[];
}
