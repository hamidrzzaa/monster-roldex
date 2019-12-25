import React from 'react'

const Info=(props)=>{
    return (
        <div>
            <h1>Info</h1>
            <p>the is : {props.info}</p>
        </div>
    )
}

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>{
        return (
            <div>
            {props.king?<h1>Wolf is here</h1>:null}
                <p>You are with the king</p>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

const requireAuth=(WrappedComponent)=>{
    return (props)=>{
        
       return( <div>
            <p>{props.isAuth?<WrappedComponent {...props}/>:'please login first'}</p>
            
        </div>)
    }
}

export default requireAuth(Info)