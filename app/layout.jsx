import './globals.css';

export const metadata = {
  metadataBase: new URL('https://weddinginvitelik.ink'),
  title: 'Wedding Invitations Platform',
  description: 'Digital Wedding Invitation Platform',
  keywords: ['Wedding Invitations', 'Digital Wedding Cards'],
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
