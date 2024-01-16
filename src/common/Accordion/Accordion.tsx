import { Chevron, ChevronUp, RightArrow } from 'assets/icons';
import { useState } from 'react'

type AccordionProps = {
    label: string;
    contents: string[];
    handleSelectDocument(val: string): void;
}

const Accordion = ({ contents, label, handleSelectDocument }: AccordionProps) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <div onClick={() => setIsActive(!isActive)} className="bg-gray-50 border border-gray-200 p-5 flex items-center justify-between">
                <div className='text-base font-medium text-gray-600'>{label}</div>
                {isActive ? <ChevronUp /> : <Chevron />}
            </div>
            {isActive &&
                <div className='bg-[#FFF]'>
                    {contents?.map(item => (
                        <div className='flex items-center justify-between text-sm font-medium text-gray-900 p-5' onClick={() => handleSelectDocument(item)}>
                            {item}
                            <div className='border border-gray-200 rounded-sm p-0.5'>
                                <RightArrow />
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Accordion
