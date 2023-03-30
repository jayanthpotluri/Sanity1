import React from 'react';
import { Navbar, Blogs } from "../components"  //Navbar and Blogs components are imported

//blogs here is the API Id of sanity - props


const Homepage = ({blogs}) => {
  return (
    <div>
        <Navbar />
        <Blogs blogs={blogs?blogs:""}/>
    </div>
  )
}

export default Homepage