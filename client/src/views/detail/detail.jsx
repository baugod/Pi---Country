import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../redux/axios";
import "./detail.Style.css"

export default function DetailCountry() {
 const { countryId } = useParams();
 const [country, setCountry] = useState(null); 
 const navigate = useNavigate();

 console.log(country.activities[0]);

 useEffect(()=> {
  axios
     .get(`http://localhost:3001/country/id/${countryId}`)
     .then((e)=> setCountry(e.data))
     .catch((err) => { return err })
    }, [countryId, navigate]);
    
   // console.log(e.data[0])
   

  
//      const activitiesId = country.activities?.map( e => {
//        return {
//            name: e.name,
//            duration: e.duration,
//            difficulty: e.difficulty,
//            season: e.season
//        }
//    });

  //console.log(activitiesId);

 return (
    <>
        <div className="containerDetail">
            <div className="containerinfo">
                <div>
                    <img className="flagContainer" src={country?.flags} alt="" />
                     <h1 className="titleDetail">{country?.name}</h1>

                <div className="infoContainer">
                    <div className="infoDetail">
                    <h4>
                        CONTINENT: <span>{country?.region}</span>
                    </h4> 
                    <h4>
                        SUB REGION: <span>{country?.subregion}</span>
                    </h4>
                    <h4>
                        CAPITAL: <span>{country?.capital}</span>
                    </h4>
                    <h4>
                        POPULATION:{""} <span>{new Intl.NumberFormat().format(country?.population)}</span>
                    </h4>
                </div>
            </div>
                </div>
                       {/* <div className="">
                    <h3>ACTIVITIES:</h3>
                    <span>{activitiesId?.length > 0 ? activitiesId.map( e => {
                        return (
                            <div key={e.id}>
                                <p>Name: {e.name}</p>
                                <p>Duration: {e.duration}</p>
                                <p>Difficulty: {e.difficulty}</p>
                                <p>Season: {e.season}</p>
                            </div>
                        )
                    }) : <p>No activities created</p> }</span>
                    </div>   */}
        </div>
        </div>
    </>
    )
}
