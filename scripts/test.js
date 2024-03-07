import http from 'k6/http'

export let options = {
    vus: 10,
    duration: '10s',
    // iterations: 10

}

export default function() {
    http.get("https://897p170n-7000.asse.devtunnels.ms/api/autoclik-data/get-alldata")
}