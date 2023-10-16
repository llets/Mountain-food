import { BrowserRouter} from 'react-router-dom'
import AppRouter from './component/AppRouter'
import Foot from "./component/Foot";
import Head from "./component/Head";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useContext, useEffect} from "react";
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setTimeout(() => {
        //     check().then(data =>{
        //         user.setUser(true)
        //         user.setIsAuth(true)
        //     }).finally(() => setLoading(false))
        // }, 1000)
            check().then(data =>{
                user.setUser(true)
                user.setIsAuth(true)
                user.setIsAdmin(data.role === 'ADMIN')
                user.setId(data.id)
            }, data => {
                user.setUser({})
                user.setIsAuth(false)
                user.setIsAdmin(false)
                user.setId({})
            })
    }, []);

    // if(loading){
    //     return <Spinner animation="border" role="status"/>
    // }
  return (
   <>
      <BrowserRouter>
          <Head/>
       <AppRouter/>
          <Foot/>
      </BrowserRouter>
   </>
  )
})

export default App
