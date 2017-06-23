import React from "react";
import PropTypes from "prop-types";

class RecipeAlert extends React.Component{
    render(){
    return (
      <div className="alert alert-success" role="alert">
        <a href="#" className="alert-link">{this.props.state.names[this.props.index].name}</a>
      </div>
    );
    }
}

RecipeAlert.propTypes={
  index:PropTypes.string,
  state:PropTypes.object
}

export default RecipeAlert; 