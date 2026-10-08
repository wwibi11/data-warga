import Hero from '../components/Hero.jsx'
import KpiCards from '../components/KpiCards.jsx'
import AgeChart from '../components/AgeChart.jsx'
import RegionTable from '../components/RegionTable.jsx'
import { JobsCard, EduCard, QueueCard, TimelineCard } from '../components/Widgets.jsx'

export default function DashboardPage({ scope, setScope }) {
  return (
    <div className="flex flex-col w-full">
      <Hero scope={scope} setScope={setScope} />
      <KpiCards />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">
        <div className="xl:col-span-8 flex flex-col gap-space-lg">
          <AgeChart />
          <RegionTable scope={scope} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <JobsCard />
            <EduCard />
          </div>
        </div>
        <div className="xl:col-span-4 flex flex-col gap-space-lg">
          <QueueCard />
          <TimelineCard />
          <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
            <h4 className="font-headline-sm text-headline-sm font-semibold">Bantuan Teknis Operator Desa</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Hotline: (021) 879-1120 • 08.00 - 15.30 WIB</p>
          </div>
        </div>
      </div>
    </div>
  )
}
