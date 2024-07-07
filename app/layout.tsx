import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import ModalProvider from "@/providers/ModalProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              {/* <UserButton /> */}
              <ModalProvider />
              {children}
            </SignedIn>
          </header>
        </body>
      </html>
    </ClerkProvider>
  );
}
