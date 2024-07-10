import { createClient } from "@/utils/supabase/server";
import Logo from "../Logo";
import SignOutButton from "../auth/SignOutButton";
import SignInButton from "../auth/SignInButton";
import UserAvatar from "./useravatar";

const Header = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const userMetadata = data.user?.user_metadata;

  return (
    <header className="h-14 flex items-center px-8 justify-between">
      <Logo size="lg" type="text" />

      {data.user ? (
        <UserAvatar
          srcImage={userMetadata?.avatar_url}
          fallback={data.user.email?.slice(0, 2).toUpperCase()!}
        />
      ) : (
        <SignInButton />
      )}
    </header>
  );
};

export default Header;
