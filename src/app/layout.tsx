import { ReactNode } from 'react';

import RootProvider from '@/components/providers/RootProvider';

export const metadata = {
  title: 'Homework',
  description: 'Homework Web',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
