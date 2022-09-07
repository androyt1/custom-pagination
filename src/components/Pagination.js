import React from 'react'

const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage}) => {
    let pages=[]
    for(let i=1; i <=Math.ceil(totalPosts/postPerPage);++i){
        pages.push(i)
    }
  return (  
    <div className='w-full flex justify-center  overflow-x-auto py-5 mt-6'>
        {
            pages?.map((page,index)=>(<button onClick={()=>setCurrentPage(page)} className={`p-1 md:p-2 border-2 border-slate-200 mx-[2px] md:mx-1 text-xs ${page===currentPage ?'bg-black text-white':''}`} key={index}>{page}</button>))
        }
    </div>
  )
}

export default Pagination