import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ setAuthenticated }) => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => setAuthenticated(true));

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;