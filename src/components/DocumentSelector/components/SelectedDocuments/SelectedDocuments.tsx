import { Search } from "common"
import { SelectedDocs } from "constants/constants"
import { useState } from "react"
import AllSelectedDocuments from "./components/AllSelectedDocuments/AllSelectedDocuments"
import EmptyScreen from "./components/EmptyScreen/EmptyScreen"

type SelectedDocumentsProps = {
  selectedDocs: string[];
  handleDeleteDoc(val: string): void;
}

const SelectedDocuments = ({ selectedDocs, handleDeleteDoc }: SelectedDocumentsProps) => {
  const [searchDocs, setSearchDocs] = useState<string[]>([])
  const [searchDocNotFound, setSearchDocNotFound] = useState<boolean>(false);

  const handleSearch = (name: string) => {
    if (name) {
      const filteredDocs = selectedDocs.filter(item => item.toLowerCase().includes(name.toLocaleLowerCase()))
      setSearchDocs(filteredDocs)
      if (!filteredDocs.length) {
        setSearchDocNotFound(true);
      }
    } else {
      setSearchDocs([])
      setSearchDocNotFound(false);
    }
  }

  return (
    <div className="flex flex-col bg-[#FFF] w-[500px] rounded-md p-4">
      <h3 className="text-base font-medium font-inter text-gray-900">{SelectedDocs}</h3>
      <Search placeholder="Search" extraClasses="mt-2" onSearch={handleSearch} />

      {!searchDocNotFound && selectedDocs?.length ?
        <AllSelectedDocuments selectedDocs={searchDocs.length ? searchDocs : selectedDocs} handleDeleteDoc={handleDeleteDoc} />
        : <EmptyScreen />
      }
    </div>
  )
}

export default SelectedDocuments
