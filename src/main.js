import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const findDay = function(year, month, day){
  let y = year,
      m = month,
      d = day,
      c, g, f, w, e;
      console.log(y, m, d);
  if(m >= 3){
    c = Math.floor(y / 100);
    g = y - (100 * c);
  }else{
    c = Math.floor((y - 1) / 100);
    g = y - 1 - (100 * c);
  }
  switch(m){
    case 1:
      e = 0;
      break;
    case 2:
      e = 3;
      break;
    case 3:
      e = 2;
      break;
    case 4:
      e = 5;
      break;
    case 5:
      e = 0;
      break;
    case 6:
      e = 3;
      break;
    case 7:
      e = 5;
      break;
    case 8:
      e = 1;
      break;
    case 9:
      e = 4;
      break;
    case 10:
      e = 6;
      break;
    case 11:
      e = 2;
      break;
    case 12:
      e = 4;
      break;
  }
  let temp = c % 4;
  switch(temp){
    case 0:
      f = 0;
      break;
    case 1:
      f = 5;
      break;
    case 2:
      f = 3;
      break
    case 3:
      f = 1;
      break;
  }
  w = (d + e + f + g + Math.floor((g/4))) % 7;
  console.log(w, d, e, c, f, g);
  switch(w){
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
  }
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    event.preventDefault();
    let year = parseInt($("#year").val());
    let month = parseInt($("#month").val());
    let day = parseInt($("#day").val());
    let weekDay = findDay(year, month, day);
    console.log(weekDay);
  });
});
