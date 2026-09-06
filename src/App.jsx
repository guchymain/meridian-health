import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import ClinicianDashboard from './pages/clinician/ClinicianDashboard.jsx'
import ClinicianInbox from './pages/clinician/Inbox.jsx'
import ClinicianOrders from './pages/clinician/Orders.jsx'
import ClinicianPatients from './pages/clinician/Patients.jsx'
import Appointments from './pages/patient/Appointments.jsx'
import Billing from './pages/patient/Billing.jsx'
import Messages from './pages/patient/Messages.jsx'
import PatientDashboard from './pages/patient/PatientDashboard.jsx'
import Records from './pages/patient/Records.jsx'
import StaffDashboard from './pages/staff/StaffDashboard.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/patient" element={<PatientDashboard />} />
      <Route path="/patient/appointments" element={<Appointments />} />
      <Route path="/patient/messages" element={<Messages />} />
      <Route path="/patient/records" element={<Records />} />
      <Route path="/patient/billing" element={<Billing />} />
      <Route path="/patient/*" element={<Placeholder title="Patient" />} />

      <Route path="/clinician" element={<ClinicianDashboard />} />
      <Route path="/clinician/patients" element={<ClinicianPatients />} />
      <Route path="/clinician/inbox" element={<ClinicianInbox />} />
      <Route path="/clinician/orders" element={<ClinicianOrders />} />
      <Route path="/clinician/*" element={<Placeholder title="Clinician" />} />

      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/staff/*" element={<Placeholder title="Front desk" />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/*" element={<Placeholder title="Admin" />} />

      <Route path="*" element={<Placeholder title="Page not found" />} />
    </Routes>
  )
}
