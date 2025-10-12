// Client ID and API key from the Developer Console
var CLIENT_ID = '399433593615-daupua5672b9566fkom0rtm89rdmgh2b.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCBVHEO0SiHLqVGwwLWcgJYD70OQ9lXg68';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  "https://www.googleapis.com/discovery/v1/apis/people/v1/rest",
  "https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.

var gmailString1 = 'https://www.googleapis.com/auth/gmail.readonly';
var gmailString2 = 'https://mail.google.com/';
var gmailString3 = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send';


var SCOPES = 'https://www.googleapis.com/auth/drive ' + gmailString3 + ' https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/contacts';


var profile_box;

/**  On load, called to load the auth2 library and API client library. */
function handleClientLoad() {

  // debugger;
  gapi.load('client:auth2', checkTest);

};

/** Initializes the API client library and sets up sign-in state
 *  listeners.  */



function checkTest() {
  setTimeout(function() {
    var testit = document.getElementById('testID');
    // console.log(testit);

    if(testit == null) {
      checkTest();
    } else {
      initClient();
    };
  }, 300);
};



function initClient() {

  var testGrab = document.getElementById('testID');
  testGrab.addEventListener('click', function() {
    debugger;
    handleAuthClick();
  });


  debugger;

  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function(event) {

    debugger;

    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.


    // var icon_profile = document.getElementById('gProfile_icon');
    // profile_box = icon_profile.parentElement;

    var testGrab = document.getElementById('testID');
    testGrab.addEventListener('click', function() {
      debugger;
      handleAuthClick();
    });

    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());


    // authorizeButton.onclick = handleAuthClick;
    // profile_box.onclick = handleAuthClick;



    // profile_box.addEventListener('click', function(){

    //     if(gapi.auth2.getAuthInstance().isSignedIn.get()){

    //         window.location.pathname = 'userprofile';
    //     } else {
    //         window.location.pathname = 'userprofile';
    //         // handleAuthClick();
    //     };
    // });

  }, function(error) {

    console.log(JSON.stringify(error, null, 2));
  });
};






/*   Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called. */
function updateSigninStatus(isSignedIn) {

  console.log('update - updateSigninStatus');
  console.log(isSignedIn);

  if (isSignedIn) {

    //  authorizeButton.style.display = 'none';
    //  signoutButton.style.display = 'block';

    // listFiles();



    var testGrab = document.getElementById('testID');
    testGrab.remove();
    // bullshit belongs elsewhere

    // console.log(' do the funckiy stuff');
    // localStorage.setItem('test','integrated');
    // checkIntegrity(testTrunk);
    // testTrunk.filter();
    // ^^^

    initGoogleAPI();

  } else {
    //  authorizeButton.style.display = 'block';
    //  signoutButton.style.display = 'none';
  };
};

/**  Sign in the user upon button click. */
function handleAuthClick(event) {
  console.log('sign in - handleAuthClick');
  gapi.auth2.getAuthInstance().signIn();

};

/**  Sign out the user upon button click. */
function handleSignoutClick(event, callback) {
  console.log('singout signout signout signout');
  gapi.auth2.getAuthInstance().signOut();

  callback();
  // window.location.pathname = 'home';
};



function initGoogleAPI() {

  // debugger;

  console.log('- - - - - - - - -');
  console.log('Google API Authenticated');
  console.log('- - - - - - - - -');
  console.log('');


  loadUserInfo();


  if (typeof globalGoogleAPIfn === "function") {

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');

    globalGoogleAPIfn();
  };
};








window.addEventListener('load', (event) => {

  setTimeout(function() {

    // initPage();
  }, 100);

});



function loadUserInfo() {

};






var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

var iconBox = document.querySelector('.iconBox');
var user;

var endBox = document.querySelector('.icon_endBox');






function initPage() {


};