import axios from 'axios';

class JobSeekerService {

    async RegisterJobSeeker(data) {
        try {
            const res = await axios.post(`http://localhost:4000/jobseeker/jobseeker`, data);
            const response = res.data;
            console.log(response);
            if (response.status) {
                return response;
            }
        } catch (error) {
            return error;
        }
    }

}




export const JobService = new JobSeekerService();