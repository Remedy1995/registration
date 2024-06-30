import { useState, useEffect } from "react";
import { UserService } from "../Services/JobService";

const FetchAllApprovals = () => {
    const [allapplications, setApproveApplications] = useState([])

    useEffect(() => {
        const handleApplications = () => {
            UserService.GetAllApprovals().then(data => {
                setApproveApplications(data);
            }).catch(error => {
        console.log(error)
            })
        }
        handleApplications();
    }, [])

    return {allapplications };
}

export default FetchAllApprovals;