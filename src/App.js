import React,{useEffect,useState} from 'react'
import { Services } from './services/api'
import Pagination from './components/Pagination'
const App = () => {

  const[posts,setPosts]=useState([])
  const[loading,setLoading]=useState(false)
  const[currentPage,setCurrentPage]=useState(1)
  const[postPerPage]=useState(8)
  const lastPost=currentPage * postPerPage
  const firstPost=lastPost - postPerPage
  const currentPost=posts.slice(firstPost,lastPost)

  const loadPosts=async()=>{ 
    try { 
      setLoading(true)
      const response=await Services.getPosts()
      setLoading(false)
      setPosts(response.data)
    } catch (error) {
      setLoading(false)
      console.log(error.response.data)
    }
  }

  useEffect(()=>{
    loadPosts()
  },[])

 if(loading){
  return <div className='w-full px-3'><h5 className='text-xl font-semibold flex justify-center'>Fetching Post...</h5></div>
 }

  return  (
    <div className='w-full min-h-[100vh] px-3 md:px-14 py-5 relative'>
      <div className='w-full py-3 flex justify-center'><h1 className='text-2xl font-bold uppercase'>Custom Pagination</h1></div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 place-items-center'>
          {
            currentPost?.map(post=>(
              <div key={post?.id} className='shadow-md shadow-slate-300 py-5 px-3 min-h-[25vh]'>
                <p className='text-sm font-semibold uppercase'>{post?.title}</p>
                <p className='text-sm  mt-3'>{post?.body.substr(0,60)} ...</p>
              </div>
            ))
          } 
        </div>
        <Pagination totalPosts={posts.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default App