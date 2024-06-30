import { useState } from "react";
import BreadCrumb from "./components/BreadCrumb";


interface ClientProps {
    client: string,
    NextActiveStep: () => void,
    successMessage : string
}



function CompletedPage({ client, NextActiveStep,successMessage }: ClientProps) {
     
  const moveToNextScreen = (e :any) => {
        e.preventDefault()
        window.location.href='/';
    }
    return (
        <>


            {/* <Pills showPillsPhoneActive={true} showPillsClientActive={false} showPillsAccountActive={false} showPillsTrusteeActive={false} showPillsBeneficiaryActive={false} showPillsSummaryActive={false} showValidationAndSubmissionActive={false} showDueDilligenceActive={false} /> */}
            <div className="row justify-content-center">
                <BreadCrumb url={""} page={"Confirmation page"} urlname={"Home"} />
                <div className="col-sm-6 col-md-12 col-lg-12 bg-white p-5">
                    <h5 className="text-danger h3">We have received your request successfully...</h5>
                    <p className="">Process Completed... We are reviewing your application and will get back to you in the next 48 hours.</p>
                </div>
            </div>

            <div className="d-flex mt-2">
                <div className="ms-auto">
                    <input className="btn btn-danger px-4 py-2" type="submit" value="Exit" onClick={moveToNextScreen} />
                </div>
            </div></>




    )
}


export default CompletedPage;