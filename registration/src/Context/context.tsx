import React, { useState } from 'react';
import { useEffect } from 'react';



const AuthContext = React.createContext({});
export default AuthContext;

interface RegistrationProps {
    firstname: string,
    lastname: string,
    email: string,
    ssn: string,
    dob: string,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    eligibility: string,
    educational_level: string,
    higher_certificate_level: string,
    jobtitle: string,
    salary_expectation: string,
    skills: string,
    phone: string


}

interface AuthContextProviderProps {
    children?: React.ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((mode) => !mode)
    }


    const [data, setData] = useState<Array<RegistrationProps>>([{
        firstname: '',
        lastname: '',
        email: '',
        ssn: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        eligibility: '',
        educational_level: '',
        higher_certificate_level: '',
        jobtitle: '',
        salary_expectation: '',
        skills: '',
        phone: ''

    }]);

    return (
        <AuthContext.Provider value={{ data, setData }}>
            {children}
        </AuthContext.Provider>
    )
}


