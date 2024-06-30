import './App.css';
import JobForm from './registration/main-page';
import AuthContext from './Context/context';
import { AuthContextProvider } from './Context/context';
import { useContext } from 'react';
function App() {
  return (
    <AuthContextProvider>
    <JobForm formName={'Ultimate Education'} formId={5} />
    </AuthContextProvider>
    // <StepperWrapper/>
  );
}

export default App;
