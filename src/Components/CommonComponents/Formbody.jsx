import React from "react";

const Formbody = ({
  userInfo,
  inputFeildArr,
  handleInput,
  handleSubmit,
  err,
}) => {
  return (
    <div>
      {inputFeildArr?.map((item, index) => (
        <div key={index} className="mb-[32px]">
          <fieldset className="border-fontColor30 border-[2px] rounded-[8px] px-4">
            <legend className="font-semibold text-[14px] text-fontColor70 tracking-[7.5%] px-7">
              {item.legend}
            </legend>
            <input
              className="w-full text-[20px] font-semibold text-fontColor pt-[10px] pb-[24px] px-[26px]"
              type={item.type}
              placeholder={item.placeholder}
              onChange={(e) => handleInput(e, item.legend)}
              value={userInfo[item.legend]}
            />
          </fieldset>
          {err[item.legend] && (
            <p className="text-red-500 ps-5">{err[item.legend]}</p>
          )}
        </div>
      ))}
      <div>
        <button
          onClick={handleSubmit}
          className="w-full font-semibold text-xl text-white bg-primaryColor rounded-[86px] py-5 mt-[15px]"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Formbody;
