import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const paymentsApi = createApi({
    reducerPath: 'payments',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    endpoints(builder) {
        return {
            fetchPayments: builder.query({
                query: (accountNumber) => {
                    return {
                        url: `/api/getPayments/${accountNumber}`,
                        method: "GET"
                    }
                }
            }),
        };
    }
});

export const { useFetchPaymentsQuery } = paymentsApi;
export { paymentsApi };