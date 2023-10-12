const { Link } = require("react-router-dom")


const Dogs = ()=>{
    return(
        <div>
            {['dog-1', 'dog-2', 'dog-3'].map(dog=>{
                return(
                    <Link key={dog} to={dog}>{dog}</Link>
                )
            })}
        </div>
    )
}

export default Dogs