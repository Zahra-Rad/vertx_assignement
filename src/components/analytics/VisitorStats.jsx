import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line,
    Tooltip
} from "recharts";
import { analyticsStyles as styles } from '../../styles/analytics';

const formatYAxis = (value) => {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}k`;
    }
    return value;
};

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    
    return (
        <div className="bg-primaryLight text-white text-xs font-bold px-3 py-1 rounded shadow-md">
            <p className="text-primaryDeactive">{payload[0].payload.date}</p>
            {payload.map((entry, index) => (
                <p key={index} className="text-white">
                    {entry.dataKey === 'visitors' ? 'Visitors: ' : 'Connections: '}
                    {entry.value}
                </p>
            ))}
        </div>
    );
};

const StatsValue = ({ number, change, changeValue, isConnections }) => (
    <div className={styles.stats.value.container}>
        <div className={`flex items-center gap-2 ${isConnections ? 'border-l border-borderLight pl-6' : ''}`}>
            {isConnections && <div className="w-2 h-2 rounded-full bg-[#C36DEE]" />}
            <h2 className={styles.stats.value.number}>{number}</h2>
        </div>
        <div className={styles.stats.value.change}>
            <span className="text-success">{change}</span> ({changeValue})
        </div>
    </div>
);

const CustomChart = ({ data, showConnections }) => {
    const chartConfig = {
        xAxisTicks: ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'],
        yAxisTicks: [200, 400, 800, 1200, 1600, 2000]
    };

    const axisStyle = {
        fontSize: '12px',
        fontWeight: 400,
        '@media (max-width: 768px)': {
            fontWeight: 500
        }
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis
                    dataKey="date"
                    stroke="#666"
                    ticks={chartConfig.xAxisTicks}
                    tickLine={false}
                    style={axisStyle}
                />
                <YAxis
                    stroke="#666"
                    tickFormatter={formatYAxis}
                    ticks={chartConfig.yAxisTicks}
                    tickLine={false}
                    axisLine={false}
                    style={axisStyle}
                />
                <Line
                    type="linear"
                    dataKey="visitors"
                    stroke="#fff"
                    strokeWidth={2}
                    dot={false}
                />
                {showConnections && (
                    <Line
                        type="linear"
                        dataKey="connections"
                        stroke="#C36DEE"
                        strokeWidth={2}
                        dot={false}
                    />
                )}
                <Tooltip content={<CustomTooltip />} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export const VisitorStats = ({ data, totalVisitors, change, changeValue, showConnections }) => (
    <div>
        <div className="flex gap-6">
            <StatsValue 
                number={totalVisitors}
                change={change}
                changeValue={changeValue}
            />
            {showConnections && (
                <StatsValue 
                    number="3.49K"
                    change="+180%"
                    changeValue="497"
                    isConnections
                />
            )}
        </div>
        <div className={styles.chart.container}>
            <CustomChart data={data} showConnections={showConnections} />
        </div>
    </div>
); 