import {
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
//
import { AUTH } from "../firebase";
import { Button, Logo } from "./Auth.style";

function GithubButton() {
  const navigate = useNavigate();

  async function clickButton() {
    const provider = new GithubAuthProvider();

    await signInWithPopup(AUTH, provider);

    navigate("/");
  }

  return (
    <Button onClick={clickButton}>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  );
}

export default GithubButton;
