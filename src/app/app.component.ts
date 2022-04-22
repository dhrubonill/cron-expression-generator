import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  minute = '*';
  hour = '*';
  day = '*';
  week = '*';
  month = '*';
  cronExpression = `${this.minute} ${this.hour} ${this.day} ${this.week} ${this.month}`;

  showMinuteValues = false;
  preTextMinuteValues = '';
  showHourValues = false;
  preTextHourValues = '';
  showDayValues = false;
  preTextDayValues = '';
  showDayOfMonthValues = false;
  preTextDayOfMonthValues = '';
  showMonthValues = false;
  preTextMonthValues = '';

  minuteValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  hourValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  dayOfMonthValues = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th',
    '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
  dayValues = [{
    value: 0,
    label: 'Sunday'
  },{
    value: 1,
    label: 'Monday'
  },{
    value: 2,
    label: 'Tuesday'
  },{
    value: 3,
    label: 'Wednesday'
  },{
    value: 4,
    label: 'Thursday'
  },{
    value: 5,
    label: 'Friday'
  },{
    value: 6,
    label: 'Saturday'
  },];
  monthValues = [{
    value: 1,
    label: 'January'
  },{
    value: 2,
    label: 'February'
  },{
    value: 3,
    label: 'March'
  },{
    value: 4,
    label: 'April'
  },{
    value: 5,
    label: 'May'
  },{
    value: 6,
    label: 'June'
  },{
    value: 7,
    label: 'July'
  },{
    value: 8,
    label: 'August'
  },{
    value: 9,
    label: 'September'
  },{
    value: 10,
    label: 'October'
  },{
    value: 11,
    label: 'November'
  },{
    value: 12,
    label: 'December'
  },];
  frequencies = [{
    value: 1,
    label: "Minute"
  }, {
    value: 2,
    label: "Hour"
  }, {
    value: 3,
    label: "Day"
  }, {
    value: 4,
    label: "Week"
  }, {
    value: 5,
    label: "Month"
  }, {
    value: 6,
    label: "Year"
  }];

  onChange(value: number) {
    switch (Number(value)) {
      case 1:
        this.showMinuteValues = false;
        this.showHourValues = false;
        this.showDayValues = false;
        this.showDayOfMonthValues = false;
        this.showMonthValues = false;
        this.minute = '*';
        this.hour = '*';
        this.day = '*';
        this.week = '*';
        this.month = '*';
        this.cronExpression = `${this.minute} ${this.hour} ${this.day} ${this.week} ${this.month}`;
        break;
      case 2:
        this.preTextMinuteValues = 'at (in Minute)';
        this.showMinuteValues = true;
        this.showHourValues = false;
        this.showDayValues = false;
        this.showDayOfMonthValues = false;
        this.showMonthValues = false;
        break;
      case 3:
        this.preTextHourValues = 'at (in Hour)';
        this.preTextMinuteValues = 'and (in minute)';
        this.showMinuteValues = true;
        this.showHourValues = true;
        this.showDayValues = false;
        this.showDayOfMonthValues = false;
        this.showMonthValues = false;
        break;
      case 4:
        this.preTextDayValues = 'on';
        this.preTextHourValues = 'at (in Hour)';
        this.preTextMinuteValues = 'and (in minute)';
        this.showMinuteValues = true;
        this.showHourValues = true;
        this.showDayValues = true;
        this.showDayOfMonthValues = false;
        this.showMonthValues = false;
        break;
      case 5:
        this.preTextDayOfMonthValues = 'on the';
        this.preTextHourValues = 'at (in Hour)';
        this.preTextMinuteValues = 'and (in minute)';
        this.showMinuteValues = true;
        this.showHourValues = true;
        this.showDayValues = false;
        this.showDayOfMonthValues = true;
        this.showMonthValues = false;
        break;
      case 6:
        this.preTextDayOfMonthValues = 'on the';
        this.preTextMonthValues = 'of';
        this.preTextHourValues = 'at (in Hour)';
        this.preTextMinuteValues = 'and (in minute)';
        this.showMinuteValues = true;
        this.showHourValues = true;
        this.showDayValues = false;
        this.showDayOfMonthValues = true;
        this.showMonthValues = true;
        break;
      default:
        break;
    }
  }

  onHourChange(value){
    console.log(value)
  }
}
