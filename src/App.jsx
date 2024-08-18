
import './App.css'
import Header from './components/common/header/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Team from './components/team/Team'
import Pricing from './components/pricing/Price'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' exact Component={About} />
          <Route path='/courses' exact Component={CourseHome} />
          <Route path='/team' exact Component={Team} />
          <Route path='/price' exact Component={Pricing} />
          <Route path='/blog' exact Component={Blog} />
          <Route path='/contact' exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>

    </>

  )

}


export default App
