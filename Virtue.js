class Virtue {

    vtDate(format, date) {

        //UK or USA/US format only as arguments
        //Can be either Hyphens or Slashes -- 09-12-2020 OR 09/12/2020
        //vtDate("USA","09-12-2020") - USA || vtDate("US,"09-12-2020") - USA/US
        //vtDate("UK","12-09-2020") - UK

        this.format = format;
        this.date = date;
        this.year;
        this.day;
        this.month;
        format = format.toLowerCase();

        if (format == "UK".toLowerCase()) {
            this.year = this.date.substring(6, 10);
            this.day = this.date.substring(0, 2);
            this.month = this.date.substring(3, 5);
            if (this.day.includes("-") || this.day.includes("/")) {
                this.day = this.date.substring(0, 1);
            }
        }

        if (this.format == "USA".toLowerCase() || this.format == "US".toLowerCase()) {
            this.year = this.date.substring(6, 10);
            this.day = this.date.substring(3, 5);
            this.month = this.date.substring(0, 2);
            if (this.day.includes("-") || this.day.includes("/")) {
                this.day = this.date.substring(0, 1);
            }
        }

        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.newDate = new Date(parseInt(this.year), parseInt(this.month -1), parseInt(this.day));
        this.dayName = this.daysOfWeek[this.newDate.getDay()];

        if (this.month == "01") {
            this.month = "January";
        }
        if (this.month == "02") {
            this.month = "February";
        }
        if (this.month == "03") {
            this.month = "March";
        }
        if (this.month == "04") {
            this.month = "April";
        }
        if (this.month == "05") {
            this.month = "May";
        }
        if (this.month == "06") {
            this.month = "June";
        }
        if (this.month == "07") {
            this.month = "July";
        }
        if (this.month == "08") {
            this.month = "August";
        }
        if (this.month == "09") {
            this.month = "September";
        }
        if (this.month == "10") {
            this.month = "October";
        }
        if (this.month == "11") {
            this.month = "November";
        }
        if (this.month == "12") {
            this.month = "December";
        }

        if (this.day == 1 || this.day == 21 || this.day == 31) {
            return this.dayName + " " + this.day + "st " + this.month + " " + this.year;
        }
        if (this.day == 2 || this.day == 22) {
            return this.dayName + " " + this.day + "nd " + this.month + " " + this.year;
        }
        if (this.day == 3 || this.day == 23) {
            return this.dayName + " " + this.day + "rd " + this.month + " " + this.year;
        }
        if (this.day == 4 || this.day == 5 || this.day == 6 || this.day == 7 || this.day == 8 || this.day == 9 || this.day == 10 || this.day == 12 || this.day == 13 || this.day || 14 || this.day == 15 || this.day == 16 || this.day == 17 || this.day == 18 || this.day == 19 || this.day == 20 || this.day == 24 || this.day == 25 || this.day == 26 || this.day == 27 || this.day == 28 || this.day == 29 || this.day == 30) {
            return this.dayName + " " + this.day + "th " + this.month + " " + this.year;
        }
    }

    vtNowDate() {

        this.newDate = new Date();
        this.year = this.newDate.getFullYear();
        this.month = this.newDate.getMonth();
        this.day = this.newDate.getDate();

        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.dayName = this.daysOfWeek[this.newDate.getDay()];

        if (this.month == 0) {
            this.month = "January";
        }
        if (this.month == 1) {
            this.month = "February";
        }
        if (this.month == 2) {
            this.month = "March";
        }
        if (this.month == 3) {
            this.month = "April";
        }
        if (this.month == 4) {
            this.month = "May";
        }
        if (this.month == 5) {
            this.month = "June";
        }
        if (this.month == 6) {
            this.month = "July";
        }
        if (this.month == 7) {
            this.month = "August";
        }
        if (this.month == 8) {
            this.month = "September";
        }
        if (this.month == 9) {
            this.month = "October";
        }
        if (this.month == 10) {
            this.month = "November";
        }
        if (this.month == 11) {
            this.month = "December";
        }

        if (this.day == 1 || this.day == 21 || this.day == 31) {
            return this.dayName + " " + this.day + "st " + this.month + " " + this.year;
        }
        if (this.day == 2 || this.day == 22) {
            return this.dayName + " " + this.day + "nd " + this.month + " " + this.year;
        }
        if (this.day == 3 || this.day == 23) {
            return this.dayName + " " + this.day + "rd " + this.month + " " + this.year;
        }
        if (this.day == 4 || this.day == 5 || this.day == 6 || this.day == 7 || this.day == 8 || this.day == 9 || this.day == 10 || this.day == 12 || this.day == 13 || this.day || 14 || this.day == 15 || this.day == 16 || this.day == 17 || this.day == 18 || this.day == 19 || this.day == 20 || this.day == 24 || this.day == 25 || this.day == 26 || this.day == 27 || this.day == 28 || this.day == 29 || this.day == 30) {
            return this.dayName + " " + this.day + "th " + this.month + " " + this.year;
        }
    }

    vtTime(format = "") {

        //Add ISO as argument to get 24 hour format

        this.format = format;
        this.newDate = new Date();
        this.hour = this.newDate.getHours();
        this.minute = this.newDate.getMinutes();
        this.second = this.newDate.getSeconds();
        this.AmPm;

        if (this.hour < 12) {
            this.AmPm = "AM";
        }
        else {
            this.AmPm = "PM";
        }

        if (this.second < 10) {
            this.second = "0" + this.second;
        }

        if (this.minute < 10) {
            this.minute = "0" + this.minute;
        }

        if (!format.toLowerCase() == "ISO".toLowerCase()) {
            if (this.hour == 13) {
                this.hour = "1";
            }
            if (this.hour == 14) {
                this.hour = "2";
            }
            if (this.hour == 15) {
                this.hour = "3";
            }
            if (this.hour == 16) {
                this.hour = "4";
            }
            if (this.hour == 17) {
                this.hour = "5";
            }
            if (this.hour == 18) {
                this.hour = "6";
            }
            if (this.hour == 19) {
                this.hour = "7";
            }
            if (this.hour == 20) {
                this.hour = "8";
            }
            if (this.hour == 21) {
                this.hour = "9";
            }
            if (this.hour == 22) {
                this.hour = "10";
            }
            if (this.hour == 23) {
                this.hour = "11";
            }
            if (this.hour == 24) {
                this.hour = "12";
            }
        }

        this.nowTime = this.hour + ":" + this.minute + ":" + this.second + this.AmPm;
        return this.nowTime;
    }

    vtMonth() {

        this.newDate = new Date();
        this.month = this.newDate.getMonth();

        if (this.month == 0) {
            this.month = "January";
        }
        if (this.month == 1) {
            this.month = "February";
        }
        if (this.month == 2) {
            this.month = "March";
        }
        if (this.month == 3) {
            this.month = "April";
        }
        if (this.month == 4) {
            this.month = "May";
        }
        if (this.month == 5) {
            this.month = "June";
        }
        if (this.month == 6) {
            this.month = "July";
        }
        if (this.month == 7) {
            this.month = "August";
        }
        if (this.month == 8) {
            this.month = "September";
        }
        if (this.month == 9) {
            this.month = "October";
        }
        if (this.month == 10) {
            this.month = "November";
        }
        if (this.month == 11) {
            this.month = "December";
        }

        return this.month;
    }

    vtDayName() {

        this.newDate = new Date();
        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.dayName = this.daysOfWeek[this.newDate.getDay()];
        return this.dayName;

    }

    vtDay() {

        this.newDate = new Date();
        this.day = this.newDate.getDate();
        
        if (this.day == 1 || this.day == 21 || this.day == 31) {
            return this.day + "st";
        }
        if (this.day == 2 || this.day == 22) {
            return this.day + "nd";
        }
        if (this.day == 3 || this.day == 23) {
            return this.day + "rd";
        }
        if (this.day == 4 || this.day == 5 || this.day == 6 || this.day == 7 || this.day == 8 || this.day == 9 || this.day == 10 || this.day == 12 || this.day == 13 || this.day || 14 || this.day == 15 || this.day == 16 || this.day == 17 || this.day == 18 || this.day == 19 || this.day == 20 || this.day == 24 || this.day == 25 || this.day == 26 || this.day == 27 || this.day == 28 || this.day == 29 || this.day == 30) {
            return this.day + "th";
        }
    }

    vtYear() {

        this.newDate = new Date();
        this.year = this.newDate.getUTCFullYear();
        return this.year;
        
    }

    vtYearDifference(dateOne, dateTwo) {

        //Whichever argument is higher will minus the second argument
        
        parseInt(this.dateOne = dateOne);
        parseInt(this.dateTwo = dateTwo);

        if(this.dateOne > this.dateTwo) {
            return this.dateOne - this.dateTwo;
        }
        else {
            return this.dateTwo - this.dateOne;
        }
    }
    
}
