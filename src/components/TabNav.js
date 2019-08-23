import React, { Component } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default class MenuBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item
                    name='Characters'
                    active={activeItem === 'Characters'}
                    onClick={this.handleItemClick}
                >
                    Characters
                </Menu.Item>

                <Menu.Item
                    name='Location'
                    active={activeItem === 'Location'}
                    onClick={this.handleItemClick}
                >
                    Location
                </Menu.Item>

                <Menu.Item
                    name='Episodes'
                    active={activeItem === 'Episodes'}
                    onClick={this.handleItemClick}
                >
                    Episodes
                </Menu.Item>
            </Menu>
        )
    }
}

