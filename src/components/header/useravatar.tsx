import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignOutButton from "../auth/SignOutButton";
import Link from "next/link";

type Props = {
  srcImage: string;
  fallback: string;
};

const UserAvatar = ({ srcImage, fallback }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-full cursor-pointer">
        <Avatar>
          <AvatarImage src={srcImage} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/projects">Projects</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/documents">Documents</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/friends">Friends</Link>
        </DropdownMenuItem>
        <div className="mt-4">
          <SignOutButton size="sm" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
