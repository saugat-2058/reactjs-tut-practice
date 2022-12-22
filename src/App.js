
import './App.css';
import Navbar from './components/Navbar';

function App() {
  // const obj = {title:"TextUtils",aboutText:"About TextUtils",change:7}
  return (
  <>
{/* way to pass the number is inside the curly braces and string inside the inverted commmas */}
<Navbar title="TextUtils"  aboutText="About TextUtils" change={7}/>
{/* passing props as the objects */}
{/* <Navbar {...obj}/> */}
  </>
  );
}

export default App;
