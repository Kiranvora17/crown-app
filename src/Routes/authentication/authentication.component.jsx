import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import style from "./authentication.module.scss";

const Authentication = () => {
  return (
    <div className={style.authContainer}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
