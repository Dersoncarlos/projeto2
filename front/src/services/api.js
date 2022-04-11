import axios from 'axios';
import { toast } from 'react-toastify';

toast.configure();

const api = axios.create({
    baseURL: 'http://d71c-131-196-127-44.ngrok.io/'
});

api.interceptors.response.use(async response => {
    return response
}, async error => {
    switch (error.response.status) {
        case 400:
            if (!!error.response.data.message) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            break;
        case 401:
            if (!!error.response.data.message) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            break;
        case 404:
            toast.error("O registro não foi localizado", {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
        case 422:
            //CASO EXISTA O PARAM ERRORS RETORNA RESPOSTA PARA PROMISE 
            toast.error('Preencha os campos corretamente.', toast.POSITION.TOP_RIGHT)
            if (!!JSON.parse(error.response.request.response).errors) {
                return JSON.parse(error.response.request.response);
            }
            break;
        case 500:
            if (!!JSON.parse(error.response.request.response).msg) {
                toast.error(JSON.parse(error.response.request.response).msg, {
                    position: toast.POSITION.TOP_RIGHT,

                });
            } else {
                toast.error("Ocorreu um erro, Tente mais tarde", {
                    position: toast.POSITION.TOP_RIGHT,

                });
            }
            break;
        default:
            toast.error("Ocorreu um erro, Tente mais tarde", {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
    }

})

export default api;