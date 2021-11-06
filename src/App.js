import logo from './logo.svg';
import './App.css';
import  { Switch, Route } from  'react-router-dom';
import   Home  from  './components/Home/Home';
import  SignupForm  from  './components/SingUpForm/SignUpForm';

function App() {
  return (
    <div>
      {/* ROUTING START */}
      <Switch>
        <Route  path="/"  exact>
          <SignupForm />
        </Route>

      </Switch>
      {/* ROUTING END */}
    </div>
  );
}

export default App;
