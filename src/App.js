import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/headerComponent';
import FooterCompoent from './components/footerComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import ViewComponent from './components/viewComponent';
import { withRouter } from './components/withRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent/>} />
            <Route path="/employees" element={<ListEmployeeComponent/>} />
            <Route path="/add" element={<CreateEmployeeComponent/>} />
            <Route path="/add/:id" element={<CreateEmployeeComponent/>} />
            <Route path="/view/:id" element={<ViewComponent/>} />
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>  */}
          </Routes>
        </div>
        <br></br>
        <FooterCompoent />
      </Router>
    </div>
  );
}

export default App;
