import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './apis/usersApi';
import { paymentsApi } from './apis/paymentsApi';
import { userReducer, setUser } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
    userData: userReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(paymentsApi.middleware)
  },
});

setupListeners(store.dispatch);

export default store;

export { setUser };

export {
  useFetchUsersQuery,
  useCreateUserMutation
} from './apis/usersApi';

export {
  useFetchPaymentsQuery
} from './apis/paymentsApi'
