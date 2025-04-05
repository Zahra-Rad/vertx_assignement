import { analyticsStyles as styles } from '../../styles/analytics';
import { ArrowRight } from 'lucide-react';
export const ViewMoreButton = ({ text }) => (
    <button type='button' className={styles.viewMore.button}>
        {text}
        <ArrowRight className={styles.viewMore.icon} />
    </button>
); 