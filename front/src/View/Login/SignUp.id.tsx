import React from "react";
import Template from "../../global/components/Template.test";
import SignUpIdComponent from "./SignUp.id.component";
const SignUpId = () => {
  return (
    <div className="h-screen">
      <Template
        component={SignUpIdComponent}
        // 전체 height
        height={"h-[clamp(0px,91.73%,1081px)]"}
        //  내부 height 85.73
        shadowHeight={"h-[clamp(0px,91.73%,1081px)]"}
      />
    </div>
  );
};

export default SignUpId;
