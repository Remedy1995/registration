import { useState, useEffect } from "react";
import { UserService } from "../Services/JobService";


const HRApplications = (id) => {
    const [allapplications, setApproveApplications] = useState([])
  
    useEffect(() => {
        const handleApplications = () => {
            UserService.getHRApplications().then(data => {
                setApproveApplications(data);
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
        }
        handleApplications();
    }, [])

    return {allapplications };
}

export default HRApplications;