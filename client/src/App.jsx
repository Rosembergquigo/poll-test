import { BrowserRouter, Route, Routes } from "react-router-dom"

import RegisterPage  from "./pages/RegisterPage.jsx"
import PollPage from "./pages/PollPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"

import { AuthProvider } from "./context/authContext.jsx"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage /> }/>
          <Route path="/register" element={<RegisterPage /> }/>
          <Route path="/poll" element={< PollPage/> }/>
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
    
   
  )
}

export default App
