import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
  };
}

export const options = {
    stages: [
        { duration: "1m", target: 20 }, 
        { duration: "2m", target: 40 },
        { duration: "5m", target: 100 },
    ],
    thresholds: {
      http_reqs: ['count < 300'],
  },
};

  export default function () {

  const res = http.get('https://xxxxxxxxxxxxxxxx/xxxxxxxxxxxxx');
// Ex: http://localhost:3000/teste
  
  sleep(1);
}