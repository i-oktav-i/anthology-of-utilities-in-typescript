import fs from 'fs/promises';

let headersList = {
  Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'ru,en;q=0.9',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
  Host: 'nvrgngyu.ctf-2025.ilovefrontend.ru',
  Pragma: 'no-cache',
  Referer: 'https://nvrgngyu.ctf-2025.ilovefrontend.ru/',
  'Sec-Fetch-Dest': 'image',
  'Sec-Fetch-Mode': 'no-cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 YaBrowser/24.12.0.0 Safari/537.36',
  'sec-ch-ua': `"Chromium";v="130", "YaBrowser";v="24.12", "Not?A_Brand";v="99", "Yowser";v="2.5"`,
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': `"Windows"`,
};

let response = await fetch('https://nvrgngyu.ctf-2025.ilovefrontend.ru/img', {
  method: 'GET',
  headers: headersList,
});

let data = await response.text();

fs.writeFile('img.txt', data);
