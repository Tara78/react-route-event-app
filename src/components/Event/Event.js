import eventsFromAssets from '../../assets/eventsInfo.json'; 
import {useHistory} from 'react-router-dom'; 


function Event({}) {
   
      const history= useHistory(); 
 
    return (
                <div className="container">
                    <div className="event">
                    <div>
                    <h1 className="headTitle-e">Events</h1>
                    </div>
                    
                {eventsFromAssets.map((event)=>{
                    return(
                        <section key={event.id} onClick={()=> {history.push(`/buy/${event.id}`);
                    }}>
                        <div className="event-info"> 
                        <div className="chart"> <p className="date-e">{event.date_event}</p></div>
                        <div className="event-palce">
                        <p className="title">{event.title}</p>
                        <p className="place">{event.place}</p>
                        <div className="time-price">
                        <p className="time-e">{event.time}</p>
                         <p className='price-e'>{event.price}</p>
                        </div>

                        </div>
                                           
                        </div>

                        </section>
                        
                    )

                })}
                           </div>

            </div>
        
    );
}

export default Event;