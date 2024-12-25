import Header from "./Components/header"; // Ensure path is correct
import "./globals.css";
import Providers from "./Providers";
import Navbar from "./Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />


          {/* Navbar */}
          <Navbar/>
          {/* SearchBox */}



          {children}
        </Providers>
      </body>
    </html>
  );
}
