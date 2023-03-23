// Clear text in output statement box
document.getElementById('outputClearButton').onclick = function () {
    document.getElementById('outputStatement').innerHTML = ''
}
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala",];
// let lCaseCities = ["faisalabad", "lahore", "karachi", "islamabad", "burewala",];
// function to be performed by clicking  on Print All Cities button with id printAllCities
document.getElementById('printAllCities').onclick = function () {
    document.getElementById('outputStatement').innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('outputStatement').innerHTML += num + ') ' + cities[i] + '<br />';
    }
}
// function to be performed by clicking  on Add Your City in List button with id addYourCityInList
document.getElementById('addCity').onclick = function () {
    let newCity = document.getElementById('inputText').value
    if (!newCity) {
        alert("Please enter a city name to add!")
        return;
    } else {
        cities.push(newCity)
        alert('Congratulations ' + newCity + ' has been added in the list!')
        document.getElementById('outputStatement').innerHTML = ""
        for (let i = 0; i < cities.length; i++) {
            let num = i + 1;
            document.getElementById('outputStatement').innerHTML += num + ') ' + cities[i] + '<br />';
        }
    }
}
    // function to be performed by clicking  on Check Your City in List button with id checkCity
    document.getElementById('checkCity').onclick = function () {
        let cityToCheck = document.getElementById('inputText').value
        console.log(cityToCheck)

        // cityToCheck = cityToCheck.toLowerCase();
        // let lCaseCities = ["faisalabad", "lahore", "karachi", "islamabad", "burewala",];
        if (!cityToCheck) {
            return alert("Please enter a city name to add!")
        }
        for (let i = 0; i < cities.length; i++) {
            if (cityToCheck == cities[i]) {
                document.getElementById('outputStatement').innerHTML = cityToCheck + ' is already in the list';
            }
            // if (cityToCheck !== cities[i]) {
            //     document.getElementById('outputStatement').innerHTML = cityToCheck + ' is not in the list';
            // }
        }
        // cities.push(newCity)
        // alert('Congratulations ' + newCity + ' has been added in the list!')
        // document.getElementById('outputStatement').innerHTML = ""
        // for (let i = 0; i < cities.length; i++) {
        //     let num = i + 1;
        //     document.getElementById('outputStatement').innerHTML += num + ') ' + cities[i] + '<br />';
        // }
    }

