import { Outlet, LayoutComponent, ScrollRestoration } from 'rasengan';
import Footer from '@/components/common/layout/footer';
import { useState, useRef } from 'react';
import Sidebar from '@/components/common/layout/sidebar-01';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';

const DocsLayout: LayoutComponent = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  return (
    <section
      className={'w-full h-screen overflow-hidden bg-background text-foreground'}
      
    >
      <ScrollRestoration target={targetRef} />

      <main className="w-full flex lg:w-(--main-width) h-(--main-height) mt-[50px] overflow-hidden">
        <div className='relative w-[350px] h-full overflow-x-hidden overflow-y-auto hidden lg:block'>
          {/* Top blur mask */}
          <div className='absolute left-0 top-0 bg-linear-to-b from-background to-transparent from-30% w-full h-[80px] z-20'></div>

          <Sidebar />

          {/* Bottom blur mask */}
          <div className='absolute left-0 bottom-0 bg-linear-to-t from-background to-transparent from-30% w-full h-[80px] z-20'></div>

          {/* Vertical ligne */}
          <div className='absolute top-0 bottom-0 right-0 w-px bg-linear-to-b from-transparent via-border to-transparent'></div>
        </div>

        <div className={cn('fixed top-[60px] z-30 left-0 w-64 h-full lg:hidden transition-all duration-300 ease-in-out', open ? "" : "translate-x-[calc(-100%-20px)]")}>
          <div className='relative w-full h-full'>
            <div className='absolute top-0 -right-20 z-30d'>
              <Button size="icon" variant="default" onClick={() => setOpen(!open)} className='rounded-full'>
                {!open ? <PanelLeftOpen /> : <PanelLeftClose />}
              </Button>
            </div>

            <div className='w-full h-full overflow-x-hidden overflow-y-auto'>
              <Sidebar onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>

        <div className="px-0 w-full h-auto overflow-y-auto" ref={targetRef}>
          <div className=''>
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </section>
  );
};

DocsLayout.path = '/';
DocsLayout.metadata = {
  openGraph: {
    title: 'Rasengan.js - Documentation',
    description:
      'Learn everything you need to know about Rasengan.js, and build amazing web applications.',
    url: 'https://rasengan.dev',
    image: 'https://rasengan.dev/assets/images/metadata/docs.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome to Rasengan.js',
    description:
      'Learn everything you need to know about Rasengan.js, and build amazing web applications.',
    image: 'https://rasengan.dev/assets/images/metadata/docs.png',
  },
};

export default DocsLayout;
