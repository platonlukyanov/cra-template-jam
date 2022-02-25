import { api } from '../../app/api';

// A mock function to mimic making an async request for data
const extendedApi = api.injectEndpoints({
    endpoints: builder => ({

    }),
    overrideExisting: false,
});

export const {} = extendedApi;
