import React from 'react';
import { Outlet, LayoutComponent } from 'rasengan';
import { Navbar } from '@/components/common/layout/navbar';
import { useTheme } from '@rasenganjs/theme';
import { cn } from '@/lib/utils';

const RootLayout: LayoutComponent = () => {
  const { isDark } = useTheme();

  return (
    <section className={cn('bg-background text-foreground font-raleway', isDark && "dark")}>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default RootLayout;
