import { BrowserRouter} from 'react-router-dom'
import AppRouter from './component/AppRouter'
import Foot from "./component/Foot";
import Head from "./component/Head";

function App() {
  return (
   <>
      <BrowserRouter>
          <Head/>
       <AppRouter/>
          <Foot/>
      </BrowserRouter>
   </>
  )
}

export default App
