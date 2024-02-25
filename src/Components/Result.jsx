export default function Result() {
    return (
        <>
            <div className="result-inner">
                <div className="result-left">
                    <img src="bstrd-sushiman.png" alt="sushi-man"/>
                </div>
                <div className="result-right">
                    <h4>What your BMI result means</h4>
                    <img className="bmi-tab-mob" src="a-bmi-range.svg" alt="bmi-range-tab-mob" />
                    <img className="bmi-pc" src="bmi-web.svg" alt="bmi-range-pc" />
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