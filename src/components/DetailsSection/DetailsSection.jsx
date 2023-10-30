import { useEffect, useState } from "react";

const DetailsSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [dataType, setDataType] = useState("users") //users, posts, coments
  
 const toggleBtn =()=>{
    setShowDetails((prevState) => !prevState)
 }

 useEffect(()=>{
  console.log('useeffect')
 }, [])

  return (
    <div>
      <button type="button" onClick={toggleBtn}>Click to toggle the dettails</button>
      {!showDetails && 
      <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
      pariatur?"</p>}
      <div>
      <button className="typeBtn" type="button" onClick={()=> setDataType("users")}>Users</button>
      <button className="typeBtn" type="button" onClick={()=> setDataType("posts")}>Posts</button>
      <button className="typeBtn" type="button" onClick={()=> setDataType("coments")}>Coments</button>

      {dataType === 'users' && <p>Usera here</p>}
      {dataType === 'posts' && <p>Posts here</p>}
      {dataType === 'coments' && <p>Coments here</p>}
      </div>
    </div>
  );
};

export default DetailsSection;
