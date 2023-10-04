// import { Component } from "react";
import { useState , useEffect} from "react";

const useLocalStorage=(key, defaultValue)=>{
  const [state, setState] = useState(()=> JSON.parse(window.localStorage.getItem(key)) ?? defaultValue);

  useEffect(() => {
    window.localStorage.setItem('password', JSON.stringify(state))
  }, [key, state])

  return [state, setState]

}
//New sighup form

export default function SignUpnew(){
const [email, setEmail] = useLocalStorage('email', '')
const [password, setPassword] =  useLocalStorage('password', '')


const handkeChange=e=>{

    switch(e.target.name){
        case 'email':
            setEmail(e.target.value)
            break
    case 'password':
    setPassword(e.target.value)
    break;
    default: return

}
 }

    return(
        <form autoComplete="off">
        <label>
          <span>Почта</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={ handkeChange}
          />
        </label>

<label>
  <span>Пароль</span>
  <input
    type="password"
    name="password"
    value={password}
    onChange={handkeChange}
  />
</label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    )
}

// export default class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form autoComplete="off">
//         <label>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
