import Navbar from '@/_components/layout/Navbar';
import { AuthProvider } from '@/_providers/AuthProvider';
import { dbConnect } from '@/_services/mongo';
import './globals.css';

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
