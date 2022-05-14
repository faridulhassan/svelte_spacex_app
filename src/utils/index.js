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

export const uid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) => (a ^ ((Math.random() * 16) >> (a / 4))).toString(16));
};
export const convertToInternationalCurrencySystem = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
        ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(labelValue));
};
