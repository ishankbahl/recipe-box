import React from "react";
import PropTypes from "prop-types";

class CollapsibleContent extends React.Component{
    constructor(){
        super();
        this.editPopupCreater=this.editPopupCreater.bind(this);
    }

    editPopupCreater(){
        this.props.recipeKey.value=this.props.index;
        this.props.editPopupCreate();
    }

    render(){
        return(
            <div className="white">
                <div>
                    <h3>Ingredients</h3>
                </div>
                <hr />
                <div>
                    <ul className="list-group">
                        {this.props.ingredients[this.props.index].ingredients.map((ingredient,index)=><li key={index} className="list-group-item">{ingredient}</li>)}
                    </ul>
                </div>
                <div>
                    <button className="btn btn-default" type="submit" onClick={this.editPopupCreater} >Edit</button>
                </div>
            </div>
        );
    }
}

CollapsibleContent.propTypes={
    ingredients:PropTypes.object.isRequired,
    index:PropTypes.string.isRequired,
    editPopupCreate:PropTypes.func.isRequired,
    recipeKey:PropTypes.object.isRequired
};

export default CollapsibleContent;