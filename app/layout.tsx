

import "./globals.css";
import TawkToChatbot from "./components/TawkToChatbot";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
          <TawkToChatbot />
      </body>
    </html>
  );
}

