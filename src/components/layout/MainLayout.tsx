
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./MobileNav";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      {!isMobile && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
      <div className={`${!isMobile ? "ml-0 md:ml-64" : ""} transition-all duration-300 ease-in-out flex flex-col min-h-screen`}>
        <TopNav openSidebar={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
        {isMobile && <MobileNav />}
      </div>
    </div>
  );
};

export default MainLayout;
