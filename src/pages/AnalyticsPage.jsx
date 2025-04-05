import { useState } from 'react';
import { analyticsStyles as styles } from '../styles/analytics';
import { VisitorStats } from '../components/analytics/VisitorStats';
import { InsightsSection } from '../components/analytics/InsightsSection';
import { DemographicsSection } from '../components/analytics/DemographicsSection';
import { CustomSelect } from '../components/common/CustomSelect';
import { AddSelect } from '../components/common/AddSelect';
import {
    TIME_RANGES,
    MOCK_PARAMS,
    MOCK_VISITOR_DATA,
    MOCK_ADD_ACTIONS,
    MOCK_DEMOGRAPHICS_DATA
} from '../constants/mockData';

export default function AnalyticsPage() {
    const [timeRange, setTimeRange] = useState(TIME_RANGES[5]);
    const [selectedParam, setSelectedParam] = useState(MOCK_PARAMS[0]);
    const [selectedAddAction, setSelectedAddAction] = useState(null);

    return (
        <div className={styles.container}>
            <div className={styles.section.primary}>
                <h3 className={styles.section.title}>Overview</h3>
                <div className={styles.section.secondary}>
                    <div className={styles.header.container}>
                        <div className={styles.header.controls}>
                            <CustomSelect
                                value={selectedParam.value}
                                onChange={(e) => setSelectedParam(MOCK_PARAMS.find(p => p.value === e.target.value))}
                                options={MOCK_PARAMS}
                            />
                            <CustomSelect
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                                options={TIME_RANGES}
                            />
                            <AddSelect
                                value={selectedAddAction?.value}
                                onChange={(e) => setSelectedAddAction(MOCK_ADD_ACTIONS.find(a => a.value === e.target.value))}
                                options={MOCK_ADD_ACTIONS}
                            />
                        </div>
                        <div className={styles.stats.container}>
                            <VisitorStats
                                data={MOCK_VISITOR_DATA}
                                totalVisitors="13.49K"
                                change="+69%"
                                changeValue="697"
                                showConnections={selectedAddAction?.value === 'connections'}
                            />
                        </div>
                    </div>
                    <div className={styles.stats.insights}>
                        <InsightsSection />
                    </div>
                </div>
            </div>

            <DemographicsSection data={MOCK_DEMOGRAPHICS_DATA} />
        </div>
    );
}
