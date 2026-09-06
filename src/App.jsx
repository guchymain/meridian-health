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
import { patientNavItems } from './pages/patient/nav.jsx'
import { clinicianNavItems } from './pages/clinician/nav.jsx'
import { staffNavItems } from './pages/staff/nav.jsx'
import { adminNavItems } from './pages/admin/nav.jsx'

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
      <Route path="/patient/*" element={<Placeholder title="Patient" navItems={patientNavItems} roleLabel="Patient" userName="Jordan Ellis" dashboardPath="/patient" />} />

      <Route path="/clinician" element={<ClinicianDashboard />} />
      <Route path="/clinician/patients" element={<ClinicianPatients />} />
      <Route path="/clinician/inbox" element={<ClinicianInbox />} />
      <Route path="/clinician/orders" element={<ClinicianOrders />} />
      <Route path="/clinician/*" element={<Placeholder title="Clinician" navItems={clinicianNavItems} roleLabel="Clinician" userName="Dr. Maria Alvarez" dashboardPath="/clinician" />} />

      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/staff/*" element={<Placeholder title="Front desk" navItems={staffNavItems} roleLabel="Front desk" userName="Casey Morgan" dashboardPath="/staff" />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/*" element={<Placeholder title="Admin" navItems={adminNavItems} roleLabel="Admin" userName="Taylor Reed" dashboardPath="/admin" />} />

      <Route path="*" element={<Placeholder title="Page not found" />} />
    </Routes>
  )
}
