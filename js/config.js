const baseURL = "https://script.google.com/macros/s/AKfycbxg1pVIE52xLfmscGLYg5r6KSWgqOEk7aiu7hJ7jC0pdTrC7Lc/exec";

  // Set the configuration for your app
  // TODO: Replace with your app's config object
  var firebaseConfig = {
    apiKey: "AIzaSyCrKSwRUXWey9Bn7z_4rNCOQ00Z6xZEEVk",
    authDomain: "draw4med-80aa7.firebaseapp.com",
    databaseURL: "https://draw4med-80aa7.firebaseio.com",
    projectId: "draw4med-80aa7",
    storageBucket: "draw4med-80aa7.appspot.com",
    messagingSenderId: "87155985810",
    appId: "1:87155985810:web:9cc9fa5a249bfa9b0d454b"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();