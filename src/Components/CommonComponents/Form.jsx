import React, {useState } from "react";

const Form = ({render,inputFeildArr}) => {

// set state dynamically 
    const [userInfo, setUserInfo] = useState(
        inputFeildArr.reduce((acc, item) => {
          acc[item.legend] = "";
          return acc;
        }, {}) // declearing initial value a blank object 
      );

      const [err, seterr]= useState({})
      
const handleInput = (e, legend)=>{
    setUserInfo({
        ...userInfo,
        [legend]: e.target.value
    });
    seterr({
        ...err,
        legend: ''
    })
}
    return render(userInfo, inputFeildArr, handleInput, err , seterr)
};
export default Form;
