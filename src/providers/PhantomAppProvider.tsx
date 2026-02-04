import { AddressType, darkTheme, PhantomProvider } from "@phantom/react-sdk";

export function PhantomAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PhantomProvider
      config={{
        providers: ["injected", "deeplink"], // Enabled auth methods
        appId: "your-app-id", // Get your app ID from phantom.com/portal
        addressTypes: [AddressType.solana],
      }}
      theme={darkTheme}
      appIcon="https://space-tourism-front.vercel.app/icon.png"
      appName="Space Tourism"
    >
      {children}
    </PhantomProvider>
  );
}
