import React from 'react';
import {connect} from 'react-redux';
import AddPollModal from './AddPollModal';
import {hideModal} from '../../actions/index';
import './modal.css';
import AddPollSuccessModal from './AddPollSuccessModal';
import AddPollFailureModal from './AddPollFailureModal';

class Modal extends React.Component {
    renderModal() {
        if (this.props.modalType != null) {
            return (
                <div className="modal" >
                    <div className="modal-inner">
                        <button className="close-button" onClick={this.props.hideModal}>x</button>
                        {this.renderChildModal()}
                    </div>
                </div>
            );
        }
        return null;
    }

    renderChildModal() {
        switch(this.props.modalType) {
            case 'ADD_POLL_MODAL':
                return <AddPollModal />;
            case 'ADD_POLL_SUCCESS_MODAL':
                return <AddPollSuccessModal />;
            case 'ADD_POLL_FAILURE_MODAL':
                return <AddPollFailureModal />;
            default:
                return null;
        }
    }

    render() {
        return this.renderModal();
    }
}

const mapStateToProps = function(state) {
    return {
        modalType: state.modalType
    };
};

export default connect(mapStateToProps, {hideModal: hideModal})(Modal);