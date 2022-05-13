import { api } from "../api";

export const getData = async (params) => {
    try {
        const result = await api.get(params.path, params.config || {});
        if (result.status == 200 || result.statusText.toLowerCase() === "ok") {
            return result.data;
        } else {
            throw new Error(result);
        }
    } catch (error) {
        throw error.response;
    }
};
