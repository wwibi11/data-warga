import { dusunRows } from '../data/dashboard.js'
export default function RegionTable({ scope }) {
  const rows = scope === 'all' ? dusunRows : dusunRows.filter((r) => r.tag === scope)
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <h2 className="font-headline-md text-headline-md">Distribusi Penduduk Berdasarkan Dusun & RW</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">5 RW / 18 RT • Kelengkapan berkas per wilayah</p>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left font-tabular-data">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md uppercase">
              <th className="py-2.5 px-3">Wilayah</th><th className="py-2.5 px-3 text-right">KK</th>
              <th className="py-2.5 px-3 text-right">Jiwa</th><th className="py-2.5 px-3 text-right">KPM</th><th className="py-2.5 px-3">Kelengkapan</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md">
            {rows.map((r) => (
              <tr key={r.rw} className="hover:bg-surface-container-low/50">
                <td className="py-2.5 px-3"><div className="font-semibold">{r.dusun}</div><span className="font-label-sm text-label-sm text-outline">{r.rw}</span></td>
                <td className="py-2.5 px-3 text-right font-semibold">{r.kk}</td>
                <td className="py-2.5 px-3 text-right font-bold text-primary">{r.jiwa}</td>
                <td className="py-2.5 px-3 text-right"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm font-semibold">{r.kpm}</span></td>
                <td className="py-2.5 px-3"><div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-surface-container-high rounded-full overflow-hidden"><div className={'h-full ' + (r.low ? 'bg-error' : 'bg-primary')} style={{ width: r.bar }}></div></div>
                  <span className={'font-label-sm font-bold ' + (r.low ? 'text-error' : 'text-primary')}>{r.pct}</span>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
