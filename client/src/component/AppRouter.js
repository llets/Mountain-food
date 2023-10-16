import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import IndexPage from "../pages/IndexPage";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
  const {user} = useContext(Context)
  return (
      <Routes>
            {user.isAuth && authRoutes.map((a) =>
              <Route key={a.path} path = {a.path} element={a.element} exact/>
            )}
            {user.isAdmin && adminRoutes.map((a) =>
                <Route key={a.path} path = {a.path} element={a.element} exact/>
            )}
            {publicRoutes.map((a) =>
                    <Route key={a.path} path = {a.path} element={a.element} exact/>
                )}
        <Route path="*" element={<IndexPage/>} />
        </Routes>
  )
})

export default AppRouter
