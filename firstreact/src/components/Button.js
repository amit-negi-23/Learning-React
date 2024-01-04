import React from "react"

export default function Button({title, action}){

    function emptybtn(){
        console.log('empty btn clicked')
    }

        return (
            <button onClick={(action===undefined)?emptybtn:action} className="ps-5 pe-5 mt-3 ms-3 btn btn-success">{title}</button>
        )
}