import React from "react";  
  
  const Template=({Memes,setTrim})=>{
    return(
        <div>
            {Memes.map((x)=>(
<div key={x.id} className="t1" onClick={()=>{
  setTrim(x);
}}>
  <div style={{backgroundImage: `url(${x.url})`}} className="bansal">
    </div>
</div>
))}
        </div>
    );
};
export default Template;