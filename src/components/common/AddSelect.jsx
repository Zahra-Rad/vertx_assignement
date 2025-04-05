import { useDropdown } from '../../hooks/useDropdown';

export const AddSelect = ({ value, onChange, options }) => {
    const {
        isOpen,
        selectedOption,
        containerRef,
        handleSelect,
        toggleDropdown
    } = useDropdown(value, options, onChange);

    const getContainerClasses = () => `bg-primary transition-all ${
        isOpen
            ? 'border-2 border-borderLight border-b-0 rounded-t-xl w-[100px] xl:w-[150px]'
            : `border-2 border-borderLight rounded-full ${!selectedOption ? 'w-[55px] xl:w-[90px] border-dashed' : 'w-[100px] xl:w-[150px]'}`
    }`;

    const getButtonClasses = () => `w-full px-1 xl:px-2 xl:px-4 py-1 xl:py-2 text-left text-xs xl:text-base text-white flex items-center justify-between ${
        isOpen
            ? 'before:content-[\'\'] before:w-[80px] xl:before:w-[130px] before:absolute before:left-1/2 before:-translate-x-1/2 before:inset-0 before:border-b before:border-borderLight before:rounded-full before:rounded-b-none'
            : ''
    }`;

    const renderButtonContent = () => (
        !selectedOption ? (
            <span className="flex items-center">
                <span className="mr-2">+</span>
                Add
            </span>
        ) : (
            <span className="flex items-center">
                {selectedOption.label || selectedOption}
            </span>
        )
    );

    return (
        <div ref={containerRef} className="relative">
            <div className={getContainerClasses()}>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className={getButtonClasses()}
                    >
                        {renderButtonContent()}
                        {selectedOption && (
                            <span className={`border-[5px] border-transparent border-t-white mt-[3px] transition-transform ${isOpen ? 'rotate-180 -mt-1' : ''}`} />
                        )}
                    </button>
                </div>
            </div>
            
            <div className={`absolute w-[100px] xl:w-[150px] bg-primary border-2 border-borderLight border-t-0 z-10 rounded-b-xl ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {options.map((option) => (
                    <button
                        key={option.value || option}
                        onClick={() => handleSelect(option)}
                        className={`w-full text-sm px-2 xl:px-4 py-2 text-left hover:bg-[#222] transition-colors ${
                            (option.value || option) === (selectedOption?.value || selectedOption)
                                ? 'text-white bg-borderLight border-2 border-primary'
                                : 'text-primaryDeactive'
                        }`}
                    >
                        {option.label || option}
                    </button>
                ))}
            </div>
        </div>
    );
}; 