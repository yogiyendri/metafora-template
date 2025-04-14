import { LogIn, Rocket, UserPlus2, type LucideIcon } from 'lucide-react';

interface SubMenuItem {
  title: string;
  url: string;
  badge?: string;
}

interface MenuItem {
  name: string;
  url?: string;
  icon: LucideIcon;
  badge?: string;
  items?: SubMenuItem[];
}

export interface NavItemsProps {
  title: string;
  menu: MenuItem[];
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
];
