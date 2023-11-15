import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import NewReview from './components/NewReview';
import Logout from './components/Logout';
import Welcome from './components/Welcome';
import EditReview from './components/EditReview';
import DeleteReview from './components/DeleteReview';
import CoursePage from "./components/CoursePage";
import About from "./components/About";
import Privacy from "./components/Privacy"
import Ethics from "./components/Ethics"
import Contact from "./components/Contact"

function App() {

    return (
        <div className='page-body'>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Welcome />} />
                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/newReview' element={<NewReview />} />
                <Route path='/about' element={<About />} />
                <Route path='/ethics' element={<Ethics />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/reviews/edit/:id' element={<EditReview />}/>
                <Route path='/reviews/delete/:id' element={<DeleteReview />}/>
                <Route path="/course/:id" element={<CoursePage />} />
            </Routes>
            <Footer/>
        </div>

    );
}

export default App;
