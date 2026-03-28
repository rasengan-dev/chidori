import { Outlet, LayoutComponent } from 'rasengan';
import { Navbar } from '@/components/common/layout/navbar';
import { useTheme } from '@rasenganjs/theme';
import { cn } from '@/lib/utils';
import Footer from '@/components/common/layout/footer';
import { Analytics } from "@vercel/analytics/react"

const RootLayout: LayoutComponent = () => {
  const { isDark } = useTheme();

  return (
    <section className={cn('w-full h-full text-foreground font-raleway', isDark && "dark")}>
      <Analytics framework='rasengan.js' />

      <Navbar />

      <main className='w-full h-full bg-background'>
        <Outlet />
        <Footer />
      </main>
    </section>
  );
};

export default RootLayout;
