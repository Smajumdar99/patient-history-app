import { useState } from 'react';
import {
  LayoutDashboard,
  Search,
  Bell,
  HelpCircle,
  Mail,
  Users,
  Building2,
  ClipboardList,
  ListOrdered,
  Calendar,
  CreditCard,
  FileText,
  BarChart3,
  Inbox,
  Settings,
  ChevronLeft,
  ChevronRight,
  PieChart,
  DollarSign,
  History,
  TrendingUp,
  PenSquare,
  FlaskConical,
  FileSignature,
  GraduationCap,
  AlertCircle,
  CheckCircle,
  UsersRound,
  FolderOpen,
  Files,
  MoreVertical,
  ChevronDown,
  Activity,
} from 'lucide-react';
import ResidentHistoryWorkspace from './ResidentHistoryWorkspace';

const LOGO_URL = 'https://drcloud-9749f.web.app/logo.svg';
const ROW1_HEIGHT = 52;
const ROW2_HEIGHT = 44;
const TOP_NAV_HEIGHT = ROW1_HEIGHT + ROW2_HEIGHT;
const SIDEBAR_WIDTH_COLLAPSED = 60;
const SIDEBAR_WIDTH_EXPANDED = 280;

const TOP_NAV_LINKS = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'ADL', icon: FileText },
  { label: 'Wait List', icon: ListOrdered },
  { label: 'Schedule', icon: Calendar },
  { label: 'Clients', icon: Users },
  { label: 'Staff Dashboard', icon: LayoutDashboard },
  { label: 'Practice', icon: Building2 },
  { label: 'Billing', icon: CreditCard },
  { label: 'Fax Center', icon: FileText },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Inbox', icon: Inbox },
  { label: 'Administration', icon: Settings },
];

const SIDEBAR_MENU_ITEMS = [
  { label: 'Client Summary Chart', icon: PieChart, iconColor: 'text-slate-500' },
  { label: 'Past Encounters', icon: History, iconColor: 'text-slate-500' },
  { label: 'Fee Sheet', icon: DollarSign, iconColor: 'text-slate-500' },
  { label: 'Timeline', icon: TrendingUp, iconColor: 'text-slate-500' },
  { label: 'Message Patient', icon: Mail, iconColor: 'text-orange-500' },
  { label: 'ROI Dashboard', icon: BarChart3, badge: 1, iconColor: 'text-blue-500' },
  { label: 'Prescribe', icon: PenSquare, iconColor: 'text-slate-600' },
  { label: 'Labs', icon: FlaskConical, iconColor: 'text-slate-600' },
  { label: 'Trend Vitals', icon: Activity, iconColor: 'text-slate-600' },
  { label: 'Forms to Sign', icon: FileSignature, iconColor: 'text-purple-500' },
  { label: 'Record Vitals', icon: ClipboardList, iconColor: 'text-slate-600' },
  { label: 'Treatment Plan', icon: ClipboardList, iconColor: 'text-emerald-500' },
  { label: 'RecindMAR Orders/Vitals', icon: ClipboardList, iconColor: 'text-slate-600' },
  { label: 'Patient Education', icon: GraduationCap, iconColor: 'text-slate-600' },
  { label: 'Incidents', icon: AlertCircle, iconColor: 'text-slate-600' },
  { label: 'Batch Eligibility Checking', icon: CheckCircle, iconColor: 'text-slate-600' },
  { label: 'Interdisciplinary Treatment Plan', icon: ClipboardList, active: true, iconColor: 'text-white' },
  { label: 'Patient Monitoring Rounds', icon: UsersRound, iconColor: 'text-slate-600' },
  { label: 'Patient Forms', icon: FileText, iconColor: 'text-purple-500' },
  { label: 'Form Cabinet', icon: FolderOpen, iconColor: 'text-purple-500' },
  { label: 'CCDA', icon: Files, iconColor: 'text-slate-600' },
];

function DrCloudLogo() {
  return (
    <div
      className="shrink-0 flex items-center justify-center px-3 py-2 rounded-lg border border-slate-200 overflow-hidden"
      style={{ backgroundColor: '#E1E9F1' }}
    >
      <img
        src={LOGO_URL}
        alt="Dr. Cloud EHR"
        className="h-12 w-auto max-w-[3rem] object-contain"
      />
    </div>
  );
}

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [activeNav, setActiveNav] = useState('Clients');
  const [sidebarSearch, setSidebarSearch] = useState('');

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F4F6F9]">
      {/* Top Navigation Bar - Two-tier, fixed */}
      <header
        className="shrink-0 flex flex-col fixed top-0 left-0 right-0 z-30"
        style={{ height: TOP_NAV_HEIGHT }}
      >
        {/* Row 1: Branding & Search - #E1E9F1 */}
        <div
          className="flex items-center justify-between gap-4 px-4 border-b border-slate-200"
          style={{ minHeight: ROW1_HEIGHT, backgroundColor: '#E1E9F1' }}
        >
          <DrCloudLogo />
          <div className="flex-1 max-w-2xl mx-6 flex justify-center">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search patients, providers, claims..."
                className="w-full h-10 pl-9 pr-4 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              className="relative p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <button
              type="button"
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Help"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Mail"
            >
              <Mail className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 pl-2 ml-1">
              <div className="text-right hidden sm:block">
                <p className="text-slate-800 text-sm font-medium leading-tight">
                  Sarah Johnson
                </p>
                <p className="text-slate-500 text-xs leading-tight">
                  Front Desk
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0056B3] flex items-center justify-center text-white text-sm font-semibold shrink-0">
                SJ
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Nav links - #2C6DB5 */}
        <nav
          className="flex items-center gap-0.5 px-4 overflow-x-auto shrink-0"
          style={{ minHeight: ROW2_HEIGHT, backgroundColor: '#2C6DB5' }}
        >
          {TOP_NAV_LINKS.map(({ label, icon: Icon }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveNav(label)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors text-white ${
                  isActive
                    ? 'bg-[#4A89CC]'
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </button>
            );
          })}
          <button
            type="button"
            className="flex items-center gap-1 px-2 py-2 text-white hover:bg-white/10 rounded-md text-sm font-medium ml-auto shrink-0"
          >
            <MoreVertical className="w-4 h-4" />
            <span>More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </nav>
      </header>

      <div
        className="flex flex-1 min-h-0"
        style={{ paddingTop: TOP_NAV_HEIGHT }}
      >
        {/* Collapsible Sidebar */}
        <aside
          className="shrink-0 flex flex-col bg-[#F8F9FA] border-r border-slate-200 transition-[width] duration-200 ease-out overflow-hidden"
          style={{
            width: sidebarExpanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED,
          }}
        >
          <div className="shrink-0 p-3 border-b border-slate-200 flex items-center gap-2">
            {sidebarExpanded ? (
              <>
                <div className="flex-1 min-w-0 relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="search"
                    placeholder="Search menu"
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    className="w-full h-9 pl-8 pr-2 rounded-md bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarExpanded(false)}
                  className="shrink-0 w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="Collapse sidebar"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setSidebarExpanded(true)}
                className="w-full h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Expand sidebar"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto py-2">
            {SIDEBAR_MENU_ITEMS.map(({ label, icon: Icon, badge, active, iconColor }) => (
              <button
                key={label}
                type="button"
                className={`relative w-full flex items-center text-left transition-colors ${
                  sidebarExpanded ? 'gap-3 px-3 py-2.5' : 'justify-center py-2.5'
                } ${
                  active
                    ? 'bg-[#0056B3] text-white border-l-4 border-[#0056B3]'
                    : 'text-slate-700 hover:bg-slate-100/80 border-l-4 border-transparent'
                }`}
              >
                <Icon
                  size={20}
                  className={`shrink-0 ${active ? 'text-white' : (iconColor || 'text-slate-600')}`}
                />
                {sidebarExpanded && (
                  <>
                    <span className="flex-1 text-sm font-medium truncate">
                      {label}
                    </span>
                    {badge != null && (
                      <span className="shrink-0 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-xs font-semibold flex items-center justify-center px-1">
                        {badge}
                      </span>
                    )}
                  </>
                )}
                {!sidebarExpanded && badge != null && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col overflow-auto bg-[#F4F6F9]">
          <div className="p-4 pb-0 shrink-0">
            <nav className="flex items-center gap-1.5 text-sm text-slate-600 mb-1">
              <button
                type="button"
                className="p-0.5 -ml-0.5 rounded text-slate-600 hover:bg-slate-200/80"
                aria-label="Back"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span>Client</span>
              <span className="text-slate-400">›</span>
              <span>John Smith</span>
              <span className="text-slate-400">›</span>
              <span>Summary Chart</span>
              <span className="text-slate-400">›</span>
              <span className="font-semibold text-slate-900">
                Resident History / Lifestyle
              </span>
            </nav>
            <h1 className="text-xl font-bold text-slate-900 mt-1">
              Resident History / Lifestyle
            </h1>
          </div>
          <div className="flex-1 p-4 pt-4 min-h-0 flex flex-col">
            <ResidentHistoryWorkspace embedded />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
