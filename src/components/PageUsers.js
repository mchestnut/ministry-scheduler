import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { navigate } from '@reach/router'

import { updateUsers } from '../actions/users'

import UserTableRow from './UserTableRow'
import Wrapper from './Wrapper'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    firestore: state.firestore
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUsers: (users) => dispatch(updateUsers(users))
  }
}

class PageUsers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      updatedUsers: {}
    }
  }

  updateUser = ( uid, details ) => {
    const updatedUsers = Object.assign(
      this.state.updatedUsers,
      { [uid]: details }
    )

    this.setState({ updatedUsers })
  }

  render() {
    if (!this.props.firebase.auth.uid) {
      navigate('/')
      return null
    }

    const users = this.props.firestore.data.users
    
    return (
      <Wrapper>
        <h1>Users</h1>
        <table>
          <tbody>
            { users && Object.keys(users).map( uid => (
              <UserTableRow
                details={ users[uid] }
                key={ uid }
                updateUser={ (details) => { this.updateUser(uid, details) } }
              />
            ) ) }
          </tbody>
        </table>
        <button
          onClick={ () => { this.props.updateUsers( this.state.updatedUsers ) } }
          className="c-button">
            Save changes
        </button>
      </Wrapper>
    )
  }
}


export default compose(
  firestoreConnect( () => ['users'] ),
  connect(mapStateToProps, mapDispatchToProps)
)(PageUsers)



// import Button from '../button'
// import ColorPicker from '../color-picker'
// import Container from '../container'
// import RoleSelector from '../role-selector'

// class PageUsers extends Component {
//   constructor(props) {
//     super(props)

//     this.noticeTimeout = null

//     this.state = {
//       noticeMessage: '',
//       users: []
//     }
//   }
  
//   componentDidMount() {
//     this.getUserList()
//   }

//   componentWillUnmount() {
//     this.props.firebase.getUsers().off()
//   }

//   getUserList() {
//     this.props.firebase.getUsers().once('value').then((snapshot) => {
//       const usersObj = snapshot.val()
//       const uids = Object.keys(usersObj)
//       const users = uids.map((uid) => {
//         return {
//           diffs: {},
//           props: usersObj[uid],
//           uid,
//         }
//       })

//       this.setState({ users })
//     })
//   }

//   renderUsers() {
//     return this.state.users.map((user, i) => {
//       return (
//         <tr key={user.props.first_name}>
//           <td>
//             <input
//               onChange={ ({currentTarget}) => this.updateUserProp(i, 'first_name', currentTarget.value) }
//               value={ user.props.first_name }
//               type="text"
//             />
//           </td>
//           <td>
//             <input
//               onChange={ ({currentTarget}) => this.updateUserProp(i, 'last_name', currentTarget.value) }
//               value={ user.props.last_name }
//               type="text"
//             />
//           </td>
//           <td>
//             <RoleSelector
//               onChange={ ({currentTarget}) => this.updateUserProp(i, 'role', currentTarget.value) }
//               value={ user.props.role }
//             />
//             </td>
//           <td>
//             <ColorPicker
//               onChange={ (value) => this.updateUserProp(i, 'color', value) }
//               value={user.props.color}
//             />
//           </td>
//         </tr>
//       )
//     })
//   }

//   saveChanges(e) {
//     e.preventDefault()

//     this.state.users.forEach(user => {
//       const diffs = Object.keys(user.diffs)

//       if (diffs.length) {
//         const updates = {}

//         diffs.forEach(key => {
//           updates[`/users/${user.uid}/${key}`] = user.diffs[key]
//         })
        
//         this.props.firebase.update(updates).then( () => {
//           this.setState({ noticeMessage: 'Save successful'} )
//         } ).catch (error => {
//           this.setState({ noticeMessage: error} )
//         } )
//       }
//     })
//   }

//   updateNotice(noticeMessage) {
//     this.setState({ noticeMessage })

//     clearTimeout(this.noticeTimeout)
//     this.noticeTimeout = setTimeout(() => {
//       this.setState({ noticeMessage: '' })
//     }, 4000)
//   }

//   updateUserProp(i, prop, value) {
//     const users = this.state.users.slice()

//     users[i].diffs[prop] = value
//     users[i].props[prop] = value
    
//     this.setState({ users: users })
//   }

//   render() {
//     return (
//       <Container>
//         <h1>Users</h1>
//         <p>{ this.state.noticeMessage }</p>
//         <form onSubmit={e => this.saveChanges(e)} >
//           <table>
//             <thead>
//               <tr>
//                 <th colSpan="2">Name</th>
//                 <th>Role</th>
//                 <th>Color</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               { this.renderUsers() }
//             </tbody>
//           </table>
//           <Button onClick={ e => this.saveChanges(e) } >
//             Save changes
//           </Button>
//         </form>
//       </Container>
//     )
//   }
// }

// export default withAuthorization('admin', true)(PageUsers);