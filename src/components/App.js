import React from "react";
import Modal from "react-modal";
import Collapsible from "react-collapsible";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeAdd from "./RecipeAdd";
import ReciptAlert from "./ReciptAlert.js";
import "../App.css";

class App extends React.Component{
  constructor(){
    super();
    this.popup=this.popup.bind(this);
    this.popupCreate=this.popupCreate.bind(this);
    this.createRecipe=this.createRecipe.bind(this);
    this.requestCloseFn=this.requestCloseFn.bind(this);
    this.state={
      popup:false,
      ingredients:{},
      names:{}
    };
  }

  createRecipe(inputs,name){
    const ingredients={...this.state.ingredients};
    const key=`recipe-${Date.now()}`;
    ingredients[key]=inputs;
    const names={...this.state.names};
    names[key]=name;
    this.setState({ingredients,names});
  }

  requestCloseFn(){
    this.setState({popup:false});
  }

  popup(){
    if(this.state.popup===false){
      return;
    }
    const customStyle={
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(128, 128, 128, 0.5)'
      },
      content : {
        position                   : 'absolute',
        top                        : '0',
        left                       : '0',
        right                      : '0',
        bottom                     : '0',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '0px',
        display                    : 'inline-block',
        margin                     : 'auto',
        height                     : '455px',
        width                      : '595px'
      }
    }
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={afterOpenFn}
        onRequestClose={this.requestCloseFn}
        //closeTimeoutMS={n}
        shouldCloseOnOverlayClick={true}
        style={customStyle}
        contentLabel="Modal" >
            <RecipeAdd createRecipe={this.createRecipe} onRequestClose={this.requestCloseFn} />
      </Modal>
    );
  }

  popupCreate(){
    this.setState({popup:true});
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <br />
          <div className="well well-lg">
            {Object.keys(this.state.names).map(key=><ReciptAlert key={key} index={key} state={this.state} />)}
          </div>
          <button className="btn btn-primary btn-lg" type="button" onClick={this.popupCreate}>Add Recipe</button>
          {this.popup()}
        </div>
      </div>
    );
  }
}

export default App;