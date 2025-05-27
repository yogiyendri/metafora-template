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

export interface MenuItem {
  title: string
  url?: string
  icon: LucideIcon
  badge?: string
  items?: SubMenuItem[]
}

export interface NavItemsProps {
  title: string
  menu: MenuItem[]
}

export const navMain: MenuItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Rocket,
  },
]

export const navItems: NavItemsProps[] = [
  {
    title: 'Components',
    menu: [
      {
        title: 'Widgets',
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
        title: 'Charts',
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
        title: 'Posts',
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
        title: 'Register',
        url: '/auth/register',
        icon: UserPlus2,
      },
      {
        title: 'Login',
        url: '/auth/login',
        icon: LogIn,
      },
    ],
  },
]
