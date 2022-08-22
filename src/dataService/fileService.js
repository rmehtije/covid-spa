export async function readCovidData() {
    return await fetch('/owid-covid-data.json').then(res => res.json());
}