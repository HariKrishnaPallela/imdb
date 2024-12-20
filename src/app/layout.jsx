import Header from "./Components/header"; // Ensure path is correct
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />


          {/* Navbar */}
          
          {/* SearchBox */}



          {children}
        </Providers>
      </body>
    </html>
  );
}
