import { OAuthButtons } from "@/components/auth/OAuthButton";

const LoginPage = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col h-full items-center justify-center gap-11 w-full shadow-sm shadow-foreground">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <div className="flex flex-col gap-5 shadow-sm shadow-foreground/10 px-10 py-5 items-center">
          <p className="text-sm sm:text-lg text-center">
            Sign in with one of the following providers:
          </p>
          <OAuthButtons />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
