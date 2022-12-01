import { useClipboard } from "@mantine/hooks";
import { useEffect, useState } from "react";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandPinterest,
  BrandReddit,
  BrandTwitter,
  // Copy,
  Mail,
  Share,
} from "tabler-icons-react";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

import { Button } from "~/components/primitives";
import { event, GTAG_EVENTS } from "~/lib/gtag.client";
import { resolveCdn } from "~/lib/resolveUrl";
import Modal from "./primitives/Modal";

export default function PublicShare() {
  const { copy, copied } = useClipboard();
  const [url, setUrl] = useState<string>("");
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      alert("Copied to your clipboard!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copied]);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setOpened(true)}
        leftIcon={<Share />}
      >
        Share
      </Button>
      <Modal
        size="sm"
        open={opened}
        onOpenChange={() => setOpened(false)}
        title="Share"
      >
        <div className="flex flex-col space-y-4">
          <input
            readOnly
            value={url}
            onChange={() => {}}
            onFocus={() => copy(url)}
          />
          <div className="flex items-center justify-center space-x-4">
            <EmailShareButton
              url={url}
              className="h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                background: "#1e293b",
                color: "#ffffff",
              }}
              onClick={() => {
                event({
                  ...GTAG_EVENTS.PUBLIC_SHARE_COPY,
                  label: "email",
                });
              }}
              subject={`TODO`}
            >
              <Mail size={24} />
            </EmailShareButton>
            <FacebookShareButton
              url={url}
              className="h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                background: "#3b5998",
                color: "#ffffff",
              }}
              onClick={() => {
                event({
                  ...GTAG_EVENTS.PUBLIC_SHARE_COPY,
                  label: "facebook",
                });
              }}
              quote={`TODO`}
            >
              <BrandFacebook size={24} />
            </FacebookShareButton>
            <LinkedinShareButton
              url={url}
              className="h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                background: "#057eb1",
                color: "#ffffff",
              }}
              onClick={() => {
                event({
                  ...GTAG_EVENTS.PUBLIC_SHARE_COPY,
                  label: "linkedin",
                });
              }}
              title={`TODO`}
              source="Designed AI"
            >
              <BrandLinkedin size={24} />
            </LinkedinShareButton>
            <PinterestShareButton
              url={url}
              media={resolveCdn("")}
              className="h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                background: "#cb2128",
                color: "#ffffff",
              }}
              description={`TODO`}
              onClick={() => {
                event({
                  ...GTAG_EVENTS.PUBLIC_SHARE_COPY,
                  label: "pinterest",
                });
              }}
            >
              <BrandPinterest size={24} />
            </PinterestShareButton>
            <RedditShareButton
              url={url}
              className="h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                background: "#5f9acf",
                color: "#ffffff",
              }}
              title={`TODO`}
              onClick={() => {
                event({
                  ...GTAG_EVENTS.PUBLIC_SHARE_COPY,
                  label: "reddit",
                });
              }}
            >
              <BrandReddit size={24} />
            </RedditShareButton>
            <TwitterShareButton
              url={url}
              className="h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                background: "#08abed",
                color: "#ffffff",
              }}
              title={`TODO`}
              onClick={() => {
                event({
                  ...GTAG_EVENTS.PUBLIC_SHARE_COPY,
                  label: "twitter",
                });
              }}
            >
              <BrandTwitter size={24} />
            </TwitterShareButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
