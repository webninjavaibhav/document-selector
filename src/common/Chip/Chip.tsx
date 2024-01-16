import { Cross } from 'assets/icons';
import { twMerge } from 'tailwind-merge';

type ChipProps = {
    name: string;
    themeType?: string;
}

const theme = {
    blue: 'bg-[#E1EFFE] text-[#3F83F8]',
    purple: 'bg-[#EDEBFE] text-[#9061F9]',
    green: 'bg-[#DEF7EC] text-[#0E9F6E]'
} as never

const iconColor = {
    blue: '#3F83F8',
    purple: '#9061F9',
    green: '#0E9F6E'
} as never

const Chip = ({ themeType = "blue", name }: ChipProps) => {
    return (
        <div className={twMerge('flex items-center justify-between gap-1 px-4 py-1 h-max rounded-[6px]', theme[themeType])}>
            <p className='text-sm font-inter font-medium'>{name}</p>
            <Cross fill={iconColor[themeType]} />
        </div>
    )
}

export default Chip
