import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutCity from './components/AboutCity'
import VisionMission from './components/VisionMission'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import Initiatives from './components/Initiatives'
import Departments from './components/Departments'
import SuccessStories from './components/SuccessStories'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Community from './components/Community'
import CallToAction from './components/CallToAction'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'

// Protected Route Wrapper
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user, loading } = useAuth()

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" />
  }

  return children
}

function LandingPage() {
  return (
    <div className="bg-surface-50 min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutCity />
        <VisionMission />
        <Services />
        <HowItWorks />
        <Impact />
        <Initiatives />
        <Departments />
        <SuccessStories />
        <WhyChooseUs />
        <Testimonials />
        <Community />
        <CallToAction />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
