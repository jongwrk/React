import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  useState,
  type ChangeEvent,
  type SubmitEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH } from "../firebase";
//
import { ERROR_CODE } from "../common/error";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../component/auth";
import Loading from "../component/loading";

function SignUp() {
  const navigate = useNavigate();
  //
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;

    if (input.name === "name") {
      setName(input.value);
      return;
    }

    if (input.name === "email") {
      setEmail(input.value);
      return;
    }

    if (input.name === "password") {
      setPassword(input.value);
      return;
    }
  }

  async function onSubmit(
    event: SubmitEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setError("");

    // create account, send to firebase auth
    try {
      if (name.includes(" ")) {
        throw new FirebaseError(
          "name/include-whitespace",
          "",
        );
      }

      if (email.includes(" ")) {
        throw new FirebaseError(
          "email/include-whitespace",
          "",
        );
      }

      if (password.includes(" ")) {
        throw new FirebaseError(
          "password/include-whitespace",
          "",
        );
      }

      const credential =
        await createUserWithEmailAndPassword(
          AUTH,
          email,
          password,
        );

      const user = credential.user;

      await updateProfile(user, { displayName: name });

      navigate("/");
    } catch (ex) {
      let message = "";

      if (ex instanceof FirebaseError) {
        const error = ex as FirebaseError;

        message =
          ERROR_CODE[error.code] ??
          "Unknown Error. Please try again.";
      }

      setError(`Failed: ${message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Wrapper>
      <Title>
        Sign up for{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 16 16"
          id="Twitter-X--Streamline-Bootstrap"
          height="42"
          width="42"
        >
          <path
            d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
            strokeWidth="1"
          />
        </svg>
      </Title>
      <Form onSubmit={onSubmit}>
        <Input
          value={name}
          name="name"
          placeholder="Name"
          type="text"
          required
          onChange={onChange}
        />
        <Input
          value={email}
          name="email"
          placeholder="E-mail"
          type="email"
          required
          onChange={onChange}
        />
        <Input
          value={password}
          name="password"
          placeholder="Password"
          type="password"
          required
          onChange={onChange}
        />
        <Input
          value={isLoading ? "Loading" : "Create Account"}
          type="submit"
        />
        <Switcher>
          Already have an Account?{" "}
          <Link to="/login">Log in ➡️</Link>
        </Switcher>
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
}

export default SignUp;
