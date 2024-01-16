import { Chip, Dropdown } from 'common'
import { FilterBy } from 'constants/constants'

const FilterBySection = () => {
    return (
        <div className='w-full pt-3'>
            <p className="text-sm font-medium font-inter text-gray-900">{FilterBy}</p>
            <div className='w-full pt-3'>
                <div className='flex gap-3'>
                    <Dropdown
                        placeholder="Job Templates"
                        optionsList={[]}
                        selectedValue={null}
                        dropdownContainerStyle={'flex-1'}
                    />
                    <Dropdown placeholder="Locations" optionsList={[]} selectedValue={null} dropdownContainerStyle={'flex-1'} />
                </div>
                <div className='flex gap-3 pt-3'>
                    <Dropdown placeholder="Subsidiary" optionsList={[]} selectedValue={null} dropdownContainerStyle={'flex-1'} />
                    <Dropdown placeholder="Seniority" optionsList={[]} selectedValue={null} dropdownContainerStyle={'flex-1'} />
                </div>
            </div>
            <div className='flex flex-wrap gap-2 border border-gray-200 rounded-md p-2 mt-4'>
                <Chip name="New York, NY" />
                <Chip name="Cobb, CA" themeType="purple" />
                <Chip name="Electricians" themeType="purple" />
                <Chip name="Manager" themeType="green" />
            </div>
        </div>
    )
}

export default FilterBySection
