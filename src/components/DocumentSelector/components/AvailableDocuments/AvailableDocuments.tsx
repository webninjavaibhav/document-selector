import { Accordion, Search, Switch } from "common";
import { AvailableDocs, DocumentsCategories } from "constants/constants"
import FilterBySection from "./components/FilterBy/FilterBy"

type AvailableDocsProps = {
    handleSelectDoc(val: string): void;
}

const AvailableDocuments = ({ handleSelectDoc }: AvailableDocsProps) => {
    return (
        <div className="bg-[#FFF] w-[500px] min-h-5 rounded-md p-4">
            <p className="text-base font-medium font-inter text-gray-900">{AvailableDocs}</p>
            <Search placeholder="Search" extraClasses="mt-2" />
            <FilterBySection />
            <div className="flex items-center justify-between text-base font-inter text-gray-900 pt-5">
                <p className="text-sm text-gray-900 font-medium">53 Available Documents</p>
                <Switch label="Select All" />
            </div>
            <div className="border border-[#FF5A1F] rounded-md mt-[27px] overflow-hidden">
                {DocumentsCategories.map(document => (
                    <Accordion label={document.name} contents={document.documents} handleSelectDocument={handleSelectDoc} />
                ))}
            </div>
        </div>
    )
}

export default AvailableDocuments
