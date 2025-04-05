export const CompanyCard = ({ company }) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full">
                {/* Company Logo */}
                <div className="w-[35px] rounded-sm bg-secondary overflow-hidden">
                    {company?.logo && (
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Company Info */}
                <div className="w-full">
                    <div className="w-full flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-52">
                            <h3 className="text-white text-[14px] font-semibold">{company?.name}</h3>
                            {company?.title && (
                                <span className={`px-1 text-[8px] ${company?.active ? 'bg-[#579560] text-[#04470B]' : 'bg-[#B1BDEB] text-[#10074F]'} rounded-sm`}>
                                    {company?.title}
                                </span>
                            )}
                            {/* {company?.acquired && (
                            <span className="px-1 text-[8px] bg-purple-900 text-purple-400 rounded-full">
                                Acquired
                            </span>
                        )} */}

                        </div>
                        {/* View Profile Button */}
                        <button className="text-[8px] text-white whitespace-nowrap">
                            View Profile
                        </button>
                    </div>
                    <div className=" w-52 flex flex-wrap items-center mt-1 text-[10px] text-secondary">
                        <span>Founded in {company?.foundedYear}.</span>
                        {company?.description && (
                            <p className="ml-1 text-[10px]">
                                {company.description}
                            </p>
                        )}
                        {company?.industry && (
                            <>
                                <span className="ml-1">in</span>
                                <span className="font-bold">{company.industry}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}; 