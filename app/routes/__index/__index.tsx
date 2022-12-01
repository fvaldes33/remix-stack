import { Button, Drawer } from "@mantine/core";
import { Form, Link, Outlet } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { History, ShoppingCart, X } from "tabler-icons-react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Modal from "~/components/primitives/Modal";
import {
  promptHistoryDrawerAtom,
  promptHistoryAtom,
} from "~/lib/atoms/prompts";
import { showAuthModalAtom } from "~/lib/atoms/root";
import { useUserData } from "~/lib/hooks/useUserData";
import { resolveCdn } from "~/lib/resolveUrl";
import { getSupabase } from "~/lib/supabase";
import type { PromptRecord } from "~/modules/prompts";
import SignupPage from "~/routes/__auth/signup";
import { event, GTAG_EVENTS } from "~/lib/gtag.client";

export default function SubMainLayout() {
  const [authModal, setAuthModal] = useAtom(showAuthModalAtom);
  const { user } = useUserData();

  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <Modal
        open={authModal}
        onOpenChange={() => setAuthModal(false)}
        size="sm"
      >
        <SignupPage asPage={false} />
      </Modal>
      {!user && (
        <>
          <PromptHistoryDrawer />
          <PromptHistoryAffix />
        </>
      )}
    </>
  );
}

function PromptHistoryAffix() {
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useAtom(promptHistoryDrawerAtom);
  const prompts = useAtomValue(promptHistoryAtom);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!prompts.length) return null;

  const openDrawer = () => {
    setOpened((prev) => !prev);
    event({
      ...GTAG_EVENTS.OPEN_HISTORY,
      label: "",
    });
  };

  return (
    <button
      onClick={() => openDrawer()}
      className="fixed z-[999] bottom-6 right-6 h-16 w-16 rounded-full bg-indigo-600 text-white flex items-center justify-center"
    >
      <span className="text-xs h-6 w-6 rounded-full flex items-center justify-center bg-pink-600 text-white absolute top-0 left-0">
        {prompts.length}
      </span>
      {opened ? <X size={32} /> : <History size={32} />}
    </button>
  );
}

function PromptHistoryDrawer() {
  const [opened, setOpened] = useAtom(promptHistoryDrawerAtom);
  const [prompts, setPrompts] = useAtom(promptHistoryAtom);
  const client = useMemo(() => getSupabase(), []);

  useQuery({
    queryKey: ["prompthistory", prompts.map((p) => p.id)],
    queryFn: async () => {
      const { data, error } = await client
        .from("prompts")
        .select("*, results:prompt_results(*)")
        .in(
          "id",
          prompts.map((p) => p.id)
        );
      if (error) throw error;
      return data as PromptRecord[];
    },
    enabled: opened,
    onSuccess: (data) => {
      if (data) {
        setPrompts(data);
      }
    },
  });

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      position="right"
      size="xl"
      withCloseButton={false}
      padding={0}
      overlayBlur={12}
      overlayColor="#000"
      overlayOpacity={0.5}
      lockScroll={true}
      styles={(theme) => ({
        drawer: {
          overflow: "auto",
          [theme.fn.largerThan("md")]: {
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
          },
        },
      })}
    >
      <div className="p-6">
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter mb-2">
          Recent
        </h2>
        <div className="p-4 rounded-lg bg-indigo-600/10 mb-4">
          <h2 className="text-base font-bold tracking-tighter text-indigo-600/75 mb-2">
            Save Your Results
          </h2>
          <p className="mb-3 text-sm leading-normal">
            Login to save your prompts and images. You will also gain access to
            our prompt wizard with 100's of other options to build amazing
            prompts.
          </p>

          <Form method="post" action="/signup">
            {prompts.map((prompt, index) => (
              <input
                key={prompt.id}
                type="hidden"
                name={`promptIds`}
                value={prompt.id}
              />
            ))}
            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "pink" }}
              size="xs"
              radius="xl"
              type="submit"
            >
              Create Account
            </Button>
          </Form>
        </div>

        <div>
          {prompts?.map((prompt) => (
            <div className="grid grid-cols-4 gap-4 mb-4" key={prompt.id}>
              {prompt.results.map((result) => (
                <Link
                  key={result.id}
                  to={`/designer?promptId=${prompt.uuid}&resultId=${result.id}`}
                  className="aspect-1 rounded-md shadow-lg overflow-hidden relative"
                  onClick={() => setOpened(false)}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={resolveCdn(result.filename)}
                    alt={prompt.prompt}
                  />
                  <div className="absolute bottom-2 left-2 flex items-end">
                    <Button
                      size="xs"
                      variant="gradient"
                      radius="xl"
                      gradient={{ from: "violet", to: "pink" }}
                      px={8}
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
}
