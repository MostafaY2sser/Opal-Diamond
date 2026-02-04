// import { ApiProvider } from "./ApiContext";
import { AuthProvider } from "./AuthContext";
import { LanguageProvider } from "./LanguageContext";

export default function AppProviders({ children }) {
  return (
    <LanguageProvider>
      <AuthProvider>
          {/* <ApiProvider> */}
            {children}
          {/* </ApiProvider> */}
      </AuthProvider>
    </LanguageProvider>
  );
}
