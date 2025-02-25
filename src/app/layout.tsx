import "./globals.css";
import Header from "./components/Header/Header"; // Importing the Header component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Header remains */}
        {children}
      </body>
    </html>
  );
}
