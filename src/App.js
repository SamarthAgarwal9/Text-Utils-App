import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import About from './component/About';
import React,{useState} from 'react';
import Alert from './component/Alert';
function App() {
const [mode,setMode]=useState("dark");
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);
}
const toggleMode=()=>{
  if(mode==="light")
  {  
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("dark Mode has been enabled","success");
  }
  else {setMode('light'); document.body.style.backgroundColor="white";
  showAlert("Light Mode has been enabled","success");}
}
  return (
   <>
  <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <NavBar  />*/}
    <Alert alert={alert}/>
    <div className="container my-5">
  <TextForm showAlert={showAlert} heading="Enter the Text Here"  toggleMode={toggleMode} />
    <About toggleMode={toggleMode}/>
    </div>
  </>
  );
}

export default App;
