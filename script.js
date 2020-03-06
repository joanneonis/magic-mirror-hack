var firebaseConfig = {
	apiKey: "AIzaSyALnYw32OjvLA5JJmXZtQclC7XgDXr0c7w",
	authDomain: "magic-mirror-172df.firebaseapp.com",
	databaseURL: "https://magic-mirror-172df.firebaseio.com",
	projectId: "magic-mirror-172df",
	storageBucket: "magic-mirror-172df.appspot.com",
	messagingSenderId: "164338707361",
	appId: "1:164338707361:web:a3dd3e304ce5f569ea79e0",
	measurementId: "G-HYRS8B3DBN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var smiling = false;
var sessionToken;

var newSession = firebase.database().ref('manual/test');

newSession.on('value', function(snapshot) {
	var newSessionToken = snapshot.val().count;

	if (smiling && sessionToken != newSessionToken) {
		resetSession();
	}

	sessionToken = snapshot.val().count;
});

var ref = firebase.database().ref('message_list');
// Get the current timestamp
var now = new Date().getTime();
// Create a query that orders by the timestamp
var query = ref.orderByChild('timestamp').startAt(now);
// Listen for the new children added from that point in time
query.on('child_added', function (snap) { 
	console.log('new');

	if (!smiling) smiling = snap.val().smiley;
	
		if (!smiling) {
			showUnlock();
		} else {
			hideUnlock();
		}
});

function showUnlock() {
	console.log('unlock', smiling);

	document.querySelector('.unlock').classList.add('active');
	document.querySelector('.overlay').classList.remove('active');
}

function hideUnlock() {
	console.log('smiled', smiling);

	document.querySelector('.unlock').classList.remove('active');
	document.querySelector('.overlay').classList.add('active');
}

function resetSession() {
	smiling = false;
	showUnlock();
}