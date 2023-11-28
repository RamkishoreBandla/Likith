import DynamicInputs from "./DynamicInputs";
import NavComp from "./NavComp";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavComp/>
    {/* <div className="container">
      <div className='row'>
        <div className='col'>
          <DynamicInputs/>
        </div>
      </div>
    </div> */}
    </BrowserRouter>
    </>
  );
}

export default App;
