import { Link } from "@remix-run/react";
import { useUserData } from "~/lib/hooks/useUserData";
import {
  Avatar,
  DropdownMenu,
  DropdownMenuItem,
} from "~/components/primitives";
import { useSetAtom } from "jotai";
import { profileAtom, userAtom } from "~/lib/atoms/root";
import type { User } from "@supabase/supabase-js";
import type { ProfileRecord } from "~/modules/profiles";
import { User as UserAvatar } from "tabler-icons-react";

interface AvatarMenuProps {
  links?: Array<{ label: string; to: string }>;
}

export default function AvatarMenu({ links }: AvatarMenuProps) {
  const { profile } = useUserData();
  const setUser = useSetAtom(userAtom);
  const setProfile = useSetAtom(profileAtom);

  if (!profile) {
    return (
      <Avatar component={Link} to="/login">
        <UserAvatar />
      </Avatar>
    );
  }

  const signout = () => {
    setUser(null as unknown as User);
    setProfile(null as unknown as ProfileRecord);
  };

  return (
    <DropdownMenu
      trigger={
        <Avatar
          component="button"
          src={
            profile.avatar_url
              ? profile.avatar_url
              : `https://avatars.dicebear.com/api/miniavs/${profile.email}.svg`
          }
          alt={profile.full_name}
        />
      }
    >
      {links &&
        links.length > 0 &&
        links?.map(({ label, to }) => {
          const isExternal = to.startsWith("http");
          let menuItemProps: any = {
            component: Link,
            to,
          };
          if (isExternal) {
            menuItemProps = {
              component: "a",
              href: to,
              target: "_blank",
              rel: "noreferrer",
            };
          }

          const { component: Component, ...props } = menuItemProps;
          return (
            <DropdownMenuItem key={to}>
              <Component {...props} className="block">
                {label}
              </Component>
            </DropdownMenuItem>
          );
        })}

      <DropdownMenuItem>
        <Link to="/signout" className="block" onClick={() => signout()}>
          Logout
        </Link>
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
