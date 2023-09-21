import AppLayout from '@/components/layout/AppLayout';
import '@/styles/common/normalize.css';

export default function LayoutApp({ children }: { children: React.ReactNode }) {
	return <AppLayout>{children}</AppLayout>;
}
