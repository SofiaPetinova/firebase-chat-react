import {auth} from '../dbConnect';

const LogOut = () => {
  function signOut(){
    signOut(auth)
  }
  return (
    <div>
      <button className="sign-out" onClick={()=>auth.signOut()}>Sign out</button>
    </div>
  );
};

export default LogOut;