import React from "react";
import {CenterContainer} from "../Components/Containers";
import s from "./style/Auth.module.css";
import inCardStyle from "./style/AuthForm.module.css"
import {Logo} from "../Components/common/Logo";
import {Card} from "../Components/common/Card";
import {ButtonFilled} from "../Components/common/Buttons";


const RegistrationDone = () => {
  return (
    <CenterContainer>
      <Logo className={s.logo}/>
      <Card className={s.cardDone}>
        <p className={inCardStyle.AuthTitle}>Готово!</p>
        <p className={inCardStyle.text}>Регистрация прошла успешно, <br />и ожидает подтверждения</p>
        <ButtonFilled title="Ок" additionClassName={inCardStyle.registrationButton}/>
      </Card>
    </CenterContainer>
  )
};


export {
  RegistrationDone
}


