import './globals.css';
import { ThemeToggle } from '../components/theme-toggle';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between border-b p-4">
          <h1 className="font-bold">Hopify Kosova</h1>
          <ThemeToggle />
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
