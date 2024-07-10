import { FileStack } from "lucide-react";
import Link from "next/link";

type Props = {
  size: "sm" | "default" | "lg" | "icon";
  className?: string;
  type: "icon" | "text";
};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <div
        className={`flex justify-center items-center gap-2 ${props.className}`}
      >
        <FileStack size={props.size} className="w-8 text-foreground" />
        {props.type === "text" ? (
          <h1 className="text-3xl font-semibold text-foreground">Docsffre</h1>
        ) : null}
      </div>
    </Link>
  );
};

export default Logo;
