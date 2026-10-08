import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import PendudukPage from './pages/PendudukPage.jsx'
import KkPage from './pages/KkPage.jsx'
import SimplePage from './pages/SimplePage.jsx'
import BansosPage from './pages/BansosPage.jsx'
import KasPage from './pages/KasPage.jsx'

export default function App() {
  const [scope, setScope] = useState('all')
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage scope={scope} setScope={setScope} />} />
        <Route path="/monitoring" element={<SimplePage title="Monitoring Wilayah" desc="Peta sebaran 5 RW / 18 RT Desa Sukamaju." icon="map" />} />
        <Route path="/penduduk" element={<PendudukPage />} />
        <Route path="/kk" element={<KkPage />} />
        <Route path="/mutasi" element={<SimplePage title="Mutasi & Peristiwa" desc="Buku induk kelahiran, kematian, pindah masuk & keluar." icon="swap_horiz" />} />
        <Route path="/persuratan" element={<SimplePage title="Antrean Persuratan" desc="24 berkas aktif: 14 verifikasi, 8 siap TTE, 2 revisi." icon="mark_email_unread" />} />
        <Route path="/bansos" element={<BansosPage />} />
        <Route path="/kas" element={<KasPage />} />
        <Route path="/role" element={<SimplePage title="Role, User & Scope" desc="Kelola peran operator, Kadus, RW/RT dan scope wilayah." icon="admin_panel_settings" />} />
        <Route path="/feature" element={<SimplePage title="Feature Toggle" desc="Aktif/nonaktif modul: Bansos, TTE, Sinkron Dukcapil." icon="toggle_on" />} />
        <Route path="/audit" element={<SimplePage title="Log Audit & Keamanan" desc="Jejak aktivitas operator dan keamanan data." icon="security" />} />
        <Route path="/pengaturan" element={<SimplePage title="Pengaturan Sistem" desc="Profil desa, kop surat, TTE, dan preferensi." icon="settings" />} />
      </Routes>
    </Layout>
  )
}
