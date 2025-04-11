import axios from 'axios';
export async function fetchData() {
    axios.get('https://script.google.com/macros/s/AKfycbwCQre1RBcHEGxt_7F7tGQKHBQ3DN8mFt5KaFkeFPH4oTJcdS5hnjgHCWcDem6KMAqBuQ/exec')
    .then((response) => {
        const sheetData = response.data;
        console.log(sheetData);
        return sheetData;
    }).catch((error) => {
        console.log(error);
    });
}