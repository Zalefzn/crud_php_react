
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreateUser from './Components/CreateUser';
import UserList from './Components/UserList';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="header-container">
      <div className="App">
        <h1 className="page-header text-center">Ars University Data</h1>
        <Router>
          <Link to="user/create" className="btn btn-success">Add User</Link>
          <Routes>
            <Route index element={<UserList />}></Route>
            <Route path="user/create" element={<CreateUser/>}></Route>
            <Route path="user/:id/edit" element={<EditUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
