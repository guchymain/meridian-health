import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import PatientDashboard from './pages/patient/PatientDashboard.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/patient" element={<PatientDashboard />} />
      <Route path="/patient/*" element={<Placeholder title="Patient" />} />

      <Route path="/clinician/*" element={<Placeholder title="Clinician" />} />
      <Route path="/staff/*" element={<Placeholder title="Front desk" />} />
      <Route path="/admin/*" element={<Placeholder title="Admin" />} />

      <Route path="*" element={<Placeholder title="Page not found" />} />
    </Routes>
  )
}
