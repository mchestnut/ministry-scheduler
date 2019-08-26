import React, { Component } from 'react';
import withAuthorization from '../../authorization'

import Button from '../button'
import Container from '../container'
import Select from '../select'

class PageUsers extends Component {
  constructor(props) {
    super(props)

    this.noticeTimeout = null

    this.state = {
      noticeMessage: '',
      users: []
    }
  }
  
  componentDidMount() {
    this.getUserList()
  }

  componentWillUnmount() {
    this.props.firebase.getUsers().off()
  }

  getUserList() {
    this.props.firebase.getUsers().once('value').then((snapshot) => {
      const usersObj = snapshot.val()
      const uids = Object.keys(usersObj)
      const users = uids.map((uid) => {
        return {
          diffs: {},
          props: usersObj[uid],
          uid,
        }
      })

      this.setState({ users })
    })
  }

  renderUsers() {
    return this.state.users.map((user, i) => {
      return (
        <tr key={user.props.first_name}>
          <td>
            <input
              onChange={ ({currentTarget}) => this.updateUserProp(i, 'first_name', currentTarget.value) }
              value={ user.props.first_name }
              type="text"
            />
          </td>
          <td>
            <input
              onChange={ ({currentTarget}) => this.updateUserProp(i, 'last_name', currentTarget.value) }
              value={ user.props.last_name }
              type="text"
            />
          </td>
          <td>
            <Select
              onChange={ ({currentTarget}) => this.updateUserProp(i, 'role', currentTarget.value) }
              value={ user.props.role }
              options={[
                { value: 'admin', label: 'Admin' },
                { value: 'member', label: 'Member' }
              ]}
            />
            </td>
          <td>{user.props.color}</td>
          <td>
            <span role="img" aria-label="Remove">❌</span>
          </td>
        </tr>
      )
    })
  }

  saveChanges(e) {
    e.preventDefault(

    )
    this.state.users.forEach(user => {
      const diffs = Object.keys(user.diffs)

      if (diffs.length) {
        const updates = {}

        diffs.forEach(key => {
          updates[`/users/${user.uid}/${key}`] = user.diffs[key]
        })
        
        this.props.firebase.update(updates).then( () => {
          this.setState({ noticeMessage: 'Save successful'} )
        } ).catch (error => {
          this.setState({ noticeMessage: error} )
        } )
      }
    })
  }

  updateNotice(noticeMessage) {
    this.setState({ noticeMessage })

    clearTimeout(this.noticeTimeout)
    this.noticeTimeout = setTimeout(() => {
      this.setState({ noticeMessage: '' })
    }, 4000)
  }

  updateUserProp(i, prop, value) {
    const users = this.state.users.slice()

    users[i].diffs[prop] = value
    users[i].props[prop] = value
    
    this.setState({ users: users })
  }

  render() {

    return (
      <Container>
        <h1>Users</h1>
        <p>{ this.state.noticeMessage }</p>
        <form onSubmit={e => this.saveChanges(e)} >
          <table>
            <thead>
              <tr>
                <th colSpan="2">Name</th>
                <th>Role</th>
                <th>Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.renderUsers() }
            </tbody>
          </table>
          <Button onClick={ e => this.saveChanges(e) } >
            Save changes
          </Button>
        </form>
      </Container>
    )
  }
}

export default withAuthorization('admin', true)(PageUsers);