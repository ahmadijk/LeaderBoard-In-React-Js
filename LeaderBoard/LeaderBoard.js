import React from 'react';
import Card from './LeaderBoard/Card';
import "./LeaderBoard/Card.css"
import { useState ,useRef} from 'react';
import './App.css'
import LeaderCard from './LeaderBoard/LeaderCard';

const users=[
    {
        id:1,
        name:"Ahmad ijaz",
        description:"MERN STACK DEVELOPER",
        points:1200,
        imageUrl:"",
    },
    {
        id:2,
        name:"Atta-Ullah Khan ",
        description:"MERN STACK DEVELOPER",
        points:1800,
        imageUrl:""
    },
    {
        id:3,
        name:"Roman Khan",
        description:"MERN STACK DEVELOPER",
        points:1900,
        imageUrl:""
    },
]


function LeaderBoard()
{

    const [Query , setQuery] = useState("");
    const [Error , setError]= useState(null);
    const [userarray ,setuserarray]=useState(users);
    const nameRef=useRef()
    const pointsRef=useRef()
    const descriptionRef=useRef()
    

    function Onsearch(){
        console.log(Query);
        if(Query.length < 3 ){
              setError("User name must be greater than 3 charachter");
              } else{
            setError(null)
            console.log(users.filter((user)=>user.name.includes(Query)))
            setuserarray(users.filter((user)=>user.name.includes(Query)))
        }
    }
    function OnchangeErorr(event){
        setQuery(event.target.value);
        if (event.target.value.length >= 3)
        setError(null);

    }
             
     function submithandler(event){
        event.preventDefault();
        if(nameRef.current.value && 
            descriptionRef.current.value &&
             pointsRef.current.value
             )
             {
            setuserarray
            ([
                {
                 id : userarray.length+1 ,
                 name : nameRef.current.value , 
                 description : descriptionRef.current.value , 
                 points: pointsRef.current.value ,
                 },
                 ...userarray,
                ]
                )
        }

     }

    return(
        <>
        <h1 style={{textAlign:"center"}} >Leader - Board</h1>
        <Card className="w-50 ">
        <h3>Add New User</h3>
        <form onSubmit={submithandler}>
            <div className='new-div'>
                <label className='new-div-1' >User Name</label>
                <input type={"text"} placeholder="Enter The Name of User" ref={nameRef}/>
            </div>
        </form>
        <form>
            <div className='new-div'>
                <label className='new-div-1'>Description</label>
                <input type={"text"} placeholder="Something About Yourself" ref={descriptionRef}/>
            </div>
        </form>
        <form>
            <div className='new-div'>
                <label className='new-div-1'>Points</label>
                <input type={"number"} placeholder="Enter Points of The user" ref={pointsRef}/>
            </div>
            <button className='btn-custom-1' style={{marginTop:"5px" }} onClick={submithandler}>Add User</button>
        </form>
        </Card>
        <Card className="w-50 mt-3">  
            <input type={"text"} placeholder="Search User" className={Error ? "inputerror" : "" } onChange={OnchangeErorr} value={Query} />
            <button className='btn-custom' onClick={Onsearch}>Search</button>
           {Error ?<div style={{color:"red"}}>{Error}</div> : " "}
        </Card>
        <Card ClassName="w-50">
          
          {userarray.length ? userarray.map(function(user){""
            return <LeaderCard key={user.id} name={user.name} description={user.description} points={user.points}/>
          }) : <div style={{color:"red"}}>No User Record Found</div>}
           
        </Card>
        </>
    )
}

  
export default LeaderBoard;


