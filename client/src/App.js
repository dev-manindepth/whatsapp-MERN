import "./App.css";
import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";

function App() {
  const clientId =
    "1029910497835-i0lafrtlmt794n9tqh3i8sprotj53g9u.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>

      <AccountProvider>
        <Messanger />
      </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
