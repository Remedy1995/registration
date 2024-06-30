import axios from 'axios';

class JobSeekerService {

    async RegisterJobSeeker(data) {
        const url = process.env.REACT_APP_SERVER_URL;
        try {
            console.log('my url',url)
            const res = await axios.post(`${url}/jobseeker/jobseeker`, data);
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