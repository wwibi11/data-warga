export default function Hero({ scope, setScope }) {
  return (
    <div className="relative bg-surface-container-low rounded-xl p-space-lg shadow-sm mb-space-lg overflow-hidden">
      <div className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute right-48 -bottom-20 w-72 h-72 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none"></div>
      <div className="relative flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-md">
          <div className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md flex-shrink-0">
            <span className="material-symbols-outlined text-display-lg">analytics</span>
          </div>
          <div>
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider">Konsolidasi Data Terpadu</span>
              <span className="text-outline-variant font-label-sm text-label-sm">•</span>
              <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Sinkronisasi Dukcapil: Hari ini, 08:30 WIB
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-0.5">Analitik & Statistik Kependudukan Desa Sukamaju</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Tahun Anggaran Berjalan 2025 • Buku Induk Kependudukan & Dashboard Perangkat Desa</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm w-full xl:w-auto">
          <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary text-body-lg">tune</span>
            <select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer" value={scope} onChange={(e) => setScope(e.target.value)}>
              <option value="all">Semua Wilayah (Dusun I, II, III)</option>
              <option value="dusun1">Dusun I - Krajan (RW 01, 02)</option>
              <option value="dusun2">Dusun II - Sukatani (RW 03, 04)</option>
              <option value="dusun3">Dusun III - Wanasari (RW 05)</option>
            </select>
          </div>
          <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-outline text-body-lg">calendar_today</span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">T.A. 2025 (YTD)</span>
          </div>
          <div className="flex items-center gap-space-xs ml-auto xl:ml-0">
            <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors shadow-sm">
              <span className="material-symbols-outlined text-body-lg">download</span><span>Unduh Rekap</span>
            </button>
            <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary/90 transition-all shadow-md">
              <span className="material-symbols-outlined text-body-lg">person_add</span><span>+ Warga / KK Baru</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
