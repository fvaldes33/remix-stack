import { Alert, Divider, TextInput, Button } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import type { LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useMutation } from "@tanstack/react-query";
import type { AuthError, Session, User } from "@supabase/supabase-js";
import { AlertCircle } from "tabler-icons-react";
import { z } from "zod";

import GoogleIcon from "~/components/GoogleIcon";
import { getSupabase } from "~/lib/supabase";
import { requireNonAuthSession } from "~/lib/auth/guards.server";

const SigninSchema = z.object({
  email: z.string().email(),
});

export async function loader({ request }: LoaderArgs) {
  return await requireNonAuthSession(request);
}

export default function LoginPage() {
  const { onSubmit, getInputProps, setFieldValue, ...form } = useForm({
    validate: zodResolver(SigninSchema),
    initialValues: {
      email: "",
    },
  });

  const createAccount = useMutation<
    { user: User | null; session: Session | null },
    AuthError,
    { email: string }
  >(async ({ email }: { email: string }) => {
    const {
      data: { user, session },
      error,
    } = await getSupabase().auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/callback`,
      },
    });

    if (error) {
      throw error as unknown as AuthError;
    }

    return { user, session };
  });

  const handleSubmit = async (values: typeof form.values) => {
    createAccount.mutate(values);
  };

  const signInWithGoogle = async () => {
    const { error } = await getSupabase().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/callback/provider`,
        // shouldCreateUser: false,
      },
    });

    if (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200">
        <h1 className="text-4xl font-black tracking-tighter text-slate-800">
          Hello 👋🏼
          <br />
          Welcome back!
        </h1>

        <p className="text-xl text-slate-600 mt-8">
          Do not have an account yet?{" "}
          <Link to="/signup" className="text-fuchsia-600">
            Create account
          </Link>
        </p>
      </div>
      <div className="p-8 md:p-12">
        {createAccount.error && (
          <Alert color="red" icon={<AlertCircle />} mb={16}>
            {createAccount.error.message}
          </Alert>
        )}

        {createAccount.data ? (
          <p className="text-xl text-slate-600 mb-8">
            Please use the magic link in your email to continue.
          </p>
        ) : (
          <>
            <div className="">
              <button
                className="bg-white border-2 border-gray-200 rounded-full px-4 py-2 w-full transition-all duration-150 hover:border-[#4285F4]"
                onClick={() => signInWithGoogle()}
              >
                <span className="flex items-center justify-center space-x-4">
                  <GoogleIcon size={24} />
                  <span className="font-bold font-[Roboto] text-[#00000089]">
                    Sign in with Google
                  </span>
                </span>
              </button>

              <Divider label="OR" labelPosition="center" my={16} />
            </div>
            <form method="post" onSubmit={onSubmit(handleSubmit)}>
              <div className="flex flex-col space-y-6">
                <TextInput
                  id="email"
                  label="Email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  size="md"
                  {...getInputProps("email")}
                />

                <Button
                  type="submit"
                  radius="sm"
                  variant="filled"
                  fullWidth
                  loading={createAccount.isLoading}
                >
                  Send Magic Link
                </Button>
              </div>
            </form>
            <div className="mt-4">
              <Link to="/forgot" className="text-sm text-slate-600">
                Forgot password?
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
