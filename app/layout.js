import Navbar from '@/_components/layout/Navbar';
import { dbConnect } from '@/_services/mongo';
import './globals.css';

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
