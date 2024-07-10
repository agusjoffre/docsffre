import { OAuthButtons } from "@/components/auth/OAuthButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Use one of the following providers</CardDescription>
        </CardHeader>
        <CardContent>
          <OAuthButtons />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
