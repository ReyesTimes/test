import axios from 'axios';

const URL = 'https://api.github.com/search/issues';

export default async function (value) {
    try {
        const req = await axios({ method: 'GET', url: `${URL}?q=${value}+repo:facebook/react` });
        return req;
    } catch {
        return new Error('Error al ejecutar servicio');
    }


}