import { useState } from 'react'

import './App.css'
import Header from './header'
import { courses } from './data'
import Course from './course'
import './css/course.css'

function App() {
  

  return (
    <>
  <Header/>
  <div className='course-main'>
    {courses?.map((course)=>
    (<Course key={course.id} course={course}/>))
}
</div>
</>
  )
}
export default App
