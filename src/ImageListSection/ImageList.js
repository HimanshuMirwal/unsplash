import React from "react";
import "../ImageListSection/Css/ImageList.css";


function ImageList(props) {
    console.log(props.DataFromAPI.results);
    console.log(props.DataFromApiPexel.photos);
    const APIDATA = props.DataFromAPI.results;
    const APIDATAPexels = props.DataFromApiPexel.photos;

    return (
        <div className="ImageList">
            <div className="MainImageList">
                <div className="">
                     {APIDATA.map(users => (

                        <div className="card" key={users.id}>
                            <div className="card-block" key={users.id+2121}>
                                <img src={users.links.download} alt={users.tags.title} height="80%" width="100%" />
                            </div>
                            <div className="card-block"  key={users.id}>
                                <p className="card-text">
                                    <img src="https://img.icons8.com/ios-glyphs/25/000000/user-male.png" style={{ "marginBottom": "1%" }} alt="" />
                                    {"  " + users.user.first_name}
                                </p>
                                <a href={users.links.download} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-group-lg btn-dark" style={{ "width": "100%" }}>
                                        <i className="fa fa-download"></i> full Image
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))
                    } 
                     {APIDATAPexels.map(users2 => (

                        <div className="card" key={users2+users2.src.original} >
                            <div className="card-block">
                                <img src={users2.src.original} alt="" height="80%" width="100%" />
                            </div>
                            <div className="card-block" key={users2+users2.src.original}>
                                <p className="card-text">
                                    <img src="https://img.icons8.com/ios-glyphs/25/000000/user-male.png" style={{ "marginBottom": "1%" }} alt="" />
                                    {"  " + users2.photographer}
                                </p>
                                <a href={users2.src.original} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-group-lg btn-dark" style={{ "width": "100%" }}>
                                        <i className="fa fa-download"></i> full Image
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    );
}
export default ImageList;