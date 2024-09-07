import AuthForm from "@/components/authencation/auth-form";


export default function AuthPage({ searchParams }: { searchParams: { mode?: string } }) {
  const formMode = searchParams.mode || 'login';
  return <AuthForm mode={formMode} />;
}