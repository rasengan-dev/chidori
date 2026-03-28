import { Outlet, LayoutComponent } from 'rasengan';
import { useTheme } from '@rasenganjs/theme';
import { cn } from '@/lib/utils';

const RootLayout: LayoutComponent = () => {
	const { isDark } = useTheme();

	return (
		<section className={cn('w-full h-full text-foreground font-raleway', isDark && "dark")}>
			<Outlet />
		</section>
	);
};

export default RootLayout;
