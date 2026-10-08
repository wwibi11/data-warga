export default function SimplePage({ title, desc, icon }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center gap-space-sm">
        <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <h1 className="font-headline-lg text-headline-lg">{title}</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
        </div>
      </div>
      <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg font-body-md text-body-md">
        Modul {title} mengikuti desain SIMPEL Desa — tabel high-density, filter dusun, dan aksi verifikasi. Hubungkan ke API backend untuk data live.
      </div>
    </div>
  )
}
