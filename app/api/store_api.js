import apiClient from './client';

export const fetchStores = () => (
    apiClient.get(`/stores`)
);