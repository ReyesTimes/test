import reqService from './service.js';

export default async function(value) {
    try {
        const { data } = await reqService(value);
        return data;
    } catch {
        return new Error('Error al obtener issues');
    }
}