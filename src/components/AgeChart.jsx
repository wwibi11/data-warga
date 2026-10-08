import { cohorts } from '../data/dashboard.js'
export default function AgeChart() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <h2 className="font-headline-md text-headline-md">Struktur Kelompok Usia Penduduk Desa</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Bonus Demografi: 70.8% • Rasio Ketergantungan 41.2%</p>
      <div className="space-y-space-md pt-space-md">
        {cohorts.map((c) => (
          <div key={c.label} className="space-y-1">
            <div className="flex items-center justify-between font-label-md text-label-md">
              <span className="font-semibold flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-body-md">{c.icon}</span>{c.label}</span>
              <span className="font-tabular-data"><strong>{c.total}</strong> <span className="text-outline-variant">{c.pct}</span></span>
            </div>
            <div className="h-5 w-full bg-surface-container-low rounded-lg overflow-hidden flex">
              <div className={'h-full bg-tertiary' + c.op + ' flex items-center justify-end pr-2 text-on-tertiary font-label-sm font-semibold'} style={{ width: c.lW }}>{c.l}</div>
              <div className={'h-full bg-primary-fixed-dim' + c.op + ' flex items-center justify-end pr-2 font-label-sm font-semibold'} style={{ width: c.pW }}>{c.p}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
