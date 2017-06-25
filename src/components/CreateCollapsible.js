import React from "react";
import PropTypes from "prop-types";
import CollapsibleContent from "./CollapsibleContent";
import Collapsible from "react-collapsible";

class CreateCollapsible extends React.Component{
    constructor(){
        super();
        this.removeRecipeWrapper=this.removeRecipeWrapper.bind(this);
    }

    removeRecipeWrapper(){
        this.props.removeRecipe(this.props.index);
    }

    render(){
        const details=this.props;
        const element=(
            <div className="alert alert-success alert-dismissible" role="alert">
                <button onClick={this.removeRecipeWrapper} type="button" className="close" data-dismiss="alert" aria-label="Close" ><span aria-hidden="true" >&times;</span></button>
                <p>{details.names[details.index].name}</p>
            </div>
        );
        return(
        <Collapsible trigger={element}>
            <CollapsibleContent recipeKey={details.recipeKey} ingredients={details.ingredients} editPopupCreate={details.editPopupCreate} key={details.index} index={details.index} />
        </Collapsible>
        );
    }
}

CreateCollapsible.protoType={
    index:PropTypes.string.isRequired,
    editPopupCreate:PropTypes.func.isRequired,
    ingredients:PropTypes.object.isRequired,
    names:PropTypes.object.isRequired,
    recipeKey:PropTypes.object.isRequired,
    removeRecipe:PropTypes.object.isRequired
}

export default CreateCollapsible;