import React from "react";
import {CenterContainer} from "../Components/Containers";
import s from "./style/Auth.module.css";
import {RegistrationForm} from "./RegistrationForm";
import {Logo} from "../Components/common/Logo";
import {Card} from "../Components/common/Card";


const Registration = () => {
  return (
    <CenterContainer>
      <Logo className={s.logo}/>
      <Card className={s.cardRegistration}>
        <RegistrationForm/>
      </Card>
    </CenterContainer>
  )
};


export {
  Registration
}


