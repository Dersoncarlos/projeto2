import api from './api';

export const uploadCsv = async payload => {

    try {
        const fields = payload;
        const request = await api.post('api/csv/upload', { params: fields }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(request)
    } catch (err) {
        console.log('deu ruim', +err)
    }

}