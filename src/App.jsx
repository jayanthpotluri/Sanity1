//App.jsx is the main file that executes the web page
//import statement is used in app.jsx to import the content from those files

import{ Homepage, BlogContentPage } from "./pages"; 
import{Routes, Route} from 'react-router-dom'  //Routes is used to map the data with respective paths
import useFetch from './hooks/useFetch'


export default function App() {

  let {loading,data,error} = useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>loading....</p>
  if(error) return <p>Error!</p>

  //Routes is used to apply Route tags to create paths 
  //":" in /blog/:id is used to take id value and use it in the path
  //data?data:"" is used in the element to make sure JSON data is sent to Homepage if it is recognized else null("") is sent

  return (
    <div>
      <Routes>    
        <Route path='/' element={<Homepage blogs={data?data:""}/>}></Route>
        <Route path='/blog/:id' element={<BlogContentPage  blogs={data?data:""}/>}></Route> 
        
        
      </Routes>
      
    </div>
  )
}