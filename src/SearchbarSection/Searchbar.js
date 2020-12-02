import React from 'react';
import "./Css/Searchbar.css";
export default class Searchbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: "",
      DataFromAPI: [],
    };
    this.SetSearchValue = this.SetSearchValue.bind(this);
    this.SetDataFromAPI = this.SetDataFromAPI.bind(this);
    this.GetTextboxValue = this.GetTextboxValue.bind(this);
    this.setFinalValueForResult = this.setFinalValueForResult.bind(this);
    this.sendAPIDataBack = this.sendAPIDataBack.bind(this);
  }
  
  SetSearchValue(value) {
    this.setState({
      searchValue: value
    })
    
  }
  SetDataFromAPI(value) {
    this.setState({
      DataFromAPI: value
    })
  }
  GetTextboxValue(event) {
    const value = event.target.value;
    this.SetSearchValue(value);
    // console.log(value);
  }
  setFinalValueForResult() {
    const searchValue = this.state.searchValue;
    fetch("https://api.unsplash.com/search/photos/?page=1&per_page=30&query="+searchValue+"&client_id=heKasylIZZqDUwjnJByoKdGR0cexyaw83lvIQ2Fslbo")
      .then(response => response.json())
      .then((res) => {
        const data = res;
        this.props.addDataAPI(data);
        this.SetDataFromAPI(data);
      });
      this.SetSearchValue("");
  }
  sendAPIDataBack(){
    // const value = thic from searchbar.");
    
  }

  render() {
    return (
      <div className="Searchbar">
        <div className="mainBody">
          <div className="searchbar-text">
            COME AND GET
                    <div className="form-inline">    
                      <input type="text" onChange={this.GetTextboxValue} style={{ "width": "100%", "margin":"auto" }} className="form-control form-control-lg" id="" placeholder="type something....." value={this.state.searchValue} />
                    </div>
                    <div className="form-inline">    
                      <button onClick={this.setFinalValueForResult} className="btn btn-group-lg btn-dark" style={{"width": "100%","margin-top":"2%"}} >Search</button>
                    </div>
            THE BEST SHOT
        </div>
        </div>
      </div>
    );
  }
}

