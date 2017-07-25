import React from 'react'
import { Button } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data'

const PopUps = (props) => (
    <div>
        <Button bsStyle="primary" bsSize="large" >DALEJ</Button>
        <Button bsSize="large" >ANULUJ</Button>
    </div>
);

export default createContainer(() => {
    return {
   //     currentUser: Meteor.user(),
    }
}, PopUps);