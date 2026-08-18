"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "./BottomNav";

const NO_NAV_ROUTES = ["/", "/onboarding"];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = !NO_NAV_ROUTES.includes(pathname);

  return (
    <div className="mx-auto min-h-screen max-w-[480px]">
      <main className={showNav ? "pb-20" : undefined}>{children}</main>
      {showNav && <BottomNav />}
    </div>
  );
}
