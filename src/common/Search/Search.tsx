import { SearchIcon } from 'assets/icons'
import { twMerge } from 'tailwind-merge'

type SearchProps = {
    placeholder: string;
    extraClasses?: string;
    onSearch?(name: string): void
}

const Search = ({ placeholder, extraClasses, onSearch }: SearchProps) => {

    return (
        <div className={twMerge('flex gap-2 items-center w-[100%] h-[37px] rounded-md border px-3 border-gray-300', extraClasses)}>
            <SearchIcon />
            <input type="search" onChange={(e) => onSearch?.(e.target.value)} placeholder={placeholder} className="bg-transparent h-full w-full outline-none text-gray-900" />
        </div>
    )
}

export default Search
