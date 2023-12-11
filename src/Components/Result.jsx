export default function Result() {
    return (
        <>
            <div className="half-vektor">
                <img src="Vector 24.svg" alt="vektor" />
            </div>
            <div className="result-inner">
                <div className="result-left">
                    <img src="bstrd-sushiman.svg" alt="sushi-man"/>
                </div>
                <div className="result-right">
                    <h4>What your BMI result means</h4>
                    <img src="a-bmi-range.svg" alt="bmi-range-mob" />
                </div>
            </div>
            <div className="result-inner-tablet-web">
                <div className="result-left-tab-pc">
                    <img className="sushi-bastard" src="sushi-bstard-tablet.svg" alt="sushiman-2" />
                </div>
                <div className="result-right">
                    <h4>What your BMI result means</h4>
                    <img src="a-bmi-range.svg" alt="bmi-range-tab-pc" />
                </div>
            </div>
        </> 
    )
}