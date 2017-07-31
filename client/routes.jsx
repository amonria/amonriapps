import App from "../imports/ui/App";
FlowRouter.route("/u/profile/edit/", {
    action() {
        var subs = Meteor.subscribe('userData');
        Meteor.autorun(function() {
            if (subs.ready()) {
                mount(MasterLayout, {
                    nav: (<Navbar />),
                    content: (<App user={Meteor.user()} />) // we passed our props to our app's state :)
                });
            }
        });
    }
});