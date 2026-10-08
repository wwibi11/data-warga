import { kkRows } from '../data/tables.js'
export default function KkPage() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md">
        <div>
          <h1 className="font-headline-lg text-headline-lg">Kartu Keluarga</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">1.428 KK terdaftar di Desa Sukamaju</p>
        </div>
        <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg">+ KK Baru</button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left font-tabular-data">
          <thead><tr className="bg-surface-container-low font-label-md uppercase text-on-surface-variant">
            <th className="py-2.5 px-3">No. KK</th><th className="py-2.5 px-3">Kepala Keluarga</th>
            <th className="py-2.5 px-3 text-right">Anggota</th><th className="py-2.5 px-3">Dusun</th><th className="py-2.5 px-3">Status</th><th className="py-2.5 px-3">Terbit</th>
          </tr></thead>
          <tbody className="font-body-md text-body-md">
            {kkRows.map((r) => (
              <tr key={r.no} className="hover:bg-surface-container-low/50">
                <td className="py-2.5 px-3 font-semibold">{r.no}</td><td className="py-2.5 px-3">{r.kepala}</td>
                <td className="py-2.5 px-3 text-right">{r.anggota} jiwa</td><td className="py-2.5 px-3">{r.dusun}</td>
                <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full bg-primary-fixed/40 font-label-sm font-semibold">{r.status}</span></td>
                <td className="py-2.5 px-3">{r.tgl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
