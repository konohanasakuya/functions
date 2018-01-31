const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

const ref = admin.database().ref()

//Authentication Trigger
exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid
    const email =  event.data.email
    const photoUrl = event.data.photoUrl || 
    'photo_url'
    const newUserRef = ref.child(`/users/${uid}`)
    return newUserRef.set({
        photoUrl: photoUrl,
        email: email
    })
})
