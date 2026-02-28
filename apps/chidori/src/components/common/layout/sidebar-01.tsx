import { NavLink } from "rasengan"
import { cn } from "@/lib/utils";

export type NavigationLink = {
    label: string;
    to: string;
    level: number;
    data?: Record<string, any>
};

export type NavigationSection = {
    title: string;
    items: (NavigationLink)[];
};

export type Navigation = NavigationSection[];

const navigations: Navigation = [{
    title: "Getting Started",
    items: [
        { label: "Overview", to: "/docs", level: 1 },
        { label: "Installation", to: "/docs/installation", level: 1 },
    ]
},
{
    title: "Resources",
    items: [
        // { label: "Roadmap", to: "/docs/resources/roadmap", level: 1 },
        { label: "Changelog", to: "/docs/resources/changelog", level: 1 },
        // { label: "FAQ", to: "/docs/resources/faq", level: 1 },
    ]
}]

export default function Sidebar({ onClose = () => { } }: { onClose?: () => void }) {

    return (
        <aside className="absolute top-0 w-[276px] h-full pl-6 pr-4 py-16 pb-[100px] bg-background text-sm overflow-auto hide-scrollbar border-r border-r-border">
            {navigations.map((section, index) => (
                <div key={section.title} className={`flex flex-col text-foreground ${index > 0 ? 'mt-10' : ''}`}>
                    <span className="text-foreground/60 text-xs font-semibold px-2">{section.title}</span>
                    <nav className="mt-2 flex flex-col gap-1 w-auto">
                        {section.items.map((item) => (
                            <NavLink
                                key={item.to}
                                end={item.to === '/docs'}
                                to={item.to || "#"}
                                onClick={onClose}
                                caseSensitive
                                className={"flex justify-between pr-4"}
                            >
                                {
                                    ({ isActive }) => (
                                        <>
                                            <span className={cn("inline-block text-xs font-semibold px-2 py-[6px] hover:bg-muted/70 dark:hover:bg-input/70 rounded-md cursor-pointer transition-all",
                                                isActive ? "bg-primary/5 dark:bg-primary/20 text-primary borderd border-primary hover:bg-primary/5 dark:hover:bg-primary/20" : ""
                                            )}>
                                                {item.label}
                                            </span>
                                        </>
                                    )
                                }
                            </NavLink>
                        ))}
                    </nav>
                </div>
            ))}
        </aside>
    )
}