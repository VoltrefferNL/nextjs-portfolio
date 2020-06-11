import React, { Component } from 'react';

class test extends Component {
    getInitialState: {
           isOpen: false
        };
    },
    _handleClick: function(e) {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen}, function() {
            this.props.onClick(this.state.isOpen);
        });
    },
    render: function() {
        var iconClass = classNames('fa', this.state.isOpen ? 'fa-times' : 'fa-bars');
        return(
            <a id="menu-toggle" onClick={this._handleClick}>
                <i className={iconClass}></i>
            </a>
        )
    }
}

export default test;

export let MenuToggle = React.createClass({

});