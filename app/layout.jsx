import './globals.css';

export const metadata = {
  metadataBase: new URL('https://weddinginvitelik.ink'),
  title: 'Wedding Invitation Platform',
  description: 'Digital wedding invitation platform',
  keywords: ['Wedding Invitation', 'Rajesh and Nithya', 'Guruvayur Temple Wedding', 'Indian Wedding', 'Traditional Wedding'],
  themeColor: '#FFF5E6',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFF5E6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/assets/images/ganesha.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
