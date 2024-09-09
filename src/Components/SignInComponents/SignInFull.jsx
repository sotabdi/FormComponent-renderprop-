import React from "react";
import FormHeader from "../CommonComponents/FormHeader";
import Form from "../CommonComponents/Form";
import Formbody from "../CommonComponents/Formbody";
import { emailValidator, nameValidator, passValidator } from "../../../Utils/Validation";

const SignInFull = () => {
  const inputFeildArr = [
    {
      legend: "Email",
      type: "text",
      placeholder: "Ladushing691@gmail.com",
    },
    {
      legend: "Password",
      type: "Password",
      placeholder: "..........",
    },
  ];
  const handleSubmit = (userInfo, seterr)=>{
    let haserr = false;
    const errors = {};

    if (!userInfo["Email"] || !emailValidator(userInfo["Email"])) {
      errors["Email"] = "Email is required";
      haserr = true;
    }
    if (!userInfo["First Name"] || !nameValidator(userInfo["First Name"])) {
      errors["First Name"] = "Name is required";
      haserr = true;
    }
    if (!userInfo["Password"] || !passValidator(userInfo["Password"])) {
      errors["Password"] = "password is required";
      haserr = true;
    }
    seterr(errors);

    if (!haserr) {
      console.log("ready to go");
    }
  }
  return (
    <div className="flex flex-col w-[497px] m-auto h-screen justify-center">
    <FormHeader headerTxt="Login" titleTxt="Free register and you can enjoy it"/>
    <Form
      render={(userInfo, inputFeildArr, handleInput, err, seterr) => (
        <Formbody
          userInfo={userInfo}
          inputFeildArr={inputFeildArr}
          handleInput={handleInput}
          handleSubmit={() => {
            handleSubmit(userInfo, seterr);
          }}
          btnTxt={'Sign In'}
          err={err}
        />
      )}
      inputFeildArr={inputFeildArr}
    />
    </div>
  );
};

export default SignInFull;
