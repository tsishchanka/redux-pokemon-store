import {
  Button,
  Input,
  Box,
  Alert,
  Stack,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import styles from "./styles.module.scss";
import React from "react";
import { Link } from "react-router-dom";

//const ariaLabel = { "aria-label": "description" };

const RegistrationPageLayout = ({
  signUpData,
  onChange,
  onSubmit,
  error,
  isRegistered,
}) => {
  return (
    <div>
      <h1>Hello</h1>
      <h3>Create a personal account</h3>
      <p>Please, fill in all fields of the form.</p>

      <Box
        className={styles.formWrapper}
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>E-mail</div>
          <Input
            className={styles.InputArea}
            type="email"
            value={signUpData.email}
            name="email"
            onChange={onChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>First Name</div>
          <Input
            className={styles.InputArea}
            // inputProps={ariaLabel}
            type="text"
            value={signUpData.firstName}
            name="firstName"
            onChange={onChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>Last Name</div>
          <Input
            className={styles.InputArea}
            type="text"
            value={signUpData.lastName}
            name="lastName"
            onChange={onChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>Gender</div>
          <FormControl className={styles.gender}>
            <Select
              labelId=" demo-simple-select-label"
              id=" demo-simple-select"
              value={signUpData.gender}
              onChange={onChange}
              name={"gender"}
              title=" Select your gender"
              className={styles.selectGender}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>Password</div>
          <Input
            className={styles.InputArea}
            type="password"
            value={signUpData.password}
            name="password"
            onChange={onChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>Confirm Password</div>
          <Input
            className={styles.InputArea}
            type="password"
            value={signUpData.passwordConfirmation}
            name="passwordConfirmation"
            onChange={onChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputName}>Phone Number</div>
          <Input
            className={styles.InputArea}
            type="tel"
            value={signUpData.phone}
            name="phone"
            onChange={onChange}
          />
        </div>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Create account
        </Button>
        <span className={styles.passwordInfo}>
          {signUpData.passwordConfirmation > 0 &&
            signUpData.passwordConfirmation !== signUpData.password &&
            "Password don't match"}
          {error && (
            <div>
              <div>• Email must be an email</div>
              <div>
                • Password must be at least 8 characters long and also contain a
                number
              </div>
            </div>
          )}
        </span>
      </Box>

      {isRegistered ? (
        <div>
          Your account has been successfully created!{" "}
          <Link to="/auth/signIn">Sign In</Link>.
        </div>
      ) : (
        <p>
          or <Link to="/auth/signIn"> Sign In</Link>
        </p>
      )}
    </div>
  );
};

export default RegistrationPageLayout;
