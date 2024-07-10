import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <section className="flex items-center rounded-full bg-muted h-7">
      <Input
        type="search"
        placeholder="Search"
        className="h-7 placeholder:font-medium placeholder:text-muted-foreground border-none bg-muted focus:border-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button variant={"accent"} className="p-2 h-7">
        <Search size={15} />
      </Button>
    </section>
  );
};

export default SearchBar;
