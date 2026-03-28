import { randomId } from "@/lib/utils";

export type NavigationLink = {
  key: number,
  label: string;
  to: string;
  level: number;
  data?: Record<string, any>
};

export type NavigationSection = {
  key: number,
  title: string;
  items: (NavigationLink)[];
};

export type Navigation = NavigationSection[];

export const navigations: Navigation = [
  {
    key: randomId(),
    title: "Getting Started",
    items: [
      { key: randomId(), label: "Introduction", to: "/docs/introduction", level: 1 },
      { key: randomId(), label: "Overview", to: "/docs/overview", level: 1 },
      { key: randomId(), label: "Quick Start", to: "/docs/quick-start", level: 1 },
    ]
  },
  {
    key: randomId(),
    title: "Core",
    items: [
      { key: randomId(), label: "Project Structure", to: "/docs/core/project-structure", level: 1 },
      { key: randomId(), label: "Pages", to: "/docs/core/pages", level: 1 },
      { key: randomId(), label: "Layout", to: "/docs/core/layouts", level: 1 },
      { key: randomId(), label: "Configuration", to: "/docs/core/configuration", level: 1 },
      { key: randomId(), label: "Styling", to: "/docs/core/styling", level: 1 },
      { key: randomId(), label: "Deployment", to: "/docs/core/deployment", level: 1 },
    ]
  },
  {
    key: randomId(),
    title: "Components",
    items: [
      { key: randomId(), label: "Pagination", to: "/docs/components/pagination", level: 1 },
      { key: randomId(), label: "Note", to: "/docs/components/note", level: 1 },
    ]
  },
  {
    key: randomId(),
    title: "Resources",
    items: [
      { key: randomId(), label: "Changelog", to: "/docs/resources/changelog", level: 1 },
    ]
  }
];