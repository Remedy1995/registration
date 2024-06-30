import { useState } from "react";
import BreadCrumb from "./components/BreadCrumb";

interface ClientProps {
    client: string,
    NextActiveStep: () => void
}



function WelcomeScreen({ client, NextActiveStep }: ClientProps) {
     
  const moveToNextScreen = (e :any) => {
        e.preventDefault()
        NextActiveStep()
    }

    console.log('my NextActive', NextActiveStep)
    const [formData, setFormData] = useState<{
        acceptTerms: boolean
    }>({
        acceptTerms: true
    });

    const AcceptCondition = (event: any) => {
        console.log('my event', event.target.value, event.target.checked)
        if (event.target.checked) {
            setFormData((currentValue) => ({
                ...currentValue,
                acceptTerms: false
            }))
        }
    }
    return (
        <>


            {/* <Pills showPillsPhoneActive={true} showPillsClientActive={false} showPillsAccountActive={false} showPillsTrusteeActive={false} showPillsBeneficiaryActive={false} showPillsSummaryActive={false} showValidationAndSubmissionActive={false} showDueDilligenceActive={false} /> */}
            <div className="row justify-content-center">
                <BreadCrumb url={""} page={"Accept Terms And Conditions"} urlname={"Home"} />
                <div className="col-sm-6 col-md-12 col-lg-12 bg-white p-5">
                    <h5 className="text-danger h4">Grej Staffing Agency</h5>
                    <p className="">Before you proceed ensure you are eligible and click Next</p>
                    <div className="form-check ">
                        <input className="form-check-input" type="checkbox" value="Click_to_accept" id="flexCheckChecked" onChange={AcceptCondition} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Click to Accept
                        </label>
                    </div>
                </div>
            </div>

            <div className="d-flex mt-2">
                {/* <div className="me-auto">
                        <input className="btn btn-danger px-4 py-2" type="submit" value="Prev" />
                    </div> */}
                <div className="ms-auto">
                    <input className="btn btn-danger px-4 py-2" type="submit" value="Next" disabled={formData.acceptTerms} onClick={moveToNextScreen} />
                </div>
            </div></>




    )
}


export default WelcomeScreen;