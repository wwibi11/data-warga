import { NavLink } from 'react-router-dom'
import { navGroups } from '../data/nav.js'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-inverse-surface text-inverse-on-surface z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-space-lg flex items-center gap-space-sm bg-inverse-surface">
        <div className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-lg">S</div>
        <div className="flex flex-col min-w-0 leading-none">
          <span className="font-headline-sm text-headline-sm tracking-tight truncate">SIMPEL DESA</span>
          <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-wider truncate">Pemerintah Desa Sukamaju</span>
        </div>
      </div>
      <div className="px-space-md py-space-xs bg-inverse-surface">
        <div className="bg-surface-container-low/10 rounded-lg p-space-sm flex items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs min-w-0">
            <span className="material-symbols-outlined text-primary-fixed text-headline-sm">location_city</span>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase">Wilayah Aktif</span>
              <span className="font-label-md text-label-md truncate">Semua Dusun (I, II, III)</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline-variant text-body-sm">expand_more</span>
        </div>
      </div>
      <nav className="flex-1 px-space-sm py-space-sm overflow-y-auto space-y-space-md">
        {navGroups.map((g) => (
          <div key={g.title} className="space-y-space-xs">
            <div className="px-space-sm py-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline-variant">{g.title}</div>
            {g.items.map((it) => (
              <NavLink
                key={it.path}
                to={it.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-space-sm py-space-xs rounded transition-colors ${isActive ? 'bg-primary text-on-primary font-semibold' : 'text-outline-variant hover:bg-surface-container-high/15 hover:text-inverse-on-surface'}`
                }
              >
                <div className="flex items-center gap-space-sm min-w-0">
                  <span className="material-symbols-outlined text-body-lg">{it.icon}</span>
                  <span className="font-label-lg text-label-lg truncate">{it.label}</span>
                </div>
                {it.badge && (
                  <span className={`px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-bold ${it.path === '/penduduk' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>{it.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
      <div className="p-space-sm bg-surface-container-low/5">
        <div className="flex items-center justify-between text-outline-variant px-space-sm py-space-xs">
          <span className="font-label-sm text-label-sm">SIMPEL DESA v4.2</span>
          <span className="material-symbols-outlined text-body-sm hover:text-inverse-on-surface cursor-pointer">help_outline</span>
        </div>
      </div>
    </aside>
  )
}
