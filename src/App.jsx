import BmiLimitations from "./Components/BmiLimitations";
import BodyMassIndex from "./Components/BodyMassIndex";
import Result from "./Components/Result";
import Tips from "./Components/Tips";


export default function App() {
  return (
    <div className="container">
      <BodyMassIndex />
      <Result />
      <Tips />
      <BmiLimitations />
    </div>
  )
}
