import { useState } from "react";
import { Stepper } from "react-form-stepper";
import StepLabels from "../../helpers/StepperLabels";
import Client from "../client-information";
import Account from "../job-information";
import PhoneScreen from "../main-phone";
import AccountSummary from "../summary";
import WelcomeScreen from "../landingpage";
import CompletedPage from "../CompletedPage";




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
    console.log('Ste', StepLabels.map((data) => (data.label)));
    const steps = [
        { label: 'User details' },
        { label: 'payment' },
        { label: 'Booking Confirmation' }
    ]

    const [activeStep, setActiveStep] = useState(0)


//this function moves the stepper to the next page
    function NextActiveStep() {
        setActiveStep(activeStep + 1);
    }
//this function moves the page to the previous page
    function PreviousActiveStep() {
        setActiveStep(activeStep - 1);
    }
    


    function SectionComponent() {
        console.log('my activeStep', activeStep);
        console.log('steps length', steps.length);
        switch (activeStep) {
            case 0:
                return <WelcomeScreen client={""} NextActiveStep={NextActiveStep} />
            case 1:
                return <PhoneScreen client={""} NextActiveStep={NextActiveStep} PreviousActiveStep={PreviousActiveStep} />
            // case 2:
            //     return <VerificationScreen client={""} NextActiveStep={NextActiveStep} PreviousActiveStep={PreviousActiveStep}  />
            case 2:
                return <Client client={""}  NextActiveStep={NextActiveStep}   PreviousActiveStep={PreviousActiveStep} />
            case 3:
                return <Account client={""}  NextActiveStep={NextActiveStep}   PreviousActiveStep={PreviousActiveStep}  />
            // case 5:
            //     return <Trustee client={""} NextActiveStep={NextActiveStep}   PreviousActiveStep={PreviousActiveStep}  />
            // case 6:
            //     return <Beneficiary client={""} NextActiveStep={NextActiveStep}   PreviousActiveStep={PreviousActiveStep} />
            case 4:
                return <AccountSummary client={""}  NextActiveStep={NextActiveStep} PreviousActiveStep={PreviousActiveStep}/>
            case 5:
                return <CompletedPage client={""} successMessage={""} NextActiveStep={NextActiveStep} />
            // case 9:
            //     return <Document client={""} NextActiveStep={NextActiveStep}   PreviousActiveStep={PreviousActiveStep} />
            default:
                return null;

        }


    }

    return (

        <div className="mx-8">
            <Stepper steps={StepLabels} activeStep={activeStep} style={{ overflow: 'auto', width: '100%'}} />
            {

                SectionComponent()

            }
            {/* 
{(activeStep !== 0 && activeStep !== steps.length - 1) && <button type="button" className="btn btn-danger mx-2" onClick={() => setActiveStep((active) => active - 1)}>Previous</button>}
            {activeStep !== steps.length - 1 && <button type="button" className="btn btn-danger" onClick={() => setActiveStep((active) => active + 1)}>Next</button>} */}

            {/* {(activeStep !== 0) && <button type="button" className="btn btn-danger mx-2" onClick={() => setActiveStep((active) => active - 1)}>Previous</button>} */}
            {/* {activeStep !== StepLabels.length - 1 && <button type="button" className="btn btn-danger" onClick={NextActiveStep}>Next</button>} */}

        </div>
    )

}