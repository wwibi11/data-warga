import { bansosRows } from '../data/tables.js'
export default function BansosPage() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md">
        <div>
          <h1 className="font-headline-lg text-headline-lg">Bantuan Sosial (Bansos)</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">370 KPM • PKH, BPNT, BLT-DD, PBI-JK</p>
        </div>
        <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg">+ Usulan KPM</button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left font-tabular-data">
          <thead><tr className="bg-surface-container-low font-label-md uppercase text-on-surface-variant">
            <th className="py-2.5 px-3">Nama</th><th className="py-2.5 px-3">NIK</th>
            <th className="py-2.5 px-3">Program</th><th className="py-2.5 px-3">Periode</th><th className="py-2.5 px-3 text-right">Nominal</th><th className="py-2.5 px-3">Status</th>
          </tr></thead>
          <tbody className="font-body-md text-body-md">
            {bansosRows.map((r) => (
              <tr key={r.nik} className="hover:bg-surface-container-low/50">
                <td className="py-2.5 px-3 font-semibold">{r.nama}</td><td className="py-2.5 px-3">{r.nik}</td>
                <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container font-label-sm font-semibold">{r.program}</span></td>
                <td className="py-2.5 px-3">{r.periode}</td><td className="py-2.5 px-3 text-right font-semibold">{r.nominal}</td>
                <td className="py-2.5 px-3">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
