export default function Header() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40">
      <div className="h-16 w-full px-gutter-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md flex-1 max-w-xl">
          <div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low rounded-lg">
            <span className="material-symbols-outlined text-primary text-body-md">shield</span>
            <span className="font-label-md text-label-md text-on-surface">Kec. Cilodong</span>
            <span className="text-outline text-body-sm">/</span>
            <span className="font-label-md text-label-md text-primary font-semibold">Desa Sukamaju</span>
          </div>
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">search</span>
            <input className="w-full h-9 pl-9 pr-space-sm rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Cari NIK, No. KK, Nama Warga, atau Nomor Registrasi..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs">
            <button className="relative p-space-xs rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-headline-sm">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <button className="p-space-xs rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-headline-sm">sync</span>
            </button>
          </div>
          <div className="h-6 w-px bg-surface-container-high"></div>
          <div className="flex items-center gap-space-sm pl-space-xs">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">SR</div>
            <div className="flex flex-col leading-tight">
              <span className="font-label-lg text-label-lg text-on-surface truncate">Sri Rahayu, S.AP</span>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Sekretaris Desa / Super Admin</span>
              </div>
            </div>
            <button className="p-space-xs text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-body-md">keyboard_arrow_down</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
