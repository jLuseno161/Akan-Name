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
        }
        dayBorn();
    });
}