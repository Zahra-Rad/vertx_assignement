import linkedin from '../../assets/linkedin.jpg';
import x from '../../assets/x.jpg';
import email from '../../assets/email.jpg';
import verified from '../../assets/verified.jpg';

export const ProfileHeader = ({ user }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="bg-primary border-2 border-borderLight rounded-xl p-4 xl:py-8 xl:px-16 flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-16">
                {/* Avatar */}
                <div className="w-[145px] h-[145px] md:w-24 md:h-24 overflow-hidden">
                    {user?.avatar && (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
                <div className="flex md:flex-col items-end md:items-start md:justify-around gap-4 md:gap-0 xl:gap-8 pb-2 md:pb-0">
                    {/* User Info */}
                    <div className="flex-1 md:flex-none">
                        <div className="flex items-center justify-between gap-2">
                            <h1 className="text-xl xl:text-2xl font-semibold text-secondary">
                                {user?.name}
                            </h1>
                            {user?.verified && (
                                <img src={verified} alt="Verified" className="w-5 h-5" />
                            )}
                        </div>
                        <div className="flex xl:flex-row xl:items-center text-secondary text-xs font-light">
                            <p className>
                                {user?.role}
                            </p>
                            {user?.company && (
                                <div className="flex items-center">
                                    <span className="mx-1 text-[9px]">@</span>
                                    <p>
                                        {user.company}
                                    </p>
                                    {user?.companyLogo && (
                                        <img src={user.companyLogo} alt={user.company} className="w-3 h-3 mx-1" />
                                    )}
                                </div>
                            )}
                        </div>
                        {user?.badge && (
                            <div>
                                <span className="px-2 py-1 text-[8px] bg-secondary text-primary rounded-sm">
                                    {user.badge}
                                </span>
                            </div>
                        )}
                    </div>
                    {/* Social Links */}
                    <div className="flex gap-3">
                        {user?.linkedin && (
                            <a
                                href={user.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <img src={linkedin} alt="LinkedIn" className="w-5 h-5 xl:w-8 xl:h-8" />
                            </a>
                        )}
                        {user?.twitter && (
                            <a
                                href={user.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <img src={x} alt="Twitter" className="w-5 h-5 xl:w-8 xl:h-8" />
                            </a>
                        )}
                        {user?.email && (
                            <a
                                href={`mailto:${user.email}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <img src={email} alt="Email" className="w-5 h-5 xl:w-8 xl:h-8" />
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div >
    );
}; 