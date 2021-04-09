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

        }
        dayBorn();
    });
}