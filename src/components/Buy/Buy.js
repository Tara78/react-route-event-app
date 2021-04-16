import React from 'react'; 
import {useHistory} from 'react-router-dom'; 
import {useParams} from 'react-router-dom'; 
import eventsFromAssets from '../../assets/eventsInfo.json'; 
// import style from './Buy.module.css' ; 

function Buy(){

    const history = useHistory(); 

    const {id} = useParams(); 
    console.log(id); 

    const foundEvent = eventsFromAssets.filter(event=> {
        return event.id === id
    });

    return(
        <section className="container-b" >
            <div className= "event-b">
           <div className="subTitle-buy">  
            <h1>You are about to score </h1>
            <h1>some tickets to</h1>
            </div>
            <div className="title-date-place">
            <h2 className="headTitle-b" >{foundEvent[0].title}</h2>
            
            <div className="d-t-p-buy">

            <div className="date-time-b">
            <h3 className="date-buy">{foundEvent[0].date_buy}</h3>
            <h3 className="time-buy">{foundEvent[0].time_b}</h3>
            </div>
            <p className="place-buy">@{foundEvent[0].place}</p>
            </div>
            
            </div>

            <h2 className="price-buy">{foundEvent[0].price}</h2>
            
            <button className='button-b' type ='button' onClick={()=> history.push(`/ticket/${foundEvent[0].id}`)}>Beställ</button> 
            
            </div>
        </section>
    )

    
    }



export default Buy;

