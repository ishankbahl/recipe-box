import React from "react";
import PropTypes from "prop-types";

class RecipeAdd extends React.Component{
    constructor(){
        super();
        this.addRecipe=this.addRecipe.bind(this);
    }

    addRecipe(){
        const ingredients={
            ingredients:this.ingredients.value
        };
        const name={
            name:this.name.value
        };
        this.props.onRequestClose();
        this.props.createRecipe(ingredients,name);
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3>Add a Recipe</h3>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.onRequestClose} ><span aria-hidden="true" >&times;</span></button>
                </div>
                <hr />
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="RecipeName">Recipe</label>
                            <input ref={(input)=>this.name=input} className="form-control" id="RecipeName" placeholder="Recipe Name" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="RecipeIngredients">Ingredients</label>
                            <textarea ref={(input)=>this.ingredients=input} className="form-control" id="RecipeIngredients" placeholder="Enter Ingredients,Separated,By Commas" type="text" />
                        </div>
                    </form>
                </div>
                <hr />
                <div className="panel-body">
                    <button type="button" className="btn btn-primary" onClick={this.addRecipe}>Add Recipe</button>
                    <button type="button" className="btn btn-default" onClick={this.props.onRequestClose}>Close</button>
                </div>
            </div>
        );
    }
}

RecipeAdd.propTypes={
    createRecipe:PropTypes.func.isRequired,
    onRequestClose:PropTypes.func.isRequired
}

export default RecipeAdd;