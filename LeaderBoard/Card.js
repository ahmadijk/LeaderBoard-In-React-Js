

function Card({children ,className}){
    return( <div className={className} style={{width:"60%",align:"center", border:"1px solid lightgray ", display:"block",padding:"10px",boderRradius:"10px",marginLeft:"auto",marginRight:"auto"}}>
        {children}  
    </div>)
}
export default Card ;