import { setupServer } from 'msw/node';
import { http, HttpResponse, delay } from 'msw';
import data from '../../assets/data.json';

const mswServer = setupServer(
  http.get('/data.json', async () => {
    await delay(150);
    return HttpResponse.json(data);
  }),
);

export { mswServer };
