import firebaseConfig from './credentials';
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