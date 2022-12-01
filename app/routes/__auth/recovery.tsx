import { useForm, zodResolver } from "@mantine/form";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { Button } from "~/components/primitives";
import { requireAuthSession } from "~/lib/auth/guards.server";
import { getSupabase } from "~/lib/supabase";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function loader({ request }: LoaderArgs) {
  const { email, accessToken, refreshToken } = await requireAuthSession(
    request
  );

  console.log(email, accessToken);
  return json({
    email,
    accessToken,
    refreshToken,
  });
}

export default function RecoveryPage() {
  const navigate = useNavigate();
  const { accessToken, refreshToken, email } = useLoaderData();
  const supabase = useMemo(() => getSupabase(accessToken), [accessToken]);
  const [loading, setLoading] = useState<boolean>(false);

  const { onSubmit, getInputProps, ...form } = useForm({
    validate: zodResolver(LoginSchema),
    initialValues: {
      email: email,
      password: "",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    const { error } = await supabase.auth.updateUser({
      password: values.password,
    });

    console.log(error);
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200">
        <h1 className="text-4xl font-black text-slate-800">
          Hello 👋🏼
          <br />
          Complete your password reset.
        </h1>

        <p className="text-xl text-slate-600 mt-8">
          Here by mistake?{" "}
          <Link to="/login" className="text-fuchsia-600">
            Go Back
          </Link>
        </p>
      </div>
      <div className="p-8 md:p-12">
        <form method="post" onSubmit={onSubmit(handleSubmit)}>
          <div className="flex flex-col space-y-6">
            <input
              label="Email"
              type="email"
              name="email"
              placeholder="you@email.com"
              disabled
              required
              {...getInputProps("email")}
            />
            <input
              label="Password"
              name="password"
              placeholder="********"
              autoComplete="new-password"
              required
              type="password"
              {...getInputProps("password")}
            />
            <Button type="submit" loading={loading}>
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
