"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex w-full items-center gap-x-2 text-white text-sm font-[500] pl-6 transition-all hover:text-slate-700 hover:bg-slate-300/20",
        isActive &&
          "text-white g-sky200/20 hover:bg-sky-200/20 hover:text-sky-200"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-sky-200", isActive && "text-sky-200")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-8 border-sky-800 h-full pt-16 transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
