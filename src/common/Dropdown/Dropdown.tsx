import { Chevron } from 'assets/icons';
import { useState } from 'react'
import { twMerge } from "tailwind-merge"

type OptionType = { label: string, value: string }

type DropdownProps = {
    placeholder?: string;
    id?: string;
    optionsList: OptionType[];
    selectedValue: OptionType | null;
    dropdownContainerStyle?: string;
    handleChange?(): void;
}

const Dropdown = ({ placeholder, selectedValue, dropdownContainerStyle, handleChange, id, optionsList }: DropdownProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={twMerge(dropdownContainerStyle)}>
            <div className='flex items-center h-[37px] justify-between p-2 border border-gray-300 rounded-md' onClick={() => setOpen(!open)}>
                <p className='text-sm font-inter text-gray-900'>{selectedValue?.label ? selectedValue?.label : placeholder}</p>
                <div>
                    <Chevron />
                </div>
            </div>
            {open && (
                <ul id={id} className="w-full bg-transparent text-gray-900">
                    {open && optionsList?.map((option) => (
                        <li className="text-gray-900" onClick={handleChange}>{option.label}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown
