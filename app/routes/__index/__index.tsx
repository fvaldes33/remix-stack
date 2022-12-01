import { Outlet } from "@remix-run/react";
import { useAtom } from "jotai";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Modal from "~/components/primitives/Modal";
import { showAuthModalAtom } from "~/lib/atoms/root";
import SignupPage from "~/routes/__auth/signup";

export default function SubMainLayout() {
  const [authModal, setAuthModal] = useAtom(showAuthModalAtom);

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
    </>
  );
}
