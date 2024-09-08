import React from 'react';
import Logo from '../../assets/Logo.png'

const FormHeader = ({headerTxt ='Header Text missing', titleTxt= 'Title text missing'}) => {
  return (
    <div className='flex flex-col items-center text-center mb-12'>
        <div>
            <picture>
                <img src={Logo} alt={Logo} />
            </picture>
        </div>
        <div>
            <h1 className='font-bold text-[34px] text-fontColor pt-[18px] pb-[11px]'>{headerTxt}</h1>
            <p className='text-xl text-fontColor50'>{titleTxt}</p>
        </div>
    </div>
  )
}

export default FormHeader