import React from "react";
import CreateModal from "./CreateModal";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateCollapsible from "./CreateCollapsible";
import "../App.css";

class App extends React.Component{
  constructor(){
    super();
    this.popup=this.popup.bind(this);
    this.popupCreate=this.popupCreate.bind(this);
    this.createRecipe=this.createRecipe.bind(this);
    this.requestCloseFn=this.requestCloseFn.bind(this);
    this.editPopup=this.editPopup.bind(this);
    this.editPopupCreate=this.editPopupCreate.bind(this);
    this.removeRecipe=this.removeRecipe.bind(this);
    this.state={
      popup:false,
      editPopup:false,
      recipeKey:{value:""},
      ingredients:{},
      names:{}
    };
  }
  

  createRecipe(inputs,name,key){
    const ingredients={...this.state.ingredients};
    ingredients[key]=inputs;
    const names={...this.state.names};
    names[key]=name;
    this.setState({ingredients,names});
  }

  removeRecipe(key){
    const names={...this.state.names};
    delete names[key]
    const ingredients={...this.state.ingredients};
    delete ingredients[key]
    this.setState({names,ingredients});
  }

  requestCloseFn(){
    this.setState({popup:false,editPopup:false});
  }

  componentWillMount(){
    const localStorageRef=localStorage.getItem("recipes-box-state");
    if(localStorageRef){
      this.setState({
        ingredients:JSON.parse(localStorageRef).ingredients,
        names:JSON.parse(localStorageRef).names
      });
    }
  }

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem("recipes-box-state",JSON.stringify(nextState));
  }

  popup(){
    if(this.state.popup===false){
      return;
    }
    return(
      <CreateModal state={this.state} popup="add" createRecipe={this.createRecipe} requestCloseFn={this.requestCloseFn} />
    );
  }

  popupCreate(){
    this.setState({popup:true});
  }

  editPopupCreate(){
    this.setState({editPopup:true});
  }

  editPopup(){
    if(this.state.editPopup===false){
      return;
    }
    return(
      <CreateModal state={this.state} createRecipe={this.createRecipe} requestCloseFn={this.requestCloseFn} />
    );
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <br />
          <div className="well well-lg">
            {Object.keys(this.state.names).map((key)=><CreateCollapsible removeRecipe={this.removeRecipe} editPopupCreate={this.editPopupCreate} key={key} index={key} recipeKey={this.state.recipeKey} names={this.state.names} ingredients={this.state.ingredients} /> )}
          </div>
          <button className="btn btn-primary btn-lg" type="button" onClick={this.popupCreate}>Add Recipe</button>
          {this.popup()}
          {this.editPopup()}
        </div>
      </div>
    );
  }
}

export default App;