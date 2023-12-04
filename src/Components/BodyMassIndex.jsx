import Calculator from './Calculator'

export default function BodyMassIndex() {
    return (
        <>
        <div className="bmi-content">
            <div className="bmi-text">
            <a href="#" className="bmi-logo"><img src="bmi-logo-mobile.svg" alt="bmi-logo"/></a>
            <h4>Body Mass Index Calculator</h4>
            <h6>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</h6>
            </div>
            <div className="bmi-calculator">
                <Calculator />
            </div>
        </div>
         
        </>
    )
}