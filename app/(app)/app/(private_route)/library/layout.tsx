import '@/styles/common/normalize.css';
import SessionWidgetLayout from '@components/layout/SessionWidgetLayout';

export default function LayoutLibrary({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SessionWidgetLayout>{children}</SessionWidgetLayout>;
}
