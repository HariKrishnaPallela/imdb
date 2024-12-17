import Header from "./Components/header"; // Ensure path is correct
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children}
      </body>
    </html>
  );
}
