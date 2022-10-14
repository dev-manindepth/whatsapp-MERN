import "./App.css";
import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "1029910497835-i0lafrtlmt794n9tqh3i8sprotj53g9u.apps.googleusercontent.com";
    
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger />
    </GoogleOAuthProvider>
  );
}

export default App;
