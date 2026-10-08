import { pendudukRows } from '../data/tables.js'
export default function PendudukPage() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md">
        <div>
          <h1 className="font-headline-lg text-headline-lg">Data Penduduk & NIK</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">4.892 jiwa • 32 berkas menunggu verifikasi</p>
        </div>
        <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg">+ Tambah Penduduk</button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left font-tabular-data">
          <thead><tr className="bg-surface-container-low font-label-md uppercase text-on-surface-variant">
            <th className="py-2.5 px-3">NIK</th><th className="py-2.5 px-3">Nama</th><th className="py-2.5 px-3">No. KK</th>
            <th className="py-2.5 px-3">TTL</th><th className="py-2.5 px-3">L/P</th><th className="py-2.5 px-3">Dusun</th><th className="py-2.5 px-3">Status</th>
          </tr></thead>
          <tbody className="font-body-md text-body-md">
            {pendudukRows.map((r) => (
              <tr key={r.nik} className="hover:bg-surface-container-low/50">
                <td className="py-2.5 px-3 font-semibold">{r.nik}</td><td className="py-2.5 px-3">{r.nama}</td>
                <td className="py-2.5 px-3">{r.kk}</td><td className="py-2.5 px-3">{r.ttl}</td>
                <td className="py-2.5 px-3">{r.jk}</td><td className="py-2.5 px-3">{r.dusun}</td>
                <td className="py-2.5 px-3"><span className={'px-2 py-0.5 rounded-full font-label-sm font-semibold ' + r.cls}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
