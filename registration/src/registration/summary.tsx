import { useEffect, useState } from "react";
import BreadCrumb from "./components/BreadCrumb";
import CompletedPage from "./CompletedPage";
import AuthContext from "../Context/context";
import { useContext } from "react";
import { JobService } from "../Services/JobService";
import swal from 'sweetalert';
import { text } from "body-parser";
import { validateEmail } from "../Validators/Validators";
import ClipLoader from 'react-spinners/ClipLoader';

interface AccountSummaryProps {
    client: string,
    NextActiveStep: () => void,
    PreviousActiveStep: () => void
}




function AccountSummary({ client, PreviousActiveStep, NextActiveStep }: AccountSummaryProps) {
    const { data, setData }: any = useContext(AuthContext);
    const [showPage, setShowPage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("")
    const [showSpinners,setShowSpinners] = useState(false);
    console.log('data', data.firstname)

    const showNextPage = async (event: any) => {

        event.preventDefault()
        //post to the backend
        setShowSpinners(true)
        const registrationData = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            ssn: data.ssn,
            dob: data.dob,
            address: data.address,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            eligibility: data.eligibility,
            educational_level: data.educational_level,
            higher_certificate_level: data.higher_certificate_level,
            jobtitle: data.jobtitle,
            salary_expectation: data.salary_expectation,
            skills: data.skills,
            phone: data.phone

        }
        try {
            const response = await JobService.RegisterJobSeeker(registrationData);
            console.log('responseee', response)
            if (response?.response?.status === 422) {
                setShowSpinners(false)
                console.log(response.response.data.message)
                swal({
                    title: "Error",
                    text: response.response.data.message,
                    icon: "error",
                    buttons: {
                        confirm: {
                            text: "Okay",
                            value: true,
                            visible :true,
                             className : "bg-danger",
                             closeModal :true
                        }
                    
                    }
                })
            }

             if(response.status){
                setShowSpinners(false)
                NextActiveStep();
                setShowPage(true);
             }


               
                
        }
        catch (error) {
            console.log('my errror', error)
        }




    }

    const showPrevPage = (event: any) => {
        event.preventDefault()
        PreviousActiveStep();
    }
    return (
        <>
            {!showPage ? <>{
                showSpinners &&
            
                   ( <div   style ={{
                        position : 'fixed',
                        left : 0 ,
                        top : 0 ,
                        width : '100vw',
                        height : '100vh',
                        background :'rgba(0,0,0,0.4)',
                        backdropFilter : 'blur(3px)',
                        zIndex : 1
                    }}>
                     <div className="row d-flex justify-content-center align-content-center vh-100">   
                        <ClipLoader size={150} color="#ec5252" loading={showSpinners} speedMultiplier={5} />
                       </div>
                        </div>)
            }
                <div className="row justify-content-center">
                    <BreadCrumb url={""} page={"Summary"} urlname={"Home"} />
                    <div className="col-sm-6 col-md-6 col-lg-6 bg-white">
                        <p className="h5 p-3">Client Information</p>
                        <table className="table table-striped border border-5">
                           
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td> Full Name</td>
                                    <td>{data.firstname} {data.lastname}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Email</td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >Phone</td>
                                    <td>{data.phone}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >Address</td>
                                    <td>{data.address}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >City</td>
                                    <td>{data.city}</td>
                                </tr>

                                <tr>
                                    <th scope="row"></th>
                                    <td >State</td>
                                    <td>{data.state}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >Postal Code</td>
                                    <td>{data.zipcode}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >SIN</td>
                                    <td>{data.ssn}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >Date of Birth</td>
                                    <td>{data.dob}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td >Eligibility</td>
                                    <td>{data.eligibility}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 bg-white">
                        <p className="h5 p-3">Job Information</p>
                        <table className="table table-striped border border-5">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Educational Level</td>
                                    <td>{data.educational_level}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Higher Certificate Level</td>
                                    <td>{data.higher_certificate_level}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Job Title</td>
                                    <td>{data.jobtitle}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Salary expectation</td>
                                    <td>{data.salary_expectation}</td>
                                </tr>

                                <tr>
                                    <th scope="row"></th>
                                    <td>Skills</td>
                                    <td>{data.skills}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="d-flex mt-3">
                    <div className="me-auto">
                        <input className="btn btn-danger px-4 py-2" type="submit" value="Go Back" onClick={showPrevPage} />
                    </div>
                    <div className="ms-auto">
                        <input className="btn btn-danger px-4 py-2" type="submit" value="Next" onClick={showNextPage} />
                    </div>
                </div></>
                :
                <CompletedPage successMessage={""} client={""} NextActiveStep={NextActiveStep} />}
        </>


    )
}


export default AccountSummary;