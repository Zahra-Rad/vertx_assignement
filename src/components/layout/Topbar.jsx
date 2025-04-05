import { useActivePage } from '../../hooks/useActivePage';
import { layoutStyles as styles } from '../../styles/layout';

export default function Topbar() {
    const pageName = useActivePage();

    return (
        <header className={styles.topbar.container}>
            <div className={styles.topbar.titleContainer}>
                <h1 className={styles.topbar.title}>{pageName}</h1>
                <span className={styles.topbar.link}>Activity</span>
            </div>
            <span className={styles.topbar.link}>Log out</span>
        </header>
    );
}


