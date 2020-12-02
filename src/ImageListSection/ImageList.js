import React from "react";
import "../ImageListSection/Css/ImageList.css";


function ImageList(props) {
    console.log(props.DataFromAPI.results);
    const APIDATA = props.DataFromAPI.results;
    return (
        <div className="ImageList">
            <div className="MainImageList">
                <div className="">
                    {
                        APIDATA.map(users => (

                            <div className="card" id={users.id}>
                                <div className="card-block">
                                    <img src={users.links.download} alt={users.tags.title} height="80%" width="100%" />
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">{users.tags.title}</h4>
                                    <p className="card-text">{users.alt_description + " " + users.description}</p>
                                    <p className="card-text"><img src="https://img.icons8.com/android/24/000000/clock.png" style={{"margin-bottom":"1%"}} alt=""/>{"  "+users.created_at}</p>
                                    <p><img src="https://img.icons8.com/emoji/30/000000/thumbs-up.png" style={{"margin-bottom":"1%"}} alt="" />{"  "+users.likes}</p>
                                    <p className="card-text">
                                        <img src="https://img.icons8.com/ios-glyphs/25/000000/user-male.png" style={{"margin-bottom":"1%"}} alt=""/>
                                        {"  "+users.user.first_name}
                                        </p>
                                    <p className="card-text"><img src="https://img.icons8.com/cute-clipart/25/000000/instagram-new.png" alt=""/>{"   "+users.user.instagram_username===null?"":users.user.instagram_username}</p>
                                    <p className="card-text"><img src="https://img.icons8.com/color/25/000000/twitter-squared.png" alt=""/>{"   "+users.user.twitter_username===null?"":users.user.twitter_username}</p>
                                    <a href={users.links.download} target="_blank" rel="noopener noreferrer">
                                        <button class="btn btn-group-lg btn-dark" style={{ "width": "100%" }}>
                                            <i class="fa fa-download"></i> full Image
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