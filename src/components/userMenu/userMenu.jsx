import { useSelector } from "react-redux";

export const UserMenu = ()=>{
    const login = useSelector(state => state.user.login);
   return( <div>{login}<button>Log out</button></div>)
}