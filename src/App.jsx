import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route, Routes } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'
import Spinner from './components/Spinner'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {

  const [progress, setProgress] = useState(0)
  const [category, setcategory] = useState("General")
  const [loading , setloading] = useState(false)


  const capitalise = (string) => {
    let newstr = string[0].toUpperCase() +
      string.slice(1)
    return newstr
  }
  return (
    <>
      <Navbar />
      <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="container" id='mainhead' style={{margin:"110px auto 0px auto"}}>
        <h1>Top Headlines - {capitalise(category)}</h1>
        <p id='date'>{new Date().toDateString()}</p>
        <hr />
      </div>
       {loading && <Spinner/>}
      <Routes>

       
        <Route path='/' element={<News setloading={setloading} category="Business" key="Business" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/entertainment' element={<News setloading={setloading} category="Arts/Movies" key="Arts/Movies" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/health' element={<News setloading={setloading} category="Health" key="Health" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/science' element={<News setloading={setloading} category="Science" key="Science" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/sports' element={<News setloading={setloading} category="Sports" key="Sports" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/technology' element={<News setloading={setloading} category="Computers" key="Computers" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/Politics' element={<News setloading={setloading} category="news/Politics" key="news/Politics" setProgress={setProgress} setcategory={setcategory} />} />
        <Route path='/about' element={<About setloading={setloading} category="About US" setcategory={setcategory}/>}/>

      </Routes>

      <Footer/>
    </>
  )
}


