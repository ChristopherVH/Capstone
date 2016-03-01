var React = require('react');
var SingleUserStore = require("../stores/SingleUserStore.js");
var Modal = require('boron/DropModal');

var Example = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
                <button onClick={this.showModal}>Open</button>
                <Modal ref="modal">
                    <button onClick={this.hideModal}>Close</button>
                </Modal>
            </div>
        );
    }
});

module.exports = Example;
