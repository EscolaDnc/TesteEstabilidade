import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
  };
}

export const stressTest_options = {
    stages: [
        { duration: "2m", target: 10 },
        { duration: "5m", target: 40 },
        { duration: "10m", target: 100 },
    ],
    thresholds: {
      http_reqs: ['count < 300'],
  },
};

//Trocar o endereço da aplicação e os parâmetros para enviar no teste
  export default function () {
    const url = 'https://xxxxxxxxxxx/xxxxxxxxxx';
    const payload = JSON.stringify({
      "parametro 1": "valor",
      "parametro 2": "valor",
    });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
     const res = http.post(url, payload, params);
    sleep(1);

    const checkRes = check(res, {
        'status is 201': (r) => r.status === 201
    });
}