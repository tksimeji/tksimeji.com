import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'つきしめじ'
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={ `${ geistSans.variable } ${ geistMono.variable } antialiased bg-background` }>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-background min-h-screen relative w-full">
        <div
          className="absolute inset-0 z-0"
          style={ {
            backgroundImage: `
              linear-gradient(to right, var(--background-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--background-grid) 1px, transparent 1px),
              radial-gradient(circle 500px at 0% 20%, var(--background-purple-glow), transparent),
              radial-gradient(circle 500px at 100% 0%, var(--background-blue-glow), transparent)`,
            backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
          } }
        />
        <div className="relative">
          { children }
        </div>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}