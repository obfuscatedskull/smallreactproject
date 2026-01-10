import React from "react";



const searchBox = ({search, change}) => {
    return (
        <>
            <div className="pa2">
                <input className="pa3 ba b--green " type="search" placeholder="Search Boba's Friends" onChange={change}></input>
            </div>
        </>
    );
}

export default searchBox;