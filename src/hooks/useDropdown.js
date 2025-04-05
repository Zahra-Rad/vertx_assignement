import { useState, useRef, useEffect } from 'react';

export const useDropdown = (initialValue, options, onChange) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        options.find(opt => (opt.value || opt) === initialValue) || options[0]
    );
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange({ target: { value: option.value || option } });
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    return {
        isOpen,
        selectedOption,
        containerRef,
        handleSelect,
        toggleDropdown
    };
}; 