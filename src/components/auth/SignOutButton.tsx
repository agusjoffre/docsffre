"use client";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { OAuthSignOut } from "@/app/login/actions";

type Props = {
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  className?: string;
};

const SignOutButton = (props: Props) => {
  return (
    <Button
      size={props.size ? props.size : "default"}
      variant={props.variant ? props.variant : "destructive"}
      className={`w-full flex items-center gap-2 ${props.className}`}
      onClick={async () => await OAuthSignOut()}
    >
      <LogOut />
      {props.size === "icon" ? null : "Sign Out"}
    </Button>
  );
};

export default SignOutButton;
