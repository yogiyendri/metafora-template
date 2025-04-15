import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const colorVariants = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
  red: { bg: 'bg-red-500/10', text: 'text-red-500' },
  green: { bg: 'bg-green-500/10', text: 'text-green-500' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-500' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-500' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-500' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-500' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-500' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-500' },
} as const;

type ColorType = keyof typeof colorVariants;

type MetricsIconProps = React.ComponentProps<typeof Card> & {
  className?: string;
  title: string;
  value: number | React.ReactNode;
  percentage?: number;
  detailPercentage?: string;
  icon?: LucideIcon;
  color?: ColorType;
};

export const MetricIcon = ({
  className,
  title,
  value,
  percentage,
  detailPercentage,
  icon: Icon = FileText,
  color = 'blue',
  ...props
}: MetricsIconProps) => {
  return (
    <Card className={cn('shadow-none', className)} {...props}>
      <CardHeader>
        <div className="flex justify-between">
          <div className="space-y-1.5">
            <CardDescription>{title}</CardDescription>
            <CardTitle className="text-2xl">{value}</CardTitle>
          </div>
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-md',
              colorVariants[color].bg
            )}
          >
            <Icon className={cn('h-5 w-5', colorVariants[color].text)} />{' '}
          </div>
        </div>
        {typeof percentage === 'number' && detailPercentage && (
          <CardDescription
            className={cn(
              'flex gap-1',
              percentage >= 0 ? 'text-green-500' : 'text-red-500'
            )}
          >
            <div className="flex items-center gap-0.5">
              {percentage >= 0 ? (
                <ArrowUpRight size={16} strokeWidth={3} />
              ) : (
                <ArrowDownRight size={16} strokeWidth={3} />
              )}
              <span>{Math.abs(percentage)}%</span>
            </div>
            <span className="text-muted-foreground">{detailPercentage}</span>
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};
