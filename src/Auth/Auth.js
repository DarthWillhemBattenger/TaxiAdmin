import React from "react";
import {CenterContainer} from "../Components/Containers";
import s from "./style/Auth.module.css";
import {AuthForm} from "./AuthForm";
import {Logo} from "../Components/common/Logo";
import {Card} from '../Components/common/Card';

const Auth = () => {
  return (
    <CenterContainer>
      <Logo className={s.logo} />
      <Card className={s.card}>
        <AuthForm/>
      </Card>
    </CenterContainer>
  )
};


export {
  Auth
}


