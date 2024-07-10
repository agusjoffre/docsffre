import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

type Props = {
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  className?: string;
};

const SignInButton = (props: Props) => {
  return (
    <Link href={"/login"}>
      <Button
        size={props.size ? props.size : "default"}
        variant={props.variant ? props.variant : "accent"}
        className={`w-fit flex items-center gap-2 ${props.className}`}
      >
        <LogIn />
        Sign In
      </Button>
    </Link>
  );
};

export default SignInButton;
