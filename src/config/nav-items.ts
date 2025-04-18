import {
  ChartColumnBig,
  LayoutGrid,
  LogIn,
  Rocket,
  Send,
  UserPlus2,
  type LucideIcon,
} from 'lucide-react'

interface SubMenuItem {
  title: string
  url: string
  badge?: string
}

interface MenuItem {
  name: string
  url?: string
  icon: LucideIcon
  badge?: string
  items?: SubMenuItem[]
}

export interface NavItemsProps {
  title: string
  menu: MenuItem[]
}

export const navItems: NavItemsProps[] = [
  {
    title: 'Overview',
    menu: [
      {
        name: 'Dashboard',
        url: '/',
        icon: Rocket,
      },
    ],
  },
  {
    title: 'Components',
    menu: [
      {
        name: 'Widgets',
        icon: LayoutGrid,
        items: [
          {
            title: 'Metrics',
            url: '/widgets/metrics',
            badge: 'New',
          },
        ],
      },
      {
        name: 'Charts',
        icon: ChartColumnBig,
        items: [
          {
            title: 'Area Chart',
            url: '/charts/area',
            badge: 'New',
          },
          {
            title: 'Bar Chart',
            url: '/charts/bar',
            badge: 'New',
          },
          {
            title: 'Line Chart',
            url: '/charts/line',
            badge: 'New',
          },
          {
            title: 'Pie Chart',
            url: '/charts/pie',
            badge: 'New',
          },
          {
            title: 'Radar Chart',
            url: '/charts/radar',
            badge: 'New',
          },
          {
            title: 'Radial Chart',
            url: '/charts/radial',
            badge: 'New',
          },
          {
            title: 'Tooltip',
            url: '/charts/tooltip',
            badge: 'New',
          },
        ],
      },
      {
        name: 'Posts',
        url: '/posts',
        icon: Send,
        badge: 'Soon',
      },
    ],
  },
  {
    title: 'Authentication',
    menu: [
      {
        name: 'Register',
        url: '/auth/register',
        icon: UserPlus2,
      },
      {
        name: 'Login',
        url: '/auth/login',
        icon: LogIn,
      },
    ],
  },
]
