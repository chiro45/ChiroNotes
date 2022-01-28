import Proptypes from 'prop-types'
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"




//rutas que se pueden acceder ya una vez que el usuario ha sido logueado

export const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
return(
    <Route{...rest}
    component={(props)=>(
        (isAuthenticated)
        ?(<Component{...props}/>)
        :(<Redirect to="/auth/login"/>)
    )}

    />
   

)
}

PrivateRoutes.prototypes = {
    isAutenticated: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired
}
