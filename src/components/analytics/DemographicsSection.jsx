import { useState } from 'react';
import { ViewMoreButton } from './ViewMoreButton';
import { analyticsStyles as styles } from '../../styles/analytics';
import { CustomSelect } from '../common/CustomSelect';

const DEMOGRAPHICS_OPTIONS = ['Visitors', 'Connections'];

const COUNTRY_COLORS = {
    India: 'bg-[#4834D4]',
    USA: 'bg-[#BD5302]',
    CANADA: 'bg-[#E9C16B]',
    UAE: 'bg-[#579560]'
};

const DemographicsItem = ({ country, percentage, flag }) => (
    <div className={styles.demographics.item.container}>
        <div className={styles.demographics.item.country}>
            <img src={flag} alt={country} className={styles.demographics.item.flag} />
        </div>
        <div className={styles.demographics.item.progress.container}>
            <div className={styles.demographics.item.progress.header}>
                <span>{country}</span>
                <span>{percentage}%</span>
            </div>
            <div className={styles.demographics.item.progress.bar.base}>
                <div
                    className={`${styles.demographics.item.progress.bar.fill} ${COUNTRY_COLORS[country]}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    </div>
);

const MapLegend = () => (
    <div className="flex gap-6 rounded-full border border-borderLight p-2 px-3">
        {Object.entries(COUNTRY_COLORS).map(([country, colorClass]) => (
            <div key={country} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${colorClass}`} />
                <span>{country}</span>
            </div>
        ))}
    </div>
);

export const DemographicsSection = ({ data }) => {
    const [selectedMetric, setSelectedMetric] = useState(DEMOGRAPHICS_OPTIONS[0]);

    return (
        <div className={styles.section.third}>
            <div className={styles.stats.imageContainer}>
                <div className="bg-[url('/map.jpg')] bg-contain bg-no-repeat bg-center h-[213px]">
                </div>
                <div className="absolute top-0 left-0 flex flex-col h-full justify-between items-start gap-6 text-xs">
                    <div className="w-full flex xl:flex-col items-center justify-between mb-6">
                        <h3 className={styles.demographics.title}>Demographics</h3>
                        <CustomSelect
                            value={selectedMetric}
                            onChange={(e) => setSelectedMetric(e.target.value)}
                            options={DEMOGRAPHICS_OPTIONS}
                        />
                    </div>
                    <MapLegend />
                </div>
            </div>
            <div className={styles.demographics.sidebar}>
                <div className={styles.demographics.list}>
                    {data.map((item) => (
                        <DemographicsItem key={item.country} {...item} />
                    ))}
                </div>
                <div className={styles.viewMore.container}>
                    <ViewMoreButton text="View all countries" />
                </div>
            </div>
        </div>
    );
}; 