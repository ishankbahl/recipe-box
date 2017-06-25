import React from "react";
import PropTypes from "prop-types";

class RecipeAdd extends React.Component{
    constructor(){
        super();
        this.addRecipe=this.addRecipe.bind(this);
        this.checkName=this.checkName.bind(this);
    }

    checkName(name){
    const arr=Object.keys(this.props.state.names).map((key)=>this.props.state.names[key].name);
    const index=arr.indexOf(name);
    if (index===-1)
      return `recipe-${Date.now()}`;
    let mainKey;
    Object.keys(this.props.state.names).map((key)=>{
        if (this.props.state.names[key].name===arr[index])
            mainKey=key;
        return 0;
    });
    return mainKey;
    }

    handlingIngredients(ingredients){
        return ingredients.split(",").map((ingredient)=>ingredient.trim().split(" ").filter((s)=>s!=="").join(" "));
    }

    addRecipe(){
        const ingredients={
            ingredients:this.handlingIngredients(this.ingredients.value)
        };
        const name={
            name:this.name.value
        };
        const key=this.checkName(name.name);
        this.props.onRequestClose();
        this.props.createRecipe(ingredients,name,key);
    }

    render(){
        let heading,buttonText,name,ingredients;
        const details=this.props;
        if (details.state.popup===true){
            heading="Add a Recipe";
            buttonText="Add Recipe";
        }
        else {
            heading="Edit Recipe";
            buttonText="Edit Recipe";
            name=details.state.names[details.state.recipeKey.value].name;
            ingredients=details.state.ingredients[details.state.recipeKey.value].ingredients.join(",");
        }

        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3>{heading}</h3>
                    <button type="button" className="close" aria-label="Close" onClick={details.onRequestClose} ><span aria-hidden="true" >&times;</span></button>
                </div>
                <hr />
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="RecipeName">Recipe</label>
                            <input ref={(input)=>this.name=input} defaultValue={name} className="form-control" id="RecipeName" placeholder="Recipe Name" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="RecipeIngredients">Ingredients</label>
                            <textarea ref={(input)=>this.ingredients=input} defaultValue={ingredients} className="form-control" id="RecipeIngredients" placeholder="Enter Ingredients,Separated,By Commas" type="text" />
                        </div>
                    </form>
                </div>
                <hr />
                <div className="panel-body">
                    <button type="button" className="btn btn-primary" onClick={this.addRecipe}>{buttonText}</button>
                    <button type="button" className="btn btn-default" onClick={details.onRequestClose}>Close</button>
                </div>
            </div>
        );
    }
}

RecipeAdd.propTypes={
    createRecipe:PropTypes.func.isRequired,
    onRequestClose:PropTypes.func.isRequired,
    state:PropTypes.object.isRequired
}

export default RecipeAdd;