import { useState } from 'react'
import './App.css'
import { BlogList } from './components/blog/BlogList'
import { BlogDetail } from './components/blog/BlogDetail'
import { CreateBlogForm } from './components/blog/CreateBlogForm'

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <>
        <div className="flex h-screen p-6 m-auto">
          <div className="w-1/4 p-9 border-r overflow-y-scroll m-9 ">
            <CreateBlogForm /> <hr className="m-4px" />
            <BlogList onSelect={setSelectedBlogId} selectedId={null} />
          </div>
          <div className="w-3/4 overflow-y-scroll ">
            <BlogDetail blogId={selectedBlogId} />
          </div>
        </div>
  </>

  )
}

export default App
