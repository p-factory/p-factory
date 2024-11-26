import React from "react";
import Template from "../../global/components/Template.test";
import SignUpPassWordComponent from "./SignUp.password.component";
const SignUpPassWord = () => {
  return (
    <div className="h-screen">
      <Template
        height={"h-[clamp(0px,91.12%,1149px)]"}
        shadowHeight={"h-[clamp(0px,91.12%,1149px)]"}
        shadowTop={"top-[27px]"}
        shadowLeft={"left-[25px]"}
        component={SignUpPassWordComponent}
      />
    </div>
  );
};

export default SignUpPassWord;
