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

function cancelSession() {
	var newDate = Math.floor(Date.now() / 1000);

	console.log('cancelled session');

  firebase.database().ref('manual/test').set({
    count: newDate,
  }, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log('succes');
    }
  });
}