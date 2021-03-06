import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer />
   
        <ItemContainer cake /> 
        <ItemContainer  /> */}
        <UserContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
