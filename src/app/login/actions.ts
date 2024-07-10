"use server";

import { getURL } from "@/utils/getUrlHelper";
import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export const OAuthSignIn = async (provider: Provider) => {
  if (!provider) return redirect("/login?message=no provider selected");

  const supabase = createClient();
  const redirectUrl = getURL("/auth/callback");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl, // Usa getURL para obtener la URL correcta
    },
  });

  if (error) return redirect(`/login?message=${error.message}`);

  if (!data) return redirect("/login?message=unknown error");

  return redirect(data.url);
};

export const OAuthSignOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) return redirect(`/login?message=${error.message}`);
  return redirect("/");
};
