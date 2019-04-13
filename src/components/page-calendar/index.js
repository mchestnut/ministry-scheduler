import React, { Component } from 'react';

class PageCalendar extends Component {

  constructor(props) {
    super(props)

    if (props.date) {
      this.state = { date: this.getPassedDate(props.date) };
    } else {
      this.state = { date: this.getCurrentDate() };
    }
  }

  getCurrentDate() {
    const today = new Date();

    return {
      month: today.getMonth(),
      year: today.getFullYear()
    };
  } 

  getPassedDate(date) {
    let year, month;
    
    if (date[0].length === 4) {
      year = date[0];
    }

    if (date[1] && date[1] <= 12) {
      month = date[1];
    } else {
      month = null
    }

    if (date.length > 2 || !year) {
      return this.getCurrentDate;
    }

    return {
      month,
      year
    };
  }

  render() {
    
    return (
      <main>
        <p>Calendar page</p>
        <p>{ this.state.date.month }/{ this.state.date.year }</p>
      </main>
    )
  }
}

export default PageCalendar;