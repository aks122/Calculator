import React, { useContext } from 'react'
import { CalcCont } from '../Calculator/CalcCont';
import { Textfit } from 'react-textfit';

const ShowScreen = () => {
    const {calc} = useContext(CalcCont);

  return (
    <Textfit className='screen' max={70} mode='single'>{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default ShowScreen