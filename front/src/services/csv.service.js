import api from "./api";

export const uploadCsv = async (payload) => {

    const file = payload.csv;
    const dataForm = new FormData();
    dataForm.append("csv", file);

    const { data } = await api.post("api/csv/upload", dataForm, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    return data;
};

