import React from 'react';
import { useParams } from 'react-router-dom';

const BlogContent = ({blogs}) => {


  const {id}=useParams()

  let blog={}
  if(blog)
  {
    let arr = blogs.data.filter(blog=> blog.id == id)
    blog=arr[0]
  }
  else{
    blog={}
  }
  console.log("blog object");
  console.log(blog)

// const blogs=[{
//   "id":1,
//   'title':'Blog 1',
//   'desc':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
//   'content':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
//   'coverimg':'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'
// },
// {
//   "id":2,
//   'title':'Blog 2',
//   'desc':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
//   'content':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
//   'coverimg':'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'
// },
// {
//   "id":3,
//   'title':'Blog 3',
//   'desc':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
//   'content':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
//   'coverimg':'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'
// }]

// let blog = blogs.filter(blog=> blog.id == id)
// blog = blog[0]

  return (


     <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

            <div className='col-span-2 '>
              <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}  />
              <h1 className='font-bold text-2x1 my-1 pt-5'>{blog.attributes.blogTitle}</h1>
              <div className='pt-5'>
                <p>{blog.attributes.blogContent}</p>
              </div>
            </div>

            <div className='items-center w-full bg-white rounded-x1 overflow-hidden drop-shadow-md py-5 max-h-[250px]'>

            </div>

          </div>
        </div>
    </div>


   
    // <div className='w-full pb-10 bg-[#f9f9f9]'>
    //     <div className='max-w-[1240px] mx-auto'>
    //       <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

    //         <div className='col-span-2 '>
    //           <img className='h-56 w-full object-cover' src={blog.coverimg}  />
    //           <h1 className='font-bold text-2x1 my-1 pt-5'>{blog.title}</h1>
    //           <div className='pt-5'>
    //             <p>{blog.content}</p>
    //           </div>
    //         </div>

    //         <div className='items-center w-full bg-white rounded-x1 overflow-hidden drop-shadow-md py-5 max-h-[250px]'>

    //         </div>

    //       </div>
    //     </div>
    // </div>
  )
}

export default BlogContent