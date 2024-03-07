import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                query: (username) => {
                    return {
                        url: `/users/${username}`,
                        method: "GET"
                    }
                }
            }),
            createUser: builder.mutation({
                query: (user) => {
                    return {
                        url: "/users/",
                        method: "POST",
                        body: {
                            name: user.name,
                            email: user.email,
                            password: user.password,
                        },
                    }
                }
            })
        };
    }
});

export const { useFetchUsersQuery, useCreateUserMutation } = usersApi;
export { usersApi };