'use client';

import classNames from 'classnames';
import { useAtomValue } from 'jotai';
import { Inter, Montserrat } from 'next/font/google';

import THEME from '@/constant/theme';
import useDarkMode from '@/storages/useDarkMode';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function ThemeProvider({ children }) {
  const theme = useAtomValue(useDarkMode);

  return (
    <html lang="en" className={classNames(theme === THEME.DARK && 'dark')}>
      <body
        className={classNames(
          inter.variable,
          montserrat.variable,
          'flex flex-col min-h-screen'
        )}
      >
        {children}
      </body>
    </html>
  );
}
