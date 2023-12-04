import { useState } from "react"

export default function BmiCalculator() {

    const [height, setHeight] = useState(185);
    const [weight, setWeight] = useState(80);
    const [bmi, setBmi] = useState(23.37);
    const [result, setResult] = useState('Normal Weight');
    const [unit, setUnit] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(unit) {
            const h = height;
            const w = weight / ((h * h) / 100000);
            setBmi(w.toFixed(2));

            if(w < 18.5) {
                setResult("Underweight");
            } else if(w >= 18.5 && w < 25) {
                setResult("Normal Weight");
            } else if(w >= 25 && w < 30) {
                setResult("Overweight");
            } else {
                setResult("Obesity");
            }
        } else {
            const h = height;
            const w = 703 * (weight / ((h * h) / 10));
            setBmi(w.toFixed(2));

            if(w < 18.5) {
                setResult("Underweight");
            } else if(w >= 18.5 && w < 25) {
                setResult("Normal Weight");
            } else if(w >= 25 && w < 30) {
                setResult("Overweight");
            } else {
                setResult("Obesity");
            }
        }
    }

    return (
        <form className="calculator"onChange={handleSubmit} autoComplete="off" >
            <h3>Enter your details below</h3>
            <div className="radioBtns">
                <label onClick={() => {setUnit(true)}} ><input className="unit" type="radio" name="metric" defaultChecked checked={unit} onChange={() => { setUnit(true); }} />Metric</label>
                <label onClick={() => {setUnit(false)}}><input className="unit" type="radio" name="imperial"  checked={!unit} onChange={() => { setUnit(false); }}/>Imperial</label>
            </div>
            <div className="heightweight">
                <p className="miniTitle">Height</p>
                {unit 
                    ? 
                    <div className="height">
                        <input type="text" name="cm" value={height} onChange={(e) => {setHeight(e.target.value)}} placeholder="Enter your height" />
                        <p className="info">cm</p>
                    </div>
                    : 
                    <div className="height">
                        <input type="text" name="in" value={height} onChange={(e) => {setHeight(e.target.value)}} placeholder="Enter your height" />
                        <p className="info">in</p>
                    </div>
                }
                <p className="miniTitle">Weight</p>
                {
                    unit 
                    ?
                    <div className="weight">
                        <input type="text" name="kg" value={weight} onChange={(e) => {setWeight(e.target.value)}} placeholder="Enter your weight" />
                        <p className="info">kg</p>
                    </div>
                    :
                    <div className="weight">
                        <input type="text" name="lbs" value={weight} onChange={(e) => {setWeight(e.target.value)}} placeholder="Enter your weight" />
                        <p className="info">lbs</p>
                    </div>
                }
                <div className="result">
                    <span className="result-top-sec">
                        <h4>Your BMI is...</h4>
                        <h2>{bmi}</h2>
                    </span>
                    <p>Your BMI suggests you’re a {result}. Your ideal weight is between 63.3kgs - 85.2kgs.</p>
                </div>
            </div>
        </form>
    )
}