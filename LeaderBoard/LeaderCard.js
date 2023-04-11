import Card from "./Card";
function LeaderCard({name , description ,points}){
 
    return(<><Card className="mt-3">
        <div className='flex'>
        <div className='flex'>
            <img className='img-1' src='https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set- 
            avatar-image-vector-icon-stock-vector-design-avatar-dummy-sign-137159692.jpg'/>
          </div>
         <div style={{marginLeft:"40px" ,textAlign:"left" }}>
            <h3>{name}</h3>
            <p >{description}</p> 
         </div>
        <div>
         <h2 style={{color:"orange" , marginLeft:"70px"}}>{points}</h2>
        </div>
        </div>
        </Card>
        </>
    )
}

export default LeaderCard;