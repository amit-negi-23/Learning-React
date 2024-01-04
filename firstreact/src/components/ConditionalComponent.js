import React from 'react'

export default function ConditionalComponent({condition}) {

    return((condition===true) ? <div><h1>condition 1</h1></div> : <div><h1>Condition 2</h1></div>)
}