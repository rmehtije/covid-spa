export async function readCovidData() {
    return await fetch('https://gammatest.net/course/javascript/react2/owid-covid-data.json').then(res => res.json());
}