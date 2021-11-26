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

const ariaLabel = { "aria-label": "description" };

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
      <p>Create a personal account</p>

      <Box
        className={styles.formWrapper}
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          className={styles.InputArea}
          placeholder="E-mail"
          //  inputProps={ariaLabel}
          type="email"
          value={signUpData.email}
          name="email"
          onChange={onChange}
        />
        <Input
          className={styles.InputArea}
          placeholder="First Name"
          // inputProps={ariaLabel}
          type="text"
          value={signUpData.firstName}
          name="firstName"
          onChange={onChange}
        />
        <Input
          className={styles.InputArea}
          placeholder="Last Name"
          // inputProps={ariaLabel}
          type="text"
          value={signUpData.lastName}
          name="lastName"
          onChange={onChange}
        />
        <FormControl className={styles.gender}>
          <Select
            labelId=" demo-simple-select-label"
            id=" demo-simple-select"
            value={signUpData.gender}
            onChange={onChange}
            name={"gender"}
            title=" Select your gender"
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <Input
          className={styles.InputArea}
          placeholder="Password"
          //inputProps={ariaLabel}
          type="password"
          value={signUpData.password}
          name="password"
          onChange={onChange}
        />
        <Input
          className={styles.InputArea}
          placeholder="Confirm Password"
          // inputProps={ariaLabel}
          type="text"
          value={signUpData.passwordConfirmation}
          name="passwordConfirmation"
          onChange={onChange}
        />
        <Input
          className={styles.InputArea}
          placeholder="Phone Number"
          inputProps={ariaLabel}
          type="tel"
          value={signUpData.phone}
          name="phone"
          onChange={onChange}
        />
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Create account
        </Button>
        <span className={styles.passwordInfo}>
          {signUpData.passwordConfirmation !== signUpData.password
            ? "Password don't match"
            : ""}
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
