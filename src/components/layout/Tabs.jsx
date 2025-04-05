import { NavLink, useLocation } from "react-router-dom";
import { layoutStyles as styles } from "../../styles/layout";

const analyticsTabs = [
    { title: "Overview", path: "/analytics" },
    { title: "Reports", path: "/analytics/reports" },
    { title: "Demographics", path: "/analytics/demographics" }
];

const profileTabs = [
    { title: "Overview", path: "/profile" },
    { title: "Profile", path: "/profile/profile" },
    { title: "Experience", path: "/profile/experience" },
    { title: "Media", path: "/profile/media" },
];

const TabItem = ({ tab, isMobile, pathname }) => {
    const isEnabled = tab.path === "/analytics" || tab.path === "/profile";
    const isActive = pathname.startsWith(tab.path);

    const baseMobile = "relative flex-shrink-0 px-4 py-3 text-sm";
    const mobileClass = `${baseMobile} ${isActive ? "text-white" : "text-gray-400"}`;

    if (!isEnabled) {
        return (
            <div className={isMobile ? baseMobile + " text-gray-400" : `${styles.tabs.tab.base} ${styles.tabs.tab.inactive}`}>
                {tab.title}
            </div>
        );
    }

    return (
        <NavLink
            to={tab.path}
            className={({ isActive }) =>
                isMobile
                    ? mobileClass
                    : `${styles.tabs.tab.base} ${isActive ? styles.tabs.tab.active : styles.tabs.tab.inactive}`
            }
        >
            {isMobile ? (
                <>
                    {tab.title}
                    {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                    )}
                </>
            ) : (
                tab.title
            )}
        </NavLink>
    );
};

const Tabs = () => {
    const location = useLocation();
    const tabs = location.pathname.startsWith("/profile") ? profileTabs : analyticsTabs;
    
    return (
        <>
            {/* Mobile Tabs */}
            <div className="xl:hidden w-[100vw] bg-primary border-b border-borderLight mt-6">
                <div className="flex justify-evenly overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <TabItem
                            key={tab.path}
                            tab={tab}
                            isMobile={true}
                            pathname={location.pathname}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden xl:block">
                <div className={styles.tabs.container}>
                    <div className={styles.tabs.wrapper}>
                        <div className={styles.tabs.content}>
                            {tabs.map((tab) => (
                                <TabItem
                                    key={tab.path}
                                    tab={tab}
                                    isMobile={false}
                                    pathname={location.pathname}
                                />
                            ))}
                        </div>
                        <div className={styles.tabs.more}>
                            <button className={styles.tabs.moreButton}>
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;

