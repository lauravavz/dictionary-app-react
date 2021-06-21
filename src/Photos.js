import React from "react";

export default function Photos(props) {
    if (props.photos) {
    return (
        <div className="Photos">
            <div className="row">
            {props.photos.map(function(photo, index){
                return (
                    <div className="col-4" key={index}>
                    <img src={photo.src.landscape} alt="word" className="img-fluid"/>
                    </div>
                );
            })}
            </div>
        </div>
    );
    }
    else {
        return null;
    }
}