"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/search";

  return (
    <>
    {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isPlayerPage ? (
          <Link href={"/"}>
            <Button>
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href={"/teacher/courses"}>
            <Button>Teacher Mode</Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
