import React from 'react'

import Wrapper from './Wrapper'

const PageCalendar = () => {
  return (
    <Wrapper>
      Calendar
    </Wrapper>
  )
}

export default PageCalendar


// import React, { Component } from 'react';
// import withAuthorization from '../authorization'

// class PageCalendar extends Component {

//   constructor(props) {
//     super(props)

//     if (props.year) {
//       this.state = { date: this.getPassedDate() };
//     } else {
//       this.state = { date: this.getCurrentDate() };
//     }
//   }

//   getCurrentDate() {
//     const today = new Date();
    
//     return {
//       month: today.getMonth() + 1,
//       year: today.getFullYear()
//     };
//   } 

//   getPassedDate() {
//     let year, month;
    
//     if (this.props.year && this.props.year.length === 4) {
//       year = this.props.year;
//     } else {
//       year = null
//     }

//     if (this.props.month && this.props.month <= 12) {
//       month = this.props.month;
//     } else {
//       month = null
//     }

//     if (!year) {
//       return this.getCurrentDate();
//     }

//     return {
//       month,
//       year
//     };
//   }

//   render() {
    
//     return (
//       <main>
//         <p>Calendar page</p>
//         <p>{ this.state.date.month }/{ this.state.date.year }</p>
//         <p>{ this.props.authUser ? 'Logged in' : '' }</p>
//       </main>
//     )
//   }
// }

// export default withAuthorization('admin', false)(PageCalendar);