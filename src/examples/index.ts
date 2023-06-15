import { CactusClient } from '@client';

const cactusClient = new CactusClient({
    baseUrl: 'https://cactus.staging.nicewit.ch/api/v2',
});

function login() {
    cactusClient.login
        .token({
            email: 'm.gouin+g.thenardier@b-sharpe.com',
            password: '123456A#',
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
}

login();
