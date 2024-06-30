import { useState } from "react";
import { Stepper } from "react-form-stepper";
import StepLabels from "../../helpers/StepperLabels";




function UserDetails() {
    return <h1>User Details Page</h1>
}

function Payment() {
    return <h1>Payment</h1>
}


function Confirmation() {
    return <h1>Confirmation done</h1>
}

export default function StepperWrapper() {
    console.log('Ste',StepLabels.map((data)=>(data.label)));
    const steps = [
        { label: 'User details' },
        { label: 'payment' },
        { label: 'Booking Confirmation' }
    ]

    const [activeStep, setActiveStep] = useState(0)

    function SectionComponent() {

        
        console.log('my activeStep', activeStep);
        console.log('steps length',steps.length);
        switch (activeStep) {
            case 0:
                return <UserDetails />
            case 1:
                return <Payment />
            case 2:
                return <Confirmation />
            default:
                return null;

        }


    }

    return (
        
        <div className="">
            <Stepper steps={StepLabels} activeStep={activeStep} style={{
                background : 'black',
                color:'white'
            }}/>
            {
               
                SectionComponent()
                
            }
{/* 
{(activeStep !== 0 && activeStep !== steps.length - 1) && <button type="button" className="btn btn-danger mx-2" onClick={() => setActiveStep((active) => active - 1)}>Previous</button>}
            {activeStep !== steps.length - 1 && <button type="button" className="btn btn-danger" onClick={() => setActiveStep((active) => active + 1)}>Next</button>} */}
           
            {(activeStep !== 0) && <button type="button" className="btn btn-danger mx-2" onClick={() => setActiveStep((active) => active - 1)}>Previous</button>}
            {activeStep !== steps.length - 1 && <button type="button" className="btn btn-danger" onClick={() => setActiveStep((active) => active + 1)}>Next</button>}
        
        </div>
    )

}