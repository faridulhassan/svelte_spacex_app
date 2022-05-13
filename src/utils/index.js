import { api } from "../api";

export const getDataAsync = async (params) => {
    try {
        const result = await api.get(params.path, params.config || {});
        if (result.status == 200 || result.statusText.toLowerCase() === "ok") {
            return result.data;
        } else {
            throw new Error(result.statusText);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
