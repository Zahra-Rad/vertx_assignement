import { CompanyCard } from './CompanyCard';

export const CompanyList = ({ companies }) => {
    return (
        <div className="bg-primary border-2 border-borderLight rounded-xl p-4 flex flex-col gap-4">
            <div className="flex flex-col items-start justify-between">
                <h2 className="text-[18px] text-white font-semibold">
                    Founded Companies
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-[64px] font-semibold text-white">
                        {String(companies?.length || 0).padStart(2, '0')}
                    </span>
                </div>
            </div>
            <div className="space-y-3 pb-3">
                {companies?.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                ))}
            </div>
        </div>
    );
}; 