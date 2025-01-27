import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Dashboard } from './pages/dashboard'
import { Home } from './pages/homepage'
import { Signin } from './pages/signin'

function App() {
 return <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/signin' element={<Signin/>}/>
    </Routes>
    
    </BrowserRouter>
    
  
 </div>
        
   
  
}

export default App
