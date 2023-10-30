import { Link} from "react-router-dom";
import { UserMenu } from "components/userMenu/userMenu";
export const AppBar = () =>{
    return (
        <header>
            <nav>
                <Link to="/login">log in</Link>
            </nav>
            <UserMenu/>
            </header>
    )
}