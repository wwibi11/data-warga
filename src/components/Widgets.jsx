import { jobs, antrean, timeline } from '../data/dashboard.js'
export function JobsCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <h3 className="font-headline-sm text-headline-sm mb-space-sm">Mata Pencaharian Utama</h3>
      <div className="space-y-space-sm">
        {jobs.map((j) => (
          <div key={j.label}>
            <div className="flex justify-between py-1 font-label-sm text-label-sm font-semibold"><span>{j.label}</span><span className="font-tabular-data">{j.val}</span></div>
            <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden"><div className={'h-full ' + j.cls} style={{ width: j.w }}></div></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export function EduCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <h3 className="font-headline-sm text-headline-sm">Tingkat Pendidikan Terakhir</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Usia 15+ • 3.392 wajib belajar</p>
      <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm">
        <span>SMA / SMK (38%)</span><span>SMP / MTs (28%)</span>
        <span>SD / MI (22%)</span><span>Diploma & S1/S2 (12%)</span>
      </div>
      <div className="mt-space-md text-center font-label-sm text-label-sm text-primary font-semibold bg-primary-fixed/20 py-1.5 rounded-lg">Melek Aksara Produktif: 99.4%</div>
    </div>
  )
}
export function QueueCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <h3 className="font-headline-sm text-headline-sm">Antrean Pelayanan Surat</h3>
        <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm font-bold">24 Aktif</span>
      </div>
      <div className="space-y-space-xs">
        {antrean.map((a) => (
          <div key={a.reg} className="p-space-sm rounded-lg bg-surface-container-low/60 flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <div className="flex items-center gap-1.5"><span className="font-label-sm text-outline font-tabular-data">{a.reg}</span><span className={'px-1.5 rounded font-label-sm font-semibold ' + a.chipCls}>{a.chip}</span></div>
              <div className="font-semibold text-sm truncate mt-0.5">{a.name}</div>
              <div className={'font-body-sm text-body-sm ' + (a.err ? 'text-error' : 'text-outline-variant')}>{a.meta}</div>
            </div>
            <button className={'px-2.5 py-1 rounded font-label-sm font-semibold flex-shrink-0 ' + a.btnCls}>{a.btn}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export function TimelineCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <h3 className="font-headline-sm text-headline-sm">Log Peristiwa Terkini</h3>
      <div className="space-y-space-md mt-space-sm">
        {timeline.map((t) => (
          <div key={t.title} className="flex gap-space-sm items-start">
            <div className={'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ' + t.bg}><span className="material-symbols-outlined text-body-lg">{t.icon}</span></div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between"><span className={'font-label-sm font-bold uppercase ' + t.tagCls}>{t.tag}</span><span className="font-body-sm text-body-sm text-outline-variant">{t.time}</span></div>
              <p className="font-body-md text-body-md mt-0.5">{t.pre} <strong>{t.title}</strong></p>
              <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">{t.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
