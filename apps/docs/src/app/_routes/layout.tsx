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

RootLayout.metadata = {
  openGraph: {
    title: 'Chidori - Write docs at lightning speed.',
    description:
      'Chidori is a documentation framework powered by Rasengan.js to build fast, elegant, and interactive documentation websites.',
    url: 'https://chidori.rasengan.dev',
    image: 'https://chidori.rasengan.dev/static/images/chidori.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chidori - Write docs at lightning speed.',
    description:
      'Chidori is a documentation framework powered by Rasengan.js to build fast, elegant, and interactive documentation websites.',
    site: 'https://chidori.rasengan.dev',
    image: 'https://chidori.rasengan.dev/static/images/chidori.png',
  },
}

export default RootLayout;
