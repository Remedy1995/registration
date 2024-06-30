import React from "react";
import { useState } from "react";
import { ValidateSpecialCharacters, StringContainsNumber, containsLetter, isLetter } from "../Validators/Validators";
import { Label } from "./components/Label";
import BreadCrumb from "./components/BreadCrumb";
import Pills from "./components/Pills";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../Context/context";


interface PhoneProps {
    client: string,
    NextActiveStep: () => void,
    PreviousActiveStep: () => void
}



function PhoneScreen({ NextActiveStep, PreviousActiveStep }: PhoneProps) {
    const { data, setData }: any = useContext(AuthContext);
    console.log('ghghghgh', data)
    console.log(NextActiveStep)
    console.log(PreviousActiveStep)

    const GoBack = (event: any) => {
        event.preventDefault();
        PreviousActiveStep();
    }

    const [formData, setFormData] = useState<{
        phoneNumber: string
        isTouched: boolean | undefined,
        hasError: boolean | undefined,

    }>({
        phoneNumber: data.phone,
        isTouched: false,
        hasError: false
    });

    const formSubmit = (event: any) => {
        event.preventDefault()

        //this moves the page to the next screen
        NextActiveStep();
        console.log('theee', data)
        //pushed data to our authContext
        setData((prevValue: any) => ({ ...prevValue, phone: formData.phoneNumber }))
    }




    const PhoneNumberHandler = (e: { target: { value: string; }; }) => {
        console.log(Number.isFinite(Number(e.target.value)))
        const phone = e.target.value;
        let hasError = false
        let isTouched = false;
        let value: any = ''
        //if value is not a string
        if (!Number.isFinite(Number(phone))) {
            hasError = true;
            isTouched = true;
        }
        let reverseArr = phone.split('').reverse();
        console.log('hey', reverseArr);
        const lastValue = reverseArr[reverseArr.length - 1];
        console.log('lastVal', lastValue)
        if (reverseArr.length > 10 || reverseArr.length < 10) {
            hasError = true;
            isTouched = true;
            console.log('incorrect')
        }

        else {
            hasError = false;
            isTouched = true;
        }


        if (e.target.value.length === 10) {
            value = formatPhone(e.target.value)
        }
        else {
            value = formatPhone(e.target.value)?.split('-').join("")
        }
       
        setFormData(currentValue => ({
            ...currentValue,
            phoneNumber: value,
            hasError,
            isTouched
        }))

    }

    console.log('mine phone', formData)

    const formatPhone = (data: any) => {
        let formattedPhone = '';
        let splitPhone = data?.split('');
        if (splitPhone?.length > 0) {
            splitPhone.map((val: any, index: any) => {
                if (index <= 2) {
                    formattedPhone += val
                }
                if (index === 3) {
                    formattedPhone += "-" + val
                }
                if (index > 3 && index <= 5) {
                    formattedPhone += val
                }
                if (index === 6) {
                    formattedPhone += "-" + val
                }
                if (index > 6) {
                    formattedPhone += val
                }

            })

            // let reformatPhone = "(" + formattedPhone?.split("-")[0]?.concat(")-") + "(" + formattedPhone?.split("-")[1]?.concat(")-") + "(" + formattedPhone?.split("-")[2]?.concat(")")
            return formattedPhone;
        }


    }

    console.log('formatted phone', formatPhone('2345678940'))


    return (
        <>
            <form>
                <div className="row justify-content-start mt-8 bg-white p-5">
                    <BreadCrumb url={""} page={"Submit Phone Number"} urlname={"Home"} />
                    <h5 className="card-title py-3 text-danger">Enter Phone Number</h5>

                    <div className="col-sm-6 col-md-7 col-lg-7">
                        <input type="text" className={formData.phoneNumber && formData.hasError && formData.isTouched ? "form-control p-2 is-invalid" : formData.phoneNumber && !formData.hasError && formData.isTouched ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02"
                            value={formData.phoneNumber
                            } onChange={PhoneNumberHandler} placeholder="1541234435" />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            Please provide a valid  Phone Number or Phone number is less than 10 digits
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-3">
                    <div className="me-auto">
                        <input className="btn btn-danger px-4 py-2" type="submit" value="Go Back" onClick={GoBack} />
                    </div>
                    <div className="ms-auto">
                        <input className="btn btn-danger px-4  py-2" type="submit" value="Next" disabled={!formData.phoneNumber || formData.hasError} onClick={formSubmit} />
                    </div>
                </div>
            </form>
        </>
    )
}


export default PhoneScreen;