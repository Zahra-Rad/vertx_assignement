import { useState } from 'react';
import { ViewMoreButton } from './ViewMoreButton';
import { analyticsStyles as styles } from '../../styles/analytics';
import { CustomSelect } from '../common/CustomSelect';

const INSIGHT_OPTIONS = ['Visitors', 'Connections'];

const INSIGHTS_DATA = [
    {
        id: 'founders',
        title: 'Founders',
        value: '7.4K',
        change: '+000%',
        subtext: '(000)'
    },
    {
        id: 'investors',
        title: 'Investors',
        value: '6.09K',
        change: '+000%',
        subtext: '(000)'
    }
];

const InsightItem = ({ title, value, change, subtext }) => (
    <div className={styles.insights.item.container}>
        <div className={styles.insights.item.header}>
            <span>{title}</span>
        </div>
        <div className={styles.insights.details.container}>
            <h2 className={styles.insights.item.value}>{value}</h2>
            <div className={styles.insights.item.subtext}>
                <span className="text-success">{change}</span> {subtext}
            </div>
        </div>
    </div>
);

const InsightsHeader = ({ selectedInsight, onInsightChange }) => (
    <div className={styles.insights.header}>
        <h3 className={styles.insights.title}>Insights</h3>
        <CustomSelect
            value={selectedInsight}
            onChange={onInsightChange}
            options={INSIGHT_OPTIONS}
        />
    </div>
);

export const InsightsSection = () => {
    const [selectedInsight, setSelectedInsight] = useState(INSIGHT_OPTIONS[0]);

    return (
        <div className='flex flex-col gap-0'>
            <InsightsHeader 
                selectedInsight={selectedInsight}
                onInsightChange={setSelectedInsight}
            />
            
            <div className={styles.insights.container}>
                {INSIGHTS_DATA.map(insight => (
                    <InsightItem
                        key={insight.id}
                        title={insight.title}
                        value={insight.value}
                        change={insight.change}
                        subtext={insight.subtext}
                    />
                ))}
            </div>

            <div className={styles.insights.footer}>
                <ViewMoreButton text="View detailed insights" />
            </div>
        </div>
    );
};