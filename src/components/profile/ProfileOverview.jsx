import { ProfileHeader } from './ProfileHeader';
import { CompanyList } from './CompanyList';
import { ExperienceList } from './ExperienceList';

export const ProfileOverview = ({ user, companies, experiences }) => {
    return (
        <div className="mx-auto p-4 xl:py-16 xl:px-20 mt-5 md:mt-10 xl:mt-0">
            <h1 className="text-xl xl:text-3xl font-semibold text-white mb-8">
                Overview
            </h1>
            <div className="space-y-6">
                {/* Profile Header */}
                <ProfileHeader user={user} />

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <CompanyList companies={companies} />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <ExperienceList experiences={experiences} />
                    </div>
                </div>
            </div>
        </div>
    );
}; 