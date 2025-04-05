import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Tabs from "./Tabs";

const MobileTopNav = () => (
  <div className="xl:hidden w-full fixed top-0 left-0 right-0 bg-primary z-20">
    <Sidebar variant="mobile-top" />
    <Tabs />
  </div>
);

const BottomNav = () => (
  <div className="w-full fixed bottom-0 left-0 right-0 bg-primary border-t border-borderLight xl:hidden">
    <Sidebar variant="mobile-bottom" />
  </div>
);

const DashboardLayout = () => {
  return (
    <div className="flex flex-col xl:flex-row bg-primary min-h-screen text-white">
      {/* Desktop Sidebar */}
      <div className="hidden xl:block fixed left-0 top-0 h-screen">
        <Sidebar variant="desktop" />
      </div>

      <div className="flex-1 flex flex-col xl:ml-[207px]">
        {/* Top navigation */}
        <MobileTopNav />

        {/* Desktop Header */}
        <div className="fixed top-0 right-0 left-0 xl:left-[207px] bg-primary z-10 hidden xl:block">
          <Topbar />
          <Tabs />
        </div>

        {/* Main Content */}
        <main className="flex-1 mt-[98px] xl:mt-[98px] min-h-screen bg-primaryLight pb-24 xl:pb-6" role="main">
          <Outlet />
        </main>

        {/* Bottom navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default DashboardLayout;
