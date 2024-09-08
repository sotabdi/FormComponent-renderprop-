import React from "react";
import Form from "../CommonComponents/Form";
import Formbody from "../CommonComponents/Formbody";
import {
  emailValidator,
  nameValidator,
  passValidator,
} from "../../../Utils/Validation";
import FormHeader from "../CommonComponents/FormHeader";

const SignUpFull = () => {
  const inputFeildArr = [
    {
      legend: "Email",
      type: "text",
      placeholder: "Ladushing691@gmail.com",
    },
    {
      legend: "First Name",
      type: "text",
      placeholder: "Ladushing GTG",
    },
    {
      legend: "Password",
      type: "password",
      placeholder: "..........",
    },
  ];

  const handleSubmit = (userInfo, seterr) => {
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
  };
  return (
    /*<Form/> It is a render prop component that takes an array of input fields
    and creates the required input fields based on the array. 
    this component is totaly reusable 


    //how to use//

    FORM components will generate input fields and necessary state to store
    input values based on the array of objects you declare.

    for handle action and errors on submit you can use handleSubmit function.
    firstParam: all satate values
    secondParam: seterr func (for error handaling)

    //design
    you can customize the design from Formbody according to you 
    */

    <div className="flex flex-col w-[497px] m-auto h-screen justify-center">
      <FormHeader headerTxt='Get started with easily register' titleTxt="Free register and you can enjoy it"/>
      <Form
        render={(userInfo, inputFeildArr, handleInput, err, seterr) => (
          <Formbody
            userInfo={userInfo}
            inputFeildArr={inputFeildArr}
            handleInput={handleInput}
            handleSubmit={() => {
              handleSubmit(userInfo, seterr);
            }}
            err={err}
          />
        )}
        inputFeildArr={inputFeildArr}
      />
    </div>
  );
};

export default SignUpFull;
