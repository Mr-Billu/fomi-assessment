import "./globals.css";
export const metadata = {
  title: "Fomi Studio",
  description: "Create images with Fomi Studio.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
