import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Posts from './pages/Posts'
import Work from './pages/Work'
import WorkSingle from './pages/WorkSingle'
import PostSingle from './pages/PostSingle'
import NotFound from './pages/NotFound'

import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <main className="container">
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<WorkSingle />} />
            <Route path="posts/:slug" element={<PostSingle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
