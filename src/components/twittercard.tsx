import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faLayerGroup, faRetweet, faHeart, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function TwitterCard() {
    return (
        <div className="container">
            <div className="col col-md-2">
                <div className="row">
                    <img src={logo} alt="log" className="icon"></img>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <p>master <span style={{color: "gray"}}>@master_unic &#903; May 4, 2020</span></p>
                    <span className="dots">...</span>
                    
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque est, numquam accusamus nostrum dignissimos minima praesentium, consequuntur molestias sunt ratione! Dignissimos iure provident, modi omnis rerum illum fugiat obcaecati.
                </div>
                <div className="row row-icons">
                    <span>
                        <FontAwesomeIcon icon={faComment}/>
                        &nbsp;
                        3
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLayerGroup}/>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faRetweet}/>
                        &nbsp;
                        28
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faHeart}/>
                        &nbsp;
                        100
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUpload}/>
                    </span>
                </div>
            </div>
        </div>
    );
}