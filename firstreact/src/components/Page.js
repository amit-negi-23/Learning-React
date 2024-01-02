export default function Page(props){
    return(
        <div>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button>{props.btn}</button>
        </div>
    )
}