function Card({ accent, children }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
      <div className={`w-1.5 h-full absolute left-0 top-0 ${accent}`}></div>
      {children}
    </div>
  )
}
function Icon({ icon, cls }) {
  return (
    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cls}`}>
      <span className="material-symbols-outlined text-headline-sm">{icon}</span>
    </div>
  )
}
export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md mb-space-lg">
      <Card accent="bg-primary">
        <div className="flex items-start justify-between">
          <div><span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Total Kartu Keluarga</span>
          <div className="font-display-lg text-display-lg mt-1 font-tabular-data">1.428 <span className="font-body-sm text-body-sm text-on-surface-variant">KK</span></div></div>
          <Icon icon="cottage" cls="bg-surface-container-low text-primary" />
        </div>
        <div className="mt-space-md flex items-center justify-between">
          <span className="px-1.5 py-0.5 rounded-full bg-primary-fixed/60 text-on-primary-fixed-variant font-label-sm font-semibold">+3.2%</span>
          <span className="font-body-sm text-body-sm text-outline">vs 2024</span>
        </div>
      </Card>
      <Card accent="bg-tertiary">
        <div className="flex items-start justify-between">
          <div><span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Total Penduduk</span>
          <div className="font-display-lg text-display-lg mt-1 font-tabular-data">4.892 <span className="font-body-sm text-body-sm text-on-surface-variant">Jiwa</span></div></div>
          <Icon icon="groups" cls="bg-surface-container-low text-tertiary" />
        </div>
        <div className="mt-space-md flex items-center justify-between font-label-sm text-label-sm">
          <span className="text-tertiary font-semibold">2.476 L (50.6%)</span>
          <span className="text-on-surface-variant">2.416 P (49.4%)</span>
        </div>
      </Card>
      <Card accent="bg-secondary">
        <div className="flex items-start justify-between">
          <div><span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Kelompok Rentan</span>
          <div className="font-display-lg text-display-lg mt-1 font-tabular-data">384 <span className="font-body-sm text-body-sm text-on-surface-variant">Jiwa</span></div></div>
          <Icon icon="accessible" cls="bg-surface-container-low text-secondary" />
        </div>
        <div className="mt-space-md flex items-center gap-1 font-label-sm text-label-sm">
          <span className="px-1.5 py-0.5 rounded bg-surface-container font-semibold">89 Balita</span>
          <span className="px-1.5 py-0.5 rounded bg-surface-container font-semibold">215 Lansia</span>
          <span className="px-1.5 py-0.5 rounded bg-surface-container font-semibold">80 Difabel</span>
        </div>
      </Card>
      <Card accent="bg-primary-container">
        <div className="flex items-start justify-between">
          <div><span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Mutasi Bulan Ini</span>
          <div className="font-headline-lg text-headline-lg mt-1 font-tabular-data">+13 <span className="font-body-sm text-body-sm text-on-surface-variant">Net</span></div></div>
          <Icon icon="swap_horiz" cls="bg-surface-container-low text-primary-container" />
        </div>
        <div className="mt-space-md grid grid-cols-2 gap-1 font-label-sm text-label-sm font-semibold">
          <span className="text-primary">+8 Lahir</span><span className="text-error">-3 Wafat</span>
          <span className="text-tertiary">+14 Masuk</span><span className="text-secondary">-6 Pindah</span>
        </div>
      </Card>
      <Card accent="bg-error">
        <div className="flex items-start justify-between">
          <div><span className="font-label-sm text-label-sm text-error uppercase block font-bold">Verifikasi Ditunda</span>
          <div className="font-display-lg text-display-lg text-error mt-1 font-tabular-data">32 <span className="font-body-sm text-body-sm">Berkas</span></div></div>
          <Icon icon="warning" cls="bg-error-container/40 text-error" />
        </div>
        <div className="mt-space-md flex items-center justify-between">
          <span className="font-body-sm text-body-sm text-on-surface-variant">NIK anomali</span>
          <span className="px-2 py-1 rounded bg-error text-on-error font-label-sm font-semibold">Tindak Lanjuti</span>
        </div>
      </Card>
    </div>
  )
}
