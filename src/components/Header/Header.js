import React from "react";
import "./Header.css";

const Header = props => (
    
    <div className="header">
        <div className="title1">Looney Tunes</div>
        <br></br>
        
        <br></br>
        <div className="title2">Memory Game!</div>
        <br></br>
        <div className="description">
        <div>Don't click on</div>
        <div>the same character</div>
        <div>more than once or you lose!</div>
        </div>
        <div className="score">
        <br></br>
            Score: {props.score}
        </div>
        <br></br>
        <div className="highScore">
            High Score: {props.highscore}
        </div>
    </div>
);

export default Header;