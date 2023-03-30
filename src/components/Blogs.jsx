import React from 'react'
import{Link} from 'react-router-dom'

const Blogs = ({blogs}) => {

    // const blogs1=[
    //     {
    //         "id":1,
    //         'title':'Blog 1',
    //         'desc':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
    //         'coverimg':'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'
    //     },
    //     {
    //         "id":2,
    //         'title':'Blog 2',
    //         'desc':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
    //         'coverimg':'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'
    //     },
    //     {
    //         "id":3,
    //         'title':'Blog 3',
    //         'desc':"orem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea minus dolor vitae tempora sapiente doloremque, aliquid illo nostrum saepe sit, nulla voluptas, labore officia eius totam qui nobis odio.",
    //         'coverimg':'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'
    //     }
    // ]
    
  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black'>
                
            {blogs.data.map((blog)=>

            <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}/>
                    <div className='p-8'>
                        <h3 className='font-blod text-2x1 my-1'>{blog.attributes.blogTitle}</h3>
                        <p className='text-gray-600 text-x1'>{blog.attributes.blogDesc}</p>
                    </div>
                </div>
            </Link>
            )}




                {/* {blogs1.map((blog)=>

                    <Link key={blog.id} to={`/blog/${blog.id}`}>
                        <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                            <img className='h-56 w-full object-cover' src={blog.coverimg} alt="" />
                            <div className='p-8'>
                                <h3 className='font-blod text-2x1 my-1'>{blog.title}</h3>
                                <p className='text-gray-600 text-x1'>{blog.desc}</p>
                            </div>
                        </div>
                    </Link>
                )} */}
                

            </div>
        </div>
    </div>
  )
}

export default Blogs