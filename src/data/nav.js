export const navGroups = [
  {
    title: 'Utama',
    items: [
      { label: 'Dashboard & Analitik', icon: 'analytics', path: '/' },
      { label: 'Monitoring Wilayah', icon: 'map', path: '/monitoring' },
    ],
  },
  {
    title: 'Kependudukan',
    items: [
      { label: 'Data Penduduk & NIK', icon: 'badge', path: '/penduduk', badge: '32' },
      { label: 'Kartu Keluarga', icon: 'groups', path: '/kk' },
      { label: 'Mutasi & Peristiwa', icon: 'swap_horiz', path: '/mutasi' },
    ],
  },
  {
    title: 'Layanan & Pelayanan',
    items: [
      { label: 'Antrean Persuratan', icon: 'mark_email_unread', path: '/persuratan', badge: '14' },
      { label: 'Bantuan Sosial (Bansos)', icon: 'volunteer_activism', path: '/bansos' },
      { label: 'Buku Kas & Iuran', icon: 'payments', path: '/kas' },
    ],
  },
  {
    title: 'Sistem & Keamanan',
    items: [
      { label: 'Role, User & Scope', icon: 'admin_panel_settings', path: '/role' },
      { label: 'Feature Toggle', icon: 'toggle_on', path: '/feature' },
      { label: 'Log Audit & Keamanan', icon: 'security', path: '/audit' },
      { label: 'Pengaturan Sistem', icon: 'settings', path: '/pengaturan' },
    ],
  },
]
