import React from 'react';
import "./Css/Searchbar.css";
import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000018dd6d6fdfce344dfaa569bd4a35f0bf7');
const query = 'Nature';


export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      DataFromAPIUnsplash: [],
      DataFromAPIPexel: [],
    };
    this.SetSearchValue = this.SetSearchValue.bind(this);
    this.SetDataFromAPIUnsplash = this.SetDataFromAPIUnsplash.bind(this);
    this.SetDataFromAPIPexels = this.SetDataFromAPIPexels.bind(this);
    this.GetTextboxValue = this.GetTextboxValue.bind(this);
    this.setFinalValueForResult = this.setFinalValueForResult.bind(this);
  }

  SetSearchValue(value) {
    this.setState({
      searchValue: value
    })

  }
  SetDataFromAPIUnsplash(value) {
    this.setState({
      DataFromAPIUnsplash: value
    })
  }
  SetDataFromAPIPexels(value) {
    this.setState({
      DataFromAPIPexel: value
    })
  }
  GetTextboxValue(event) {
    const value = event.target.value;
    this.SetSearchValue(value);
  }
  setFinalValueForResult() {
    const searchValue = this.state.searchValue;
    fetch("https://api.unsplash.com/search/photos/?page=1&per_page=30&query=" + searchValue + "&client_id=heKasylIZZqDUwjnJByoKdGR0cexyaw83lvIQ2Fslbo")
      .then(response => response.json())
      .then((res) => {
        let data  ;
        client.photos.search({ query, per_page: 100 })
          .then(photos => {
            data = photos;
            this.SetDataFromAPIPexels(data);
            this.props.addDataAPI(res, data);
          });
          
      });

    // client.photos.search({ query, per_page: 100 })
    // .then(photos => {
    //   const data = photos;
    //   this.SetDataFromAPIPexels(data);
    // });
    // const UnsplashApiData = this.state.DataFromAPIUnsplash;
    // const PexelsApiData = this.state.DataFromAPIPexel;
    // console.log("from search ")
    // console.log(this.state.DataFromAPIPexel);
    // console.log(this.state.DataFromAPIUnsplash);
    this.SetSearchValue("");
  }
  render() {
    return (
      <div className="Searchbar">
        <div className="mainBody">
          <div className="searchbar-text">
            COME AND GET
                    <div className="form-inline">
              <input type="text" onChange={this.GetTextboxValue} style={{ "width": "100%", "margin": "auto" }} className="form-control form-control-lg" id="" placeholder="type something....." value={this.state.searchValue} />
            </div>
            <div className="form-inline">
              <button onClick={this.setFinalValueForResult} className="btn btn-group-lg btn-dark" style={{ "width": "100%", "marginTop": "2%" }} >Search</button>
            </div>
            THE BEST SHOT
        </div>
        </div>
      </div>
    );
  }
}

