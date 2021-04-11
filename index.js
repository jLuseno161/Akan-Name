window.onload = function () {
    document.getElementById('btn').addEventListener('click', function () {
        let dayBorn = function (DD, MM, YY) {

            //fetch user input
            YY = document.forms["findAkanName"]["inputYear"].value;
            MM = document.forms["findAkanName"]["inputMonth"].value;
            DD = document.forms["findAkanName"]["inputDay"].value;

            //convert string to inputGendervar year = parseInt(YY);
            var year = parseInt(YY);
            var month = parseInt(MM);
            var date = parseInt(DD);

            //arrays to store days and the Akan Names
            const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const aMale = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
            const aFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

            //find day of week born
            if (month < 3) {
                month += 12;
                year--;
            }
            let index = (date + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;

            //validate userinput
            if (YY == "") {
                swal({
                    title: "Please input year of birth",
                    icon: "warning",
                });
            } else if (MM == "") {
                swal({
                    title: "Please input month of birth",
                    icon: "warning",
                });
            } else if (DD == "") {
                swal({
                    title: "Please input day of birth",
                    icon: "warning",
                });
            } else if (YY.length < 4 || YY.length > 4) {
                swal({
                    title: "Please input correct year",
                    icon: "warning",
                });
            } else if (MM <= 0 || MM > 12) {
                swal({
                    title: "Please input correct month",
                    icon: "warning",
                });
            } else if (DD <= 0 || DD > 31) {
                swal({
                    title: "Please input correct day",
                    icon: "warning",
                });
            } else {
                if (document.getElementById('male').checked) {
                    swal({
                        title: "You were born on " + day[index] + " and your Akan Name is " + aMale[index],
                        icon: "success",
                    }).then((value) => {
                        reset();
                    });
                    swal.reset();
                } else if (document.getElementById('female').checked) {
                    swal({
                        title: "You were born on " + day[index] + " and your Akan Name is " + aFemale[index],
                        icon: "success",
                    }).then((value) => {
                        reset();
                    });
                } else {
                    swal({
                        title: "You have not selected your gender",
                        icon: "warning",
                    });
                }
            }
        }
        dayBorn();
    });

    function reset() {
        location.reload();
    }
}