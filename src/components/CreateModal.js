import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import RecipeAdd from "./RecipeAdd";

class CreateModal extends React.Component{
    render(){
        const details=this.props;

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
                    onRequestClose={details.requestCloseFn}
                    //closeTimeoutMS={n}
                    shouldCloseOnOverlayClick={true}
                    style={customStyle}
                    contentLabel="Modal" >
                        <RecipeAdd state={details.state} createRecipe={details.createRecipe} onRequestClose={details.requestCloseFn} />
                </Modal>
            );
    }
}

CreateModal.propTypes={
    createRecipe:PropTypes.func.isRequired,
    requestCloseFn:PropTypes.func.isRequired,
    state:PropTypes.object.isRequired
}

export default CreateModal;