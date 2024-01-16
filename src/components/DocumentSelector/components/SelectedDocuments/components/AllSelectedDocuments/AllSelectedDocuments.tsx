import { Check, Cross } from 'assets/icons';

type AllSelectedDocumentsProps = {
    selectedDocs: string[];
    handleDeleteDoc(val: string): void;
}

const AllSelectedDocuments = ({ selectedDocs, handleDeleteDoc }: AllSelectedDocumentsProps) => {
    return (
        <div className='flex flex-col gap-8 border border-[#0E9F6E] rounded-md mt-[27px] p-4 overflow-hidden'>
            {selectedDocs?.map((item: string) => (
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Check />
                        <p className='text-sm font-inter font-medium text-gray-900'>{item}</p>
                    </div>
                    <div onClick={() => handleDeleteDoc(item)} className='border border-gray-200 rounded-sm p-0.5'>
                        <Cross />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllSelectedDocuments
