import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
