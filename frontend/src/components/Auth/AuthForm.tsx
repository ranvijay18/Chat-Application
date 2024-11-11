import React, { useEffect, useState } from "react";
import { Label, Input, InputGroup, Form, Container, SubmitButton, Title, LeftSide, RightSide } from "../UI/AuthContainer";
import signupImage from '../../assests/signup.svg';

const AuthForm = (props: any) => {

  const [type, setType] = useState('signup')

  useEffect(() => {
    if(props.type === "login"){
      setType("login");
    }
  },[props.type])
    return (
        <Container>
        <LeftSide>
          {/* Replace this SVG with your actual SVG code or component */}
          <img src={signupImage} alt="Sign Up" />
        </LeftSide>
        <RightSide>
          <Form>
            {type === "signup" ? 
            <>
            <Title>Sign Up</Title>
            <InputGroup>
              <Input type="text" required />
              <Label>Username</Label>
            </InputGroup>
            </>
            : <Title>Login</Title>}
            <InputGroup>
              <Input type="text" maxLength={10} required />
              <Label>Phone Number</Label>
            </InputGroup>
            <InputGroup>
              <Input type="password" required />
              <Label>Password</Label>
            </InputGroup>
            {type === 'signup' ? 
            <>
            <a href="/login">Already have account?</a>
            <SubmitButton type="submit">Sign Up</SubmitButton>
            </>
            :
            <SubmitButton type="submit">Login</SubmitButton>
            }
          </Form>
        </RightSide>
      </Container>
    );
}


export default AuthForm;