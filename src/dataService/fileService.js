// Exportirujem asynhronnuju funkcqiju kotoraja vozvrashajet nam sostav owid-covid-data.json v json formate
// funkcqja fetch otpravljajet GET zapros na http://localhost:3000/owid-covid-data.json
// await obespecivajet vqpolnenija funkcqii i dozhedajet polnqj otvet
export async function readCovidData() {
    return await fetch('owid-covid-data.json').then(res => res.json());
}