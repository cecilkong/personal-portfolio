import './Personal.css';

const Personal = () => {
    return ( 
        <div>
                <h1 className="page-title">personal art</h1>
                <img src= {require("./works/personal/cherryblossomsgeorgia.png")} className="artwork" alt="yes"></img>
                <img src= {require("./works/personal/elemi.png")} className="artwork" alt="yes"></img>
                <img src= {require("./works/personal/hotel.png")} className="artwork" alt="yes"></img>
                <img src= {require("./works/personal/livingroom.png")} className="artwork" alt="yes"></img>
                <img src= {require("./works/personal/pastry.png")} className="artwork" alt="yes"></img>
                <img src= {require("./works/personal/abyssshriek.png")} className="artwork" alt="yes"></img>
        </div>
     );
}
 
export default Personal;