export const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                {/* Company Logo */}
                <div className="w-[35px] rounded-sm bg-secondary overflow-hidden">
                    {experience?.companyLogo && (
                        <img 
                            src={experience.companyLogo} 
                            alt={experience.companyName} 
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Experience Info */}
                <div>
                    <h3 className="text-white text-[14px] font-semibold">
                        {experience?.companyName}
                    </h3>
                    {/* <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                        <span>{experience?.role}</span>
                        {experience?.location && (
                            <>
                                <span className="text-gray-600">•</span>
                                <span>{experience.location}</span>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <span>{experience?.startDate}</span>
                        <span>-</span>
                        <span>{experience?.endDate || 'Present'}</span>
                        {experience?.duration && (
                            <>
                                <span className="text-gray-600">•</span>
                                <span>{experience.duration}</span>
                            </>
                        )}
                    </div> */}
                </div>
            </div>

            {/* View Profile Button */}
            <button className="px-4 py-2 text-[8px] text-white whitespace-nowrap">
                View Profile
            </button>
        </div>
    );
}; 