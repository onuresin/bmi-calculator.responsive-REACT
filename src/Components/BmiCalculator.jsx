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
                setResult("Your BMI shows that you are below your ideal weight. Talk to a dietitian to get closer to your ideal.");
            } else if(w >= 18.5 && w < 25) {
                setResult("Your BMI suggests you're a normal weight. Continue to maintain your ideal weight.");
            } else if(w >= 25 && w < 30) {
                setResult("Your BMI shows that you are much above your ideal weight. To get back to your ideal weight, you urgently need to see a dietitian.");
            } else {
                setResult("Your BMI shows that you are obese. Get yourself in order and see a dietitian.");
            }
        } else {
            const h = height;
            const w = 703 * (weight / ((h * h) / 10));
            setBmi(w.toFixed(2));

            if(w < 18.5) {
                setResult("Your BMI shows that you are below your ideal weight. Talk to a dietitian to get closer to your ideal.");
            } else if(w >= 18.5 && w < 25) {
                setResult("Your BMI suggests you're a normal weight. Continue to maintain your ideal weight.");
            } else if(w >= 25 && w < 30) {
                setResult("Your BMI shows that you are much above your ideal weight. To get back to your ideal weight, you urgently need to see a dietitian.");
            } else {
                setResult("Your BMI shows that you are obese. Get yourself in order and see a dietitian.");
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
                        <input type="number" name="cm" value={height} onChange={(e) => {setHeight(e.target.value)}} />
                        <p className="info">cm</p>
                    </div>
                    : 
                    <div className="height">
                        <input type="number" name="in" value={height} onChange={(e) => {setHeight(e.target.value)}}  />
                        <p className="info">in</p>
                    </div>
                }
                <p className="miniTitle">Weight</p>
                {
                    unit 
                    ?
                    <div className="weight">
                        <input type="number" name="kg" value={weight} onChange={(e) => {setWeight(e.target.value)}} />
                        <p className="info">kg</p>
                    </div>
                    :
                    <div className="weight">
                        <input type="number" name="lbs" value={weight} onChange={(e) => {setWeight(e.target.value)}} />
                        <p className="info">lbs</p>
                    </div>
                }
                <div className="result">
                    <span className="result-top-sec">
                        <h4>Your BMI is...</h4>
                        <h2>{bmi}</h2>
                    </span>
                    <p>{result}.</p>
                </div>
            </div>
        </form>
    )
}