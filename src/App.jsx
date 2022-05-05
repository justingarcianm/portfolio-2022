import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Posts from './pages/Posts'
import Work from './pages/Work'
import WorkSingle from './pages/WorkSingle'
import PostSingle from './pages/PostSingle'
import NotFound from './pages/NotFound'

import Nav from "./components/Nav"
import Footer from './components/Footer'

const App = () => {
    return <BrowserRouter>
       <Nav/>
        <main className='container spacing-top'>
        <Routes>
        <Route index element={<Homepage/>} />
        <Route path='about' element={<About/>} />
        <Route path='posts' element={<Posts/>} />
        <Route path='work' element={<Work/>} />
        <Route path='work/:slug' element={<WorkSingle/>} />
        <Route path='posts/:slug' element={<PostSingle/>} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer/>
        </BrowserRouter>
}

export default App