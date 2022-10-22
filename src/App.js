import './App.css';
import Chat from "./components/Chat";
import {auth} from './dbConnect';
import {useAuthState} from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import LogOut from "./components/LogOut";


function App() {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className='App'>
     <header>
       <h1>Chat App</h1>
       <LogOut />
     </header>
      <section>
        {user ? <Chat /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
