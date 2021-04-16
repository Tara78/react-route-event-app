import React from 'react';
import eventsFromAssets from '../../assets/eventsInfo.json'; 
import {useParams} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom'; 

const Ticket = (event) => {
    const history = useHistory(); 

    const {id} = useParams(); 
    console.log(id); 

    const foundEvent = eventsFromAssets.filter(event=> {
        return event.id === id
    });
    console.log(foundEvent[0]);
    return (
           <section className="event-t">
            <header className="header-t">
                <h1>Tack för din </h1>
                <h1>beställning </h1>
            </header>
            <div className="ticket-page">
                <div className="title-t">
                <p className="W">WHAT</p>
                <h2 className="headTitle-t">{foundEvent[0].title}</h2>
<p className="line-t"> </p>
                

                </div>

                <div className="titel-where">
                <p className="W">WHERE</p>
                <h2 className="place-t" >{foundEvent[0].place}</h2>

                
                </div>
              

                <div className="bottom-t">
                    <div className="when ">
                    <p className="W">WHEN</p>
                    <h3 className="info-t">{foundEvent[0].date_ticket}</h3>
                    </div>
                    <div className="from">
                    <p className="W">FROM</p>
                    <h3 className="info-t">{foundEvent[0].time_ticket_from}</h3>
                    </div>
                    <div className="to">
                    <p className="W">TO</p>
                    <h3 className="info-t">{foundEvent[0].time_ticket_to}</h3>
                    </div>
                   
                    </div>
                    <button className='button-t' type ='button' onClick={()=> history.push(`/`)}>Tillbaka till Events</button>  

            </div>
        </section>
    )
}

export default Ticket
 