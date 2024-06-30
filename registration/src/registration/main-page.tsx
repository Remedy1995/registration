import StepperWrapper from "./components/stepper-components _main";
import { useContext } from "react";
import AuthContext from "../Context/context";
import logo from '../logo.jpeg';

interface FormProps {
    formName: string,
    formId: number
}



function JobForm({ formName, formId }: FormProps) {

    const { Data }: any = useContext(AuthContext);
    console.log('theee', Data)

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 col-md-2 col-lg-2 p-0 mx-sm-0 mx-md-3 mx-lg-3">
                <div className="d-flex justify-content-center mt-5 ms-2">
                            <img src={logo} width={250} style={{borderRadius : "10px"}} />
                        </div>
                    <div className="card mt-2 py-4">
                       
                        <div className="p-3 text-center">
                            <p className="h2 text-dark">GREJ STAFFING AGENCY</p>
                            <p className=" fs-6 p-2 text-center text-dark">
                                We have lot of jobs here, Click Next to Continue
                                {/* <p className="lead fs-6"><a href="" className="text-white">Terms and Conditions</a></p> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9">
                    {/* <div className="row mt-1 p-sm-0 p-md-5 p-lg-5"> */}
                    <div className=" card bg-light mt-5">
                        <div className="card-body">
                            {/* <WelcomeScreen client="" /> */}
                            <StepperWrapper />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default JobForm;

// function setClientName(arg0: (currentValue: any) => any) {
//     throw new Error("Function not implemented.");
// }
