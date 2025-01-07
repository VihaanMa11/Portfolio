import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navbar } from '@/components/navigation/navbar';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { Analytics } from '@/components/analytics';
import { MouseFollower } from '@/components/ui/mouse-follower';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vihaan Malani Portfolio',
  description: 'Professional portfolio showcasing web development projects and skills',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MouseFollower />
          <Navbar />
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}