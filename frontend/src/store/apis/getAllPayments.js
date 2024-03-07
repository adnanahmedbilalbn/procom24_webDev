import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getAllPaymentsApi = createApi({
    reducerPath: 'allPayments',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000//api/',
    }),
    endpoints(builder) {
        return {
            fetchAllPayments: builder.query({
                query: () => {
                    return {
                        url: `/getAllPayments`,
                        method: "GET"
                    }
                }
            }),
        };
    }
});

export const { useFetchAllPaymentsQuery } = getAllPaymentsApi;
export { getAllPaymentsApi };