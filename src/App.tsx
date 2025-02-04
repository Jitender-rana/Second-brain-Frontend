import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Dashboard } from './pages/dashbaord'
import { Home } from './pages/homepage'
import { Signin } from './pages/signin'
import { ShareBrain } from './pages/shareBrain'
import { AboutUs } from './pages/about'

function App() {
 return <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share/:hash" element={<ShareBrain />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    
    </BrowserRouter>
    
  
 </div>
        
   
  
}

export default App
