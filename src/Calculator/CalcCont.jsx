import { createContext, useState } from 'react'


export const CalcCont = createContext()
export const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState({
        sign: "",
        num:0,
        res:0
    });

    const providerValue = {
        calc, setCalc
    }
  return (
    <CalcCont.Provider value={providerValue}>
        {children}
    </CalcCont.Provider>
  )
}
