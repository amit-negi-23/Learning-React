import React from "react";

export default function DefaultForm({registered}){

    if(registered===true){
        return(
            <div className="form col-md-4">
            <h1>Login form</h1>
                <div className="mb-2">
                    <input type="text" placeholder="enter name"/>
                </div>
                <div className="mb-2">
                    <input type="email" placeholder="enter email"/>
                </div>

                <button className="btn btn-success btn-sm">Log in</button>
        </div>
        )
    }else{
        return(
            <div className="form col-md-4">
                <h1>Registration form</h1>
                    <div className="mb-2">
                        <input type="text" placeholder="enter name"/>
                    </div>
                    <div className="mb-2">
                        <input type="email" placeholder="enter email"/>
                    </div>
    
                    <button className="btn btn-primary btn-sm">Log in</button>
            </div>
        )
    }

   
}