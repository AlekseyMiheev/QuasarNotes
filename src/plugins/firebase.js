import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCsR3_6smIYdiuQlcXNkMAX2LZovBb0eXo',
  authDomain: 'quasarnotes.firebaseapp.com',
  databaseURL: 'https://quasarnotes.firebaseio.com',
  projectId: 'quasarnotes',
  storageBucket: 'quasarnotes.appspot.com',
  messagingSenderId: '897461652623'
}

const connection = Firebase.initializeApp(config)
const DB = connection.database()
const usersRef = DB.ref('Notes')
console.log(usersRef)

export default ({ Vue }) => {
  Vue.prototype.$db = usersRef
}

export { DB }
