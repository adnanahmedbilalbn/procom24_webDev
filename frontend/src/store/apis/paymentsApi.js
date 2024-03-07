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
            // createUser: builder.mutation({
            //     query: (user) => {
            //         return {
            //             url: "/users/",
            //             method: "POST",
            //             body: {
            //                 name: user.name,
            //                 email: user.email,
            //                 password: user.password,
            //             },
            //         }
            //     }
            // })
        };
    }
});

// , useCreateUserMutation

export const { useFetchPaymentsQuery } = paymentsApi;
export { paymentsApi };