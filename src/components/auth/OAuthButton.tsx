"use client";

import { Provider } from "@supabase/supabase-js";
import { Button } from "../ui/button";
import { OAuthSignIn } from "@/app/login/actions";
import GithubIcon from "./GithubIcon";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export const OAuthButtons = () => {
  const providers: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <GithubIcon />,
    },
  ];

  return (
    <>
      {providers.map((provider) => {
        return (
          <Button
            className="w-full flex items-center gap-4"
            variant={"outline"}
            key={provider.name}
            onClick={async () => await OAuthSignIn(provider.name)}
          >
            {provider.icon}
            Login with {provider.displayName}
          </Button>
        );
      })}
    </>
  );
};
