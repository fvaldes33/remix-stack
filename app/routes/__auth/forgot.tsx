import { TextInput, Text, Button, Alert } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import type { LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Check } from "tabler-icons-react";
import { z } from "zod";
import { requireNonAuthSession } from "~/lib/auth/guards.server";
import { getSupabase } from "~/lib/supabase";

const ForgotSchema = z.object({
  email: z.string().email(),
});

export async function loader({ request }: LoaderArgs) {
  return await requireNonAuthSession(request);
}

export default function ForgotPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { onSubmit, getInputProps, ...form } = useForm({
    validate: zodResolver(ForgotSchema),
    initialValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    const { error } = await getSupabase().auth.resetPasswordForEmail(
      values.email,
      {
        redirectTo: `${window.location.origin}/callback/recovery`,
      }
    );

    if (error) {
      setLoading(false);
      showNotification({
        title: "Whoops",
        message: error.message,
        color: "red",
      });
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200">
        <h1 className="text-4xl font-black text-slate-800">
          Hello 👋🏼
          <br />
          Reset your password.
        </h1>

        <p className="text-xl text-slate-600 mt-8">
          Here by mistake?{" "}
          <Link to="/login" className="text-fuchsia-600">
            Go Back
          </Link>
        </p>
      </div>
      <div className="p-8 md:p-12">
        {success ? (
          <Alert
            icon={<Check size={24} />}
            title="Success"
            mt={16}
            color="green"
          >
            <Text>Please check your email for further instructions</Text>
          </Alert>
        ) : (
          <form method="post" onSubmit={onSubmit(handleSubmit)}>
            <TextInput
              id="email"
              label="Email"
              name="email"
              placeholder="you@email.com"
              required
              {...getInputProps("email")}
            />
            <Button type="submit" fullWidth mt="xl" loading={loading}>
              Reset Password
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
