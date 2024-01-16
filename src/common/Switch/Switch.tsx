type SwitchProps = {
    toggle?: boolean;
    label: string;
    handleToggle?(): void;
}

const Switch = ({ label, handleToggle, toggle }: SwitchProps) => {
    const toggleClass = ' transform translate-x-6';

    return (
        <div className="flex items-center gap-2">
            <div
                className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-0.5 cursor-pointer"
                onClick={handleToggle}>
                <div className={"bg-white h-5 w-5 rounded-full transform duration-300 ease-in-out" + (toggle ? null : toggleClass)}> </div>
            </div>
            <p className="text-base font-inter text-gray-900">{label}</p>
        </div>
    );
}

export default Switch
