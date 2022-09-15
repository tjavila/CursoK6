import http from 'k6/http';

import { sleep } from 'k6';

export const options = {

    vus: 1000,
  
    duration: '60s',
  
  };

export default function () {

    const url = 'https://user-permission-manager-api.qa.intranet.pags/v1/customers';
  
    const payload = JSON.stringify({
  
      cod_customer: 'teste '+Math.floor(Math.random() * 101),
  
      profiles: ["principal_interno"],
  
    });
  
  
    const params = {
  
      headers: {
  
        'Content-Type': 'application/json',
  
      },
  
    };
  
  
    const res = http.post(url, payload, params);
    sleep(1);
  
  }