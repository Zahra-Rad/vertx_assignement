import { ProfileOverview } from '../components/profile/ProfileOverview';
import VERTEX_LOGO from '../assets/logo.png';
import PROFILE_2 from '../assets/profile2.jpg';
import UNKNOWN_LOGO from '../assets/unknownProfile.jpg';

const MOCK_USER = {
    name: 'Mr.ABC',
    avatar: PROFILE_2,
    role: 'Co-Founder & CEO',
    company: 'Vertx',
    companyLogo: VERTEX_LOGO,
    verified: true,
    badge: 'Entrepreneur',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    email: 'email@example.com'
};

const MOCK_COMPANIES = [
    {
        id: 1,
        name: 'Vertx',
        logo: VERTEX_LOGO,
        title: 'CEO',
        active: true,
        foundedYear: '2023',
        industry: 'Fintech.',
    },
    {
        id: 2,
        name: 'Company 1',
        logo: UNKNOWN_LOGO,
        title: 'PROPRIETOR',
        active: false,
        foundedYear: '2023',
        industry: 'QuickCommerce.',
        description: 'Acquired by abc.',
    }
];

const MOCK_EXPERIENCES = [
    {
        id: 1,
        role: 'Co-Founder & CEO',
        companyName: 'Company 1',
        companyLogo: UNKNOWN_LOGO,
        startDate: 'Jan 2023',
        endDate: 'Present',
        duration: '1 yr',
        location: 'San Francisco Bay Area'
    },
    {
        id: 2,
        role: 'Product Manager',
        companyName: 'Company 2',
        companyLogo: UNKNOWN_LOGO,
        startDate: 'Jan 2022',
        endDate: 'Dec 2022',
        duration: '1 yr',
        location: 'New York'
    },
    {
        id: 3,
        role: 'Software Engineer',
        companyName: 'Company 3',
        companyLogo: UNKNOWN_LOGO,
        startDate: 'Jan 2021',
        endDate: 'Dec 2021',
        duration: '1 yr',
        location: 'Remote'
    }
];

export default function ProfilePage() {
    return (
        <ProfileOverview
            user={MOCK_USER}
            companies={MOCK_COMPANIES}
            experiences={MOCK_EXPERIENCES}
        />
    );
}


