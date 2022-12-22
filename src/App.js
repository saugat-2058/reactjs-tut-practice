
import './App.css';

import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';

function App() {
  // const obj = {title:"TextUtils",aboutText:"About TextUtils",change:7}
  return (
  <>
{/* way to pass the number is inside the curly braces and string inside the inverted commmas */}
<Navbar title="TextUtils"  aboutText="About TextUtils" change={7}/>
{/* passing props as the objects */}
{/* <Navbar {...obj}/> */}
<div className='container my-3'>
<Textform heading="Enter a text to analyze"/>
{/* <About/> */}
</div>
  </>
  );
}

export default App;
