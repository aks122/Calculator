import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper';
import ShowScreen from './Components/ShowScreen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';
import { CalcProvider } from './Calculator/CalcCont';


 const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0  , ".", "="],
 ];
function App() {
  return (
    <CalcProvider>
      <Wrapper>
      <ShowScreen/>
        <ButtonBox>
          {buttonValues.flat().map((btn, i) => (
            <Button value={btn} key={i} /> 
          ))}
        </ButtonBox>
      </Wrapper>
      </CalcProvider>
  );
}

export default App;
