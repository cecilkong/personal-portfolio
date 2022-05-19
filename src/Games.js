import './Games.css'

const Games = () => {
    return ( 
        <div>
                <h1 className="page-title">games</h1>
                <img src= {require("./works/equinox/library-hero.png")} className="game-cover" alt=""></img>
                <img src= {require("./works/restore/titlescreen.png")} className="game-cover" alt=""></img>
                <img src= {require("./works/subject1017/cover.png")} className="game-cover" alt=""></img>
        </div>
     );
}
 
export default Games;