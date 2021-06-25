import Firebase from 'firebase';

// Firebase Config
const config = {
	apiKey: "AIzaSyAa1iA5GW4cytxbmED7xdkaC4B-Mywh6RI",
	projectId: "numbs-f0f71",
	databaseURL: "https://numbs-f0f71-default-rtdb.firebaseio.com/",
	authDomain: "https://numbs.surge.sh",
	storageBucket: "numbs-f0f71.appspot.com"
};

const app = Firebase.initializeApp(config);
const database = app.database();

export default database;

