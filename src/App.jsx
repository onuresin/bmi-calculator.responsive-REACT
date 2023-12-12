import BmiLimitations from "./Components/BmiLimitations";
import BodyMassIndex from "./Components/BodyMassIndex";
import Result from "./Components/Result";
import Tips from "./Components/Tips";
import Vektor from "./Components/Vektor";


export default function App() {
  return (
    <div className="container">
      <BodyMassIndex />
      <Vektor />
      <Result />
      <Tips />
      <BmiLimitations />
    </div>
  )
}
