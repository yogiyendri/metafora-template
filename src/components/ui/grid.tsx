import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const gridVariants = cva('grid grid-cols-1', {
  variants: {
    col: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5',
      6: 'md:grid-cols-6',
      7: 'md:grid-cols-7',
      8: 'md:grid-cols-8',
      9: 'md:grid-cols-9',
      10: 'md:grid-cols-10',
      11: 'md:grid-cols-11',
      12: 'md:grid-cols-12',
      auto: 'md:auto-cols-min',
    },
    row: {
      1: 'md:grid-rows-1',
      2: 'md:grid-rows-2',
      3: 'md:grid-rows-3',
      4: 'md:grid-rows-4',
      auto: 'auto-rows-min',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      12: 'gap-12',
    },
  },
  defaultVariants: {
    col: 12,
    row: 'auto',
    gap: 4,
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

const Grid: React.FC<GridProps> = React.forwardRef<HTMLDivElement, GridProps>(
  ({ col, row, gap, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridVariants({ col, row, gap }), className)}
        {...props}
      />
    );
  }
);
Grid.displayName = 'Grid';

const gridItemVariants = cva('', {
  variants: {
    span: {
      1: 'md:col-span-1',
      2: 'md:col-span-2',
      3: 'md:col-span-3',
      4: 'md:col-span-4',
      5: 'md:col-span-5',
      6: 'md:col-span-6',
      7: 'md:col-span-7',
      8: 'md:col-span-8',
      9: 'md:col-span-9',
      10: 'md:col-span-10',
      11: 'md:col-span-11',
      12: 'md:col-span-12',
    },
    rowSpan: {
      1: 'md:row-span-1',
      2: 'md:row-span-2',
      3: 'md:row-span-3',
      4: 'md:row-span-4',
    },
  },
  defaultVariants: {
    span: 1,
    rowSpan: 1,
  },
});

export interface GridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemVariants> {
  asChild?: boolean;
}

const GridItem: React.FC<GridItemProps> = React.forwardRef<
  HTMLDivElement,
  GridItemProps
>(({ span, rowSpan, asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      ref={ref}
      className={cn(gridItemVariants({ span, rowSpan }), className)}
      {...props}
    />
  );
});
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
