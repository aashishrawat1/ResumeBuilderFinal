import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Header';
import LoginForm from './Component/LoginForm';
import SignUp from './Component/SignUp';
import PersonalDetails from './Component/PersonalDetails';
import Education from './Component/Education';
import WorkHistory from './Component/WorkHistory';
import Final from './Component/Final';
import Menu from './Component/Menu';
import Skill from './Component/Skill'
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hobbies from './Component/Hobbies';
import Resume from './Component/Resume';
import ResumeOne from './ResumeTemplate/ResumeOne';
import ResumeTest from './Component/ResumeTest';
import AdminLogin from './Component/AdminLogin';
import Adminlistcomponent from './Component/Adminlistcomponet';
import ListFeedback from './Component/ListFeedback';
import UserListComponent from './Component/UserListComponent';
function App() {
  return (
         <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signup' element={<SignUp />} exact/>
          <Route path='/personal' element={<PersonalDetails/>} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<WorkHistory />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/resume' element={<ResumeTest /> } />
          <Route path='/feedback' element={<Final/>} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admincomponent' element={<Adminlistcomponent />} />
          <Route path='/feedbacklist' element={<ListFeedback />} />
          <Route path='/userlist' element={<UserListComponent />} />
          </Routes>
        </BrowserRouter>
        </div>
  )
}




export default App;
