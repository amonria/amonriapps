import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import Task from './Task.jsx'
import PopUps from './PopUps'
import ModalSaveDesign from './modals/ModalSaveDesign'



// App component - represents the whole app
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...',
           // avatar: this.props.user.profile.avatar // this is passed from the router. Well add this later
            // if the user has no profile picture, then show the default:
            // avatar: this.props.user.profile.avatar ? this.props.user.profile.avatar : 'your palceholder image url'
        };

      //  alert(JSON.stringify(this.props.user.profile.avatar))

        this.updateState = this.updateState.bind(this);

    }

    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    hideModal= () =>  {
        this.setState({isOpen: false})
    };

    updateState(st) {
        this.setState({data: st})
    }

    showModal(){
      this.setState({isOpen: true})
    }

    upload()
    {
        console.log("UPKL");
        //var userId = Meteor.user()._id;
        var userId = "asduid";
        var metaContext = {avatarId: userId,dane:"kowalski"};
        var uploader = new Slingshot.Upload("UsersAvatar", metaContext);
        uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) { // you can use refs if you like
            if (error) {
                // Log service detailed response
                console.error('Error uploading', uploader.xhr.response);
                alert(error); // you may want to fancy this up when you're ready instead of a popup.
            }
            else {
                // we use $set because the user can change their avatar so it overwrites the url :)
                alert(downloadUrl)
               // Meteor.users.update(Meteor.userId(), {$set: {"profile.avatar": downloadUrl}});
            }
            // you will need this in the event the user hit the update button because it will remove the avatar url
        ///    this.setState({avatar: downloadUrl});
        }.bind(this));
    }

    formSubmit()
    {
        // Ofcourse you'll have other fields...
      //  let avatarUrl = this.state.avatar;
     //   Meteor.users.update({_id: Meteor.userId()}, {
     //       $set: {profile: avatarUrl}
     //   });
    }

    layoutRender()
    {
        return (
            <form>
                <div className="row well">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="file" id="input" onChange={this.upload.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" type="submit"
                                onClick={this.formSubmit.bind(this)}>Update Profile
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    getMeteorData()
    {
        return {
          //  user: Meteor.user()
            user: "usrid"
        }
    }

    componentWillMount()
    {

        // we create this rule both on client and server
        Slingshot.fileRestrictions("avatar", {
            allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
            maxSize: 2 * 500 * 500
        });
    }

    render()
    {

        return (

            <div>{this.layoutRender()}</div>
        )
    }

    /*render() {
        return (
            <div className="container">
                <header>
                    <h1>odpowiedź z serwera</h1>
                </header>
                <ul>
                    {this.renderTasks()}
                </ul>
                <div>
                    <button onClick = {()=>this.updateState("1")}>STATE 1</button>
                    <button onClick = {()=>this.updateState("2")}>STATE 2</button>
                    <button onClick = {()=>this.showModal()}>POKAZ POPUP</button>
                    <h4>{this.state.data}</h4>
                    <PopUps/>

                </div>
                <ModalSaveDesign hideModal={this.hideModal} isOpen={this.state.isOpen} dat="Handsome" fff="dfg"/>
            </div>
        );
    }*/



}


reactMixin(App.prototype, ReactMeteorData);