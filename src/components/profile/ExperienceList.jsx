import { ExperienceCard } from './ExperienceCard';

export const ExperienceList = ({ experiences }) => {
    return (
        <div className="bg-primary border-2 border-borderLight rounded-xl p-4 flex flex-col gap-4">
            <div className="flex flex-col items-start justify-between">
                <h2 className="text-[18px] text-white font-semibold">
                    Experience
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-[64px] font-semibold text-white">
                        {String(experiences?.length || 0).padStart(2, '0')}
                    </span>
                </div>
            </div>
            <div className="space-y-3">
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </div>
    );
}; 