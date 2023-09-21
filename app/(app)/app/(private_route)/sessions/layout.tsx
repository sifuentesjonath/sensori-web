import '@/styles/common/normalize.css';
import SessionWidgetLayout from '@components/layout/SessionWidgetLayout';

export default function LayoutSessions({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SessionWidgetLayout>{children}</SessionWidgetLayout>;
}
