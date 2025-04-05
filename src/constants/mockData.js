import india from '../assets/india.jpg';
import america from '../assets/amrica.jpg';
import canada from '../assets/canada.jpg';
import uae from '../assets/uae.jpg';

export const TIME_RANGES = [
    'Today',
    'Yesterday',
    'This week',
    'Last week',
    'Last 7 days',
    'Last 30 days'
];

export const MOCK_PARAMS = [
    {
        label: 'Visitors',
        value: 'visitors',
    },
    {
        label: 'Conversions',
        value: 'conversions',
    },
    {
        label: 'Interactions',
        value: 'interactions',
    },
    {
        label: 'Impressions',
        value: 'impressions',
    },
];

export const MOCK_VISITOR_DATA = [
    {date: 'Feb 28', visitors: 400, connections: 0},
    { date: 'Mar 1', visitors: 400, connections: 200 },
    { date: 'Mar 2', visitors: 1000, connections: 400 },
    { date: 'Mar 3', visitors: 1200, connections: 800 },
    { date: 'Mar 4', visitors: 1400, connections: 1000 },
    { date: 'Mar 5', visitors: 1000, connections: 1200 },
    { date: 'Mar 6', visitors: 1000, connections: 1100 },
    { date: 'Mar 7', visitors: 900, connections: 1000 },
    { date: 'Mar 8', visitors: 900, connections: 1100 },
    { date: 'Mar 9', visitors: 1300, connections: 1100 },
    { date: 'Mar 10', visitors: 1300, connections: 400 },
    { date: 'Mar 11', visitors: 800, connections: 1000 },
    { date: 'Mar 12', visitors: 1000, connections: 800 },
    { date: 'Mar 13', visitors: 700, connections: 500 },
    { date: 'Mar 14', visitors: 1000, connections: 800 },
    { date: 'Mar 15', visitors: 850, connections: 900 },
    { date: 'Mar 16', visitors: 1000, connections: 850 },
    { date: 'Mar 17', visitors: 1000, connections: 900 },
    { date: 'Mar 18', visitors: 600, connections: 500 },
    { date: 'Mar 19', visitors: 2000, connections: 1500 },
    { date: 'Mar 20', visitors: 1600, connections: 1400 },
    { date: 'Mar 21', visitors: 2200, connections: 1800 },
    { date: 'Mar 22', visitors: 600, connections: 500 },
    { date: 'Mar 23', visitors: 1000, connections: 800 },
    { date: 'Mar 24', visitors: 300, connections: 250 },
    { date: 'Mar 25', visitors: 1200, connections: 1000 },
    { date: 'Mar 26', visitors: 700, connections: 600 },
    { date: 'Mar 27', visitors: 1400, connections: 1200 },
    { date: 'Mar 28', visitors: 1000, connections: 900 },
    { date: 'Mar 29', visitors: 1400, connections: 1200 },
    { date: 'Mar 30', visitors: 600, connections: 500 },
    { date: 'Mar 31', visitors: 1400, connections: 1200 },
];

export const MOCK_ADD_ACTIONS = [
    {
        label: 'Connections',
        value: 'connections',
    },
    {
        label: 'Interactions',
        value: 'interactions',
    },
    {
        label: 'Impressions',
        value: 'impressions',
    },
];

export const MOCK_DEMOGRAPHICS_DATA = [
    { country: 'India', percentage: 40, flag: india },
    { country: 'USA', percentage: 25, flag: america },
    { country: 'CANADA', percentage: 10, flag: canada },
    { country: 'UAE', percentage: 7, flag: uae },
]; 