import { useState } from 'react'
import AvailableDocuments from './components/AvailableDocuments/AvailableDocuments'
import SelectedDocuments from './components/SelectedDocuments/SelectedDocuments'

const DocumentSelector = () => {
    const [selectedDocs, setSelectedDocs] = useState<string[]>([])

    const handleSelectDoc = (doc: string) => {
        if (selectedDocs.includes(doc)) return

        setSelectedDocs([...selectedDocs, doc])
    }

    const handleDeleteDoc = (doc: string) => {
        const filteredDocs = selectedDocs.filter(item => item !== doc)
        setSelectedDocs(filteredDocs)
    }

    return (
        <div className='h-[100%] flex justify-center m-20 gap-3'>
            <AvailableDocuments handleSelectDoc={handleSelectDoc} />
            <SelectedDocuments selectedDocs={selectedDocs} handleDeleteDoc={handleDeleteDoc} />
        </div>
    )
}

export default DocumentSelector
