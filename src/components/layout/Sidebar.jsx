import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import LOGO from "../../assets/logo.png";
import LOGO_DARK from "../../assets/logoDark.jpg";
import { Plus } from 'lucide-react';
import PROFILE_1 from "../../assets/profile1.jpg";
import { layoutStyles as styles } from "../../styles/layout";
import { desktopSidebarItems, mobileSidebarItems } from "../../constants/sidebarItems";
import { LayoutGrid, LineChart, Link2, Bell, Users, EllipsisVertical } from 'lucide-react';

const AccountAvatar = ({ account }) => (
    <div className="relative">
        <img
            src={account.avatar}
            alt={`${account.role} Account`}
            className={styles.sidebar.account.avatar}
        />
        {account.isOnline && (
            <div className={styles.sidebar.account.status} />
        )}
    </div>
);

const AccountSwitcher = () => {
    const [accounts] = useState([
        { id: 1, name: "Vertxlabs", avatar: PROFILE_1, role: "Admin", isOnline: true }
    ]);

    return (
        <div className={styles.sidebar.account.section}>
            <div className={styles.sidebar.account.container}>
                {accounts.map(account => (
                    <AccountAvatar key={account.id} account={account} />
                ))}
            </div>
            <button className={styles.sidebar.account.addButton}>
                <Plus className={styles.sidebar.account.addIcon} />
            </button>
        </div>
    );
};

const NavItem = ({ item, isActive, variant = 'desktop' }) => {
    const iconMap = {
        'Dashboard': <LayoutGrid size={20} />,
        'Analytics': <LineChart size={20} />,
        'Connect': <Link2 size={20} />,
        'Activity': <Bell size={20} />,
        'Profile': <Users size={20} />
    };

    const isMobileBottom = variant === 'mobile-bottom';

    return (
        <span className={`${styles.sidebar.nav.item.base} ${
            isActive ? styles.sidebar.nav.item.active : styles.sidebar.nav.item.inactive
        } ${isMobileBottom ? 'flex flex-col items-center justify-center gap-1 py-3 px-2' : ''}`}>
            {isMobileBottom && iconMap[item.title]}
            <span className={isMobileBottom ? 'text-xs' : ''}>{item.title}</span>
        </span>
    );
};

const SidebarHeader = () => (
    <div className={styles.sidebar.header.container}>
        <img src={LOGO} alt="Vertxlabs Logo" className={styles.sidebar.header.logo} />
        <div className={styles.sidebar.header.title}>Vertxlabs, Inc</div>
    </div>
);

const Navigation = ({ variant = 'desktop' }) => {
    const location = useLocation();
    const enabledPaths = ['/analytics', '/profile'];
    const items = variant === 'mobile-bottom' ? mobileSidebarItems : desktopSidebarItems;

    return (
        <nav className={`${styles.sidebar.nav.container} ${variant === 'mobile-bottom' ? 'px-2' : ''}`}>
            <div className={`${styles.sidebar.nav.list} ${
                variant === 'mobile-bottom' ? 'flex-row justify-around' : 'flex-col'
            }`}>
                {items.map(item => (
                    enabledPaths.includes(item.path) ? (
                        <NavLink key={item.path} to={item.path}>
                            {({ isActive }) => (
                                <NavItem
                                    item={item}
                                    isActive={isActive}
                                    variant={variant}
                                />
                            )}
                        </NavLink>
                    ) : (
                        <div key={item.path}>
                            <NavItem
                                item={item}
                                isActive={location.pathname === item.path}
                                variant={variant}
                            />
                        </div>
                    )
                ))}
            </div>
        </nav>
    );
};

const Sidebar = ({ variant = 'desktop' }) => {
    if (variant === 'mobile-top') {
        return (
            <aside className="w-[100vw] flex justify-between py-2 px-4 z-50">
                <div className={styles.sidebar.account.section} style={{ border: 'none' }}>
                    <img
                        src={PROFILE_1}
                        alt={`Profile`}
                        className={styles.sidebar.account.avatar}
                    />
                </div>
                <div className={styles.sidebar.account.section} style={{ border: 'none' }}>
                    <img src={LOGO_DARK} alt={`Profile`} className={styles.sidebar.account.avatar} />
                </div>
                <EllipsisVertical className={styles.sidebar.account.ellipsis} />
            </aside>
        );
    }

    if (variant === 'mobile-bottom') {
        return (
            <aside className="w-full py-1 z-[100]">
                <Navigation variant="mobile-bottom" />
            </aside>
        );
    }

    return (
        <aside className={styles.sidebar.container}>
            <SidebarHeader />
            <div className={styles.sidebar.content}>
                <AccountSwitcher />
                <Navigation variant="desktop" />
            </div>
        </aside>
    );
};

export default Sidebar;
