import React from 'react';
import { Outlet, LayoutComponent } from 'rasengan';

const RootLayout: LayoutComponent = () => {
  return (
    <section className='w-full h-full overflow-y-auto bg-background text-foreground font-raleway'>
      <Outlet />
    </section>
  );
};

export default RootLayout;
