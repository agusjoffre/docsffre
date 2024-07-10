import Link from "next/link";
import SearchBar from "./searchbar";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

type SidebarSectionListItem = {
  title: string;
  list: string[];
  btntext: string;
  href: string;
};

const Sidebar = () => {
  const sections: SidebarSectionListItem[] = [
    {
      title: "Your Documents",
      btntext: "New document",
      list: ["Document 1", "Document 2", "Document 3"],
      href: "/documents/new",
    },
    {
      title: "Your projects",
      btntext: "New project",
      list: ["Project 1", "Project 2", "Project 3"],
      href: "/projects/new",
    },
  ];

  return (
    <aside className="bg-background px-10 py-14 w-fit flex flex-col gap-11">
      <SearchBar />
      <section className="flex flex-col gap-20">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-foreground">
              {section.title.toUpperCase()}
            </h3>
            <ul>
              {section.list.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link href={section.href}>
              <Button
                variant={"outline"}
                className="h-7 shadow-foreground/20 shadow-sm border-none flex items-center justify-center gap-3 text-sm font-medium"
              >
                {section.btntext}
                <Plus color="gray" size={15} />
              </Button>
            </Link>
          </section>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
