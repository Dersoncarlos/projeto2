import api from "./api";

export function uploadFile(file) {
    try {
        const data = apiUploadCsv(file);
    } catch (error) {
        console.log("error " + error);
    }
}

const apiUploadCsv = async (payload) => {

    const file = payload.csv;
    const dataForm = new FormData();
    dataForm.append("csv", file);

    const request = await api.post("api/csv/upload", dataForm, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    return request;
};

export function testando(file) {
    try {
        testApi(file);
    } catch (error) {
        console.log(error);
    }
}

const testApi = async (payload) => {
    console.log("get");
    try {
        const fields = payload;
        const request = await api.get("");
        console.log("request back", request);
    } catch (err) {
        console.log("deu ruim", +err);
    }
};
