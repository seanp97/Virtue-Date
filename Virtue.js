
class Virtue {

    vtDate(format, date) {

        //UK or USA/US format only as arguments
        //Can be either Hyphens or Slashes -- 09-12-2020 OR 09/12/2020
        //vtDate("USA","09-12-2020") - USA || vtDate("US,"09-12-2020") - USA/US
        //vtDate("UK","12-09-2020") - UK

        this.format = format;
        this.date = date;
        let year;
        let day;
        let month;
        format = format.toLowerCase();

        if (format == "UK".toLowerCase()) {
            year = date.substring(6, 10);
            day = date.substring(0, 2);
            month = date.substring(3, 5);
            if (day.includes("-") || day.includes("/")) {
                day = date.substring(0, 1);
            }
        }

        if (format == "USA".toLowerCase() || format == "US".toLowerCase()) {
            year = date.substring(6, 10);
            day = date.substring(3, 5);
            month = date.substring(0, 2);
            if (day.includes("-") || day.includes("/")) {
                day = date.substring(0, 1);
            }
        }

        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let newDate = new Date(parseInt(year), parseInt(month -1), parseInt(day));
        let dayName = daysOfWeek[newDate.getDay()];

        if (month == "01") {
            month = "January";
        }
        if (month == "02") {
            month = "February";
        }
        if (month == "03") {
            month = "March";
        }
        if (month == "04") {
            month = "April";
        }
        if (month == "05") {
            month = "May";
        }
        if (month == "06") {
            month = "June";
        }
        if (month == "07") {
            month = "July";
        }
        if (month == "08") {
            month = "August";
        }
        if (month == "09") {
            month = "September";
        }
        if (month == "10") {
            month = "October";
        }
        if (month == "11") {
            month = "November";
        }
        if (month == "12") {
            month = "December";
        }

        if (day == 1 || day == 21 || day == 31) {
            return dayName + " " + day + "st " + month + " " + year;
        }
        if (day == 2 || day == 22) {
            return dayName + " " + day + "nd " + month + " " + year;
        }
        if (day == 3 || day == 23) {
            return dayName + " " + day + "rd " + month + " " + year;
        }
        if (day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 12 || day == 13 || day || 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30) {
            return dayName + " " + day + "th " + month + " " + year;
        }
    }

    vtNowDate() {

        let newDate = new Date();
        let year = newDate.getFullYear();
        let month = newDate.getMonth();
        let day = newDate.getDate();

        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayName = daysOfWeek[newDate.getDay()];

        if (month == 0) {
            month = "January";
        }
        if (month == 1) {
            month = "February";
        }
        if (month == 2) {
            month = "March";
        }
        if (month == 3) {
            month = "April";
        }
        if (month == 4) {
            month = "May";
        }
        if (month == 5) {
            month = "June";
        }
        if (month == 6) {
            month = "July";
        }
        if (month == 7) {
            month = "August";
        }
        if (month == 8) {
            month = "September";
        }
        if (month == 9) {
            month = "October";
        }
        if (month == 10) {
            month = "November";
        }
        if (month == 11) {
            month = "December";
        }

        if (day == 1 || day == 21 || day == 31) {
            return dayName + " " + day + "st " + month + " " + year;
        }
        if (day == 2 || day == 22) {
            return dayName + " " + day + "nd " + month + " " + year;
        }
        if (day == 3 || day == 23) {
            return dayName + " " + day + "rd " + month + " " + year;
        }
        if (day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 12 || day == 13 || day || 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30) {
            return dayName + " " + day + "th " + month + " " + year;
        }
    }

    vtTime(format = "") {

        //Add ISO as argument to get 24 hour format

        this.format = format;
        let newDate = new Date();
        let hour = newDate.getHours();
        let minute = newDate.getMinutes();
        let second = newDate.getSeconds();
        let AmPm;

        if (hour < 12) {
            AmPm = "AM";
        }
        else {
            AmPm = "PM";
        }

        if (format.toLowerCase() == "ISO".toLowerCase()) {

        }
        
        else {
            if (hour == 13) {
                hour = "1";
            }
            if (hour == 14) {
                hour = "2";
            }
            if (hour == 15) {
                hour = "3";
            }
            if (hour == 16) {
                hour = "4";
            }
            if (hour == 17) {
                hour = "5";
            }
            if (hour == 18) {
                hour = "6";
            }
            if (hour == 19) {
                hour = "7";
            }
            if (hour == 20) {
                hour = "8";
            }
            if (hour == 21) {
                hour = "9";
            }
            if (hour == 22) {
                hour = "10";
            }
            if (hour == 23) {
                hour = "11";
            }
            if (hour == 24) {
                hour = "12";
            }
        }

        let nowTime = hour + ":" + minute + ":" + second + AmPm;
        return nowTime;
    }

    vtMonth() {

        let newDate = new Date();
        let month = newDate.getMonth();

        if (month == 0) {
            month = "January";
        }
        if (month == 1) {
            month = "February";
        }
        if (month == 2) {
            month = "March";
        }
        if (month == 3) {
            month = "April";
        }
        if (month == 4) {
            month = "May";
        }
        if (month == 5) {
            month = "June";
        }
        if (month == 6) {
            month = "July";
        }
        if (month == 7) {
            month = "August";
        }
        if (month == 8) {
            month = "September";
        }
        if (month == 9) {
            month = "October";
        }
        if (month == 10) {
            month = "November";
        }
        if (month == 11) {
            month = "December";
        }

        return month;
    }

    vtDayName() {

        let newDate = new Date();
        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayName = daysOfWeek[newDate.getDay()];
        return dayName;

    }

    vtDay() {

        let newDate = new Date();
        let day = newDate.getDate();
        
        if (day == 1 || day == 21 || day == 31) {
            return day + "st";
        }
        if (day == 2 || day == 22) {
            return day + "nd";
        }
        if (day == 3 || day == 23) {
            return day + "rd";
        }
        if (day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 12 || day == 13 || day || 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30) {
            return day + "th";
        }
    }

    vtYear() {

        let newDate = new Date();
        let year = newDate.getUTCFullYear();
        return year;
        
    }
}
