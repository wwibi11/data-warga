import { kasRows } from '../data/tables.js'
export default function KasPage() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md">
        <div>
          <h1 className="font-headline-lg text-headline-lg">Buku Kas & Iuran</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Saldo kas RT/RW: Rp 12.450.000</p>
        </div>
        <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg">+ Catat Transaksi</button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left font-tabular-data">
          <thead><tr className="bg-surface-container-low font-label-md uppercase text-on-surface-variant">
            <th className="py-2.5 px-3">Tanggal</th><th className="py-2.5 px-3">Uraian</th>
            <th className="py-2.5 px-3 text-right">Masuk</th><th className="py-2.5 px-3 text-right">Keluar</th><th className="py-2.5 px-3 text-right">Saldo</th><th className="py-2.5 px-3">Ket</th>
          </tr></thead>
          <tbody className="font-body-md text-body-md">
            {kasRows.map((r) => (
              <tr key={r.tgl + r.uraian} className="hover:bg-surface-container-low/50">
                <td className="py-2.5 px-3">{r.tgl}</td><td className="py-2.5 px-3 font-semibold">{r.uraian}</td>
                <td className="py-2.5 px-3 text-right text-primary font-semibold">{r.masuk}</td>
                <td className="py-2.5 px-3 text-right text-error font-semibold">{r.keluar}</td>
                <td className="py-2.5 px-3 text-right font-bold">{r.saldo}</td><td className="py-2.5 px-3">{r.ket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
