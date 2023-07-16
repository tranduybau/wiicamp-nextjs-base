import ThemeProvider from '@/providers/ThemeProvider';

import './globals.css';

export const metadata = {
  title: 'Wiicamp - Next.js Template',
  description: 'Created by Wiicamp',
};

export default function RootLayout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
