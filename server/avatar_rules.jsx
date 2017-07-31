

Slingshot.fileRestrictions("UsersAvatar", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
    maxSize: 2 * 500 * 500 // 2 MB (use null for unlimited)
});


Slingshot.createDirective("UsersAvatar", Slingshot.S3Storage, {

    bucket: "free2print", // change this to your s3's bucket name

   // acl: "public-read",

    authorize: function (file, metaContext) {

        //Deny uploads if user is not logged in.
      //  if (!this.userId) {
      //      var message = "Please login before posting files";
      //      throw new Meteor.Error("Login Required", message);
    //    }

        return true;
    },

    key: function (file, metaContext) {
        // User's image url with ._id attached:

        return "userfiles/" + Date.now() + "-" + file.name;
    }
});