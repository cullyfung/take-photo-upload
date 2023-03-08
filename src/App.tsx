import { useRef } from 'react'

function App() {
  function handleUploadClick() {
    console.log(111)
  }

  return (
    <div className="bg-gray-300 relative">
      <button
        onClick={handleUploadClick}
        className="text-gray-200 bg-blue-300 px-2 py-1 text-sm rounded-lg"
      >
        upload
      </button>
    </div>
  )
}

export default App
