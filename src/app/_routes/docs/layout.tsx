import Navbar from '@/components/common/layout/navbar';
import { Outlet, LayoutComponent, ScrollRestoration } from 'rasengan';
import SidebarNavigation from '@/components/common/layout/sidebar';
import Footer from '@/components/common/layout/footer';
import { useState, useRef } from 'react';
import { AlignJustify } from 'lucide-react';
import ThemeButton from '@/components/common/atoms/buttons/theme-button';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '@rasenganjs/theme';
import { twMerge } from 'tailwind-merge';

const DocsLayout: LayoutComponent = () => {
  const { isDark } = useTheme();

  const targetRef = useRef<HTMLElement>(null);

  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <section
      className={twMerge(
        'docs w-full h-screen overflow-y-auto bg-background text-foreground',
        isDark ? 'dark' : ''
      )}
      ref={targetRef}
    >
      <ScrollRestoration target={targetRef} />
      <Navbar />

      <section
        className={twMerge(
          'relative w-full h-auto flex pt-16 lg:pt-4'
        )}
      >
        <SidebarNavigation className="hidden lg:block h-auto" />

        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: navigationOpen ? 0 : '-100%' }}
          transition={{ duration: 0.2 }}
          className="z-40 fixed top-[110px] bg-background block lg:hidden"
        >
          <SidebarNavigation
            className="h-auto"
            onClose={() => setNavigationOpen(false)}
          />
        </motion.div>

        <AnimatePresence>
          {navigationOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: navigationOpen ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setNavigationOpen(false)}
              className="z-20 fixed top-0 left-0 w-full h-full bg-background/90 block lg:hidden"
            />
          )}
        </AnimatePresence>

        <main className="w-full lg:w-(--main-width) h-full mt-10 ">
          <div className="px-0 w-full">
            <Outlet />
          </div>
          <Footer />
        </main>
      </section>
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
