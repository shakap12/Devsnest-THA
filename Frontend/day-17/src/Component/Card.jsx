  
const Card = (props) => {
    return (
        
        <div className="card">
            <div className="description">
          <h1>{props.food}</h1>
          <h2>you have consumed {props.cal} cals today</h2>
        </div>
        </div>
    
    );
  };
  
  export default Card;