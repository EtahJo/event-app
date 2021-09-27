import { useParams } from "react-router";
import useFetch from "./useFetch";

const Details = () => {

    const{ id }=useParams();
    const { data:event,error,isPending} =useFetch('http://localhost:8000/events/' + id);
    return ( 
        <div className="details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{ error }</div>}
            {event && (
                <article
                style={{
                    color: 'white',
                    textAlign:'center'
                }}>
                <h2>{event.title}</h2>
                <p style={{
                    color: 'orange',
                    fontStyle:'italic'
                }}>{event.place}</p>
                <div>{event.des}</div>
                </article>
            )}
        </div>
     );
}
 
export default Details;