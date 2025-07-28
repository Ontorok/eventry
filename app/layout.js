import Navbar from '@/_components/layout/Navbar';
import { AuthProvider } from '@/_providers/AuthProvider';
import { dbConnect } from '@/_services/mongo';
import './globals.css';

export const metadata = {
  title: 'Eventry - Home',
  description: 'A single entry to connected to all the online events from the globe.',
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
