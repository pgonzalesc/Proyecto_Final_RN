import fetchApi from './fetchApi';

const dataApi = {
    createReserva: async (parameters) => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.post('/reservas', parameters, config);
        return data;
    },
    getFood: async () => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.get('/food', config);
        return data;
    },
    getMenu:async () => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.get('/menu', config);
        return data;
    },
    getHorario:async () => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.get('/horario', config);
        return data;
    },
    getReservas:async () => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.get('/reservas', config);
        return data;
    },
};

export default dataApi;