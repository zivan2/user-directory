import './App.css'
import User from './User.js'
import React from 'react'
let axios = require('axios').default

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  async componentDidMount() {
    let users = []
      for (let i = 0; i < 10; i++) {
        users.push(
          await (await axios.get('https://randomuser.me/api/')).json()
        )
    }
    this.setState({users: users})
    console.log(users)
  }

  render() {
    return (
      <div className="App">
        { this.state.users.map( (item, i) => <User name={item.results[0].name.first} email={item.results[0].email}/> )}
      </div>
    )
  }
}

export default App;
