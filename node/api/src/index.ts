import { AddressInfo } from 'net';

import app from './presentation/index';

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
}});
