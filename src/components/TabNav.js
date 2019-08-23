import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export default function TabNav() {
    return <Tab panes={panes} />
};

