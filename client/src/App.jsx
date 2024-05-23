import { BrowserRouter, Route, Routes } from "react-router-dom"

import RegisterPage  from "./pages/RegisterPage.jsx"
import PollPage from "./pages/PollPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import AdminPage from "./pages/AdminPages.jsx"
import ProtectedRoute from "./pages/ProtectedRoute.jsx"

import { AuthProvider } from "./context/authContext.jsx"



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage /> }/>
          <Route path="/register" element={<RegisterPage /> }/>
          <Route element={<ProtectedRoute />}>
            <Route path="/poll" element={< PollPage /> }/>
            <Route path="/admin" element={< AdminPage /> }/>
          </Route>
          
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
    
   
  )
}

export default App
