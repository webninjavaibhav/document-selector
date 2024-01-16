import { EmptyScreenText } from 'constants/constants'
import { LeftLargeArrow } from 'assets/icons'

const EmptyScreen = () => {
    return (
        <div className='flex flex-col items-center bg-gray-100 w-full h-[100%] rounded-md mt-2 p-10'>
            <LeftLargeArrow />
            <p className='text-xs font-semibold text-gray-500 text-center font-inter mt-6'>{EmptyScreenText}</p>
        </div>
    )
}

export default EmptyScreen
