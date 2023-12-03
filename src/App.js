import './App.css';
import { LoginSignup,LoginSignup1 } from './Components/LoginSignup/LoginSignup';

function App() {
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
        <div style={{flex:0.6,height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
          <LoginSignup1/>
        </div>
        <div style={{flex:0.4,height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
          <LoginSignup/>
        </div>
    </div>
  );
}

export default App;
