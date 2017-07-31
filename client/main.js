import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import ProfileEdit from '../imports/ui/ProfileEdit';


Meteor.startup(() => {
  // render(<ProfileEdit />, document.getElementById('render-target'));
    render(<App />, document.getElementById('render-target'));
});