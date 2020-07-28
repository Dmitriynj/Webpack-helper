import React, { useRef } from 'react';
import styled from 'styled-components';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';

const SnapContainer = styled.div`
  scroll-snap-type: x mandatory;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  // overflow: hidden;
`;

const SnapPage = styled.section`
  height: 100vh;
  min-width: 100vw;
  scroll-snap-align: center;
  padding: 2rem 1rem 1rem 1rem;
`;

const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 28px;
  padding-bottom: 12px;
  border-bottom: solid 2px #ccc;
`;

const AuthForm = () => {
  const element = useRef(null);

  const onCompleteEmail = () => {
    element.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onCompletePassword = () => {};

  return (
    <SnapContainer>
      <SnapPage>
        <Header>Welcome</Header>
        <EmailForm onComplete={onCompleteEmail} />
      </SnapPage>
      <SnapPage ref={element}>
        <PasswordForm onComplete={onCompletePassword} />
      </SnapPage>
    </SnapContainer>
  );
};

export { AuthForm };