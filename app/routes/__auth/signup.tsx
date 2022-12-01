import { useForm, zodResolver } from "@mantine/form";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import type { AuthError, Session, User } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle } from "tabler-icons-react";
import { z } from "zod";

import { Button, Input } from "~/components/primitives";
import GoogleIcon from "~/components/GoogleIcon";
import { requireNonAuthSession } from "~/lib/auth/guards.server";
import { APP_NAME } from "~/lib/const";
import { getSupabase } from "~/lib/supabase";

const SignupSchema = z.object({
  email: z.string().email(),
});

export async function loader({ request }: LoaderArgs) {
  return await requireNonAuthSession(request);
}

export async function action({ request }: ActionArgs) {
  return null;
}

export default function SignupPage({ asPage = true }: { asPage?: boolean }) {
  const [searchParams] = useSearchParams();
  const { onSubmit, getInputProps, setFieldValue, ...form } = useForm({
    validate: zodResolver(SignupSchema),
    initialValues: {
      email: "",
    },
  });

  const createAccount = useMutation<
    { user: User | null; session: Session | null },
    AuthError,
    { email: string }
  >(async ({ email }: { email: string }) => {
    let redirect = `${window.location.origin}/callback`;
    if (searchParams.has("redirect")) {
      redirect = `${redirect}?redirectTo=${searchParams.get("redirect")}`;
    }
    const {
      data: { user, session },
      error,
    } = await getSupabase().auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirect,
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
    let redirectTo = `${window.location.origin}/callback/provider`;
    if (searchParams.has("redirect")) {
      redirectTo = `${redirectTo}?redirectTo=${searchParams.get("redirect")}`;
    }

    await getSupabase().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });
  };

  return (
    <div className={asPage ? "grid md:grid-cols-2" : ""}>
      {asPage && (
        <div className="flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200">
          <h1 className="text-4xl font-black text-slate-800">
            Hello 👋🏼
            <br />
            Welcome to {APP_NAME}!
          </h1>

          <p className="text-xl text-slate-600 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-fuchsia-600">
              Sign In
            </Link>
          </p>
        </div>
      )}
      <div className="p-8 md:p-12">
        {!asPage && (
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-center">
            Designed <span className="text-emerald-600 font-black">/ AI</span>
          </h1>
        )}
        {createAccount.error && (
          <div className="bg-red-700/25 border border-red-700/50 mb-4 p-4">
            <AlertCircle size={24} />
            <div>{createAccount.error.message}</div>
          </div>
        )}

        {createAccount.data ? (
          <p className="text-xl text-slate-600 mb-8">
            You are all set! Check your email for the magic link to continue.
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

              {/* <Divider label="OR" labelPosition="center" my={16} /> */}
            </div>
            <form
              className="mt-6"
              method="post"
              onSubmit={onSubmit(handleSubmit)}
            >
              <div className="flex flex-col space-y-6">
                <Input
                  id="email"
                  aria-label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  {...getInputProps("email")}
                />

                <Button
                  type="submit"
                  variant="primary"
                  loading={createAccount.isLoading}
                >
                  Send Magic Link
                </Button>
              </div>
            </form>
            <p className="text-slate-600 mt-4 text-sm">
              {"By signing up, I agree to  Designed AI's"}{" "}
              <a
                className="text-fuchsia-600"
                href={`https://www.designwithai.com/terms`}
              >
                terms &amp; conditions
              </a>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
