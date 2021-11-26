import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";

const LoginPageLayout = ({ loginValue, onChange, onSubmit, error }) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        Sign in to Pokemon Store or{" "}
        <Link to="/auth/signup">create an account</Link>.
      </p>
      <form className={styles.formWrapper} onSubmit={onSubmit}>
        <input
          className={styles.logInInput}
          placeholder="e-mail"
          type="email"
          value={loginValue.email}
          name="email"
          onChange={onChange}
        />
        <input
          className={styles.logInInput}
          placeholder="password"
          type="password"
          value={loginValue.password}
          name="password"
          onChange={onChange}
        />
        <button className={styles.btnGo} role="submit">
          Login
        </button>
        <div>{error}</div>
      </form>
    </div>
  );
};

export default LoginPageLayout;
