import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './apis/usersApi';
import { paymentsApi } from './apis/paymentsApi';
import { getAllPaymentsApi } from './apis/getAllPayments';
import { userReducer, setUser } from "./slices/usersSlice";
import { loginReducer, setLoginState } from './slices/loginSlice';
import { customerLoginReducer, setCustomerLoginState } from './slices/customerLoginSlice';
import { useChangePaymentStatusMutation } from './apis/paymentsApi'

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [getAllPaymentsApi.reducerPath]: getAllPaymentsApi.reducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
    userData: userReducer,
    isLoggedIn: loginReducer,
    isCustomerLoggedIn: customerLoginReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(paymentsApi.middleware)
      .concat(getAllPaymentsApi.middleware)
  },
});

setupListeners(store.dispatch);

export default store;

export { setUser, setLoginState, setCustomerLoginState }

export {
  useFetchUsersQuery,
  useCreateUserMutation
} from './apis/usersApi';

export {
  useFetchPaymentsQuery,
  useChangePaymentStatusMutation
} from './apis/paymentsApi'

export {
  useFetchAllPaymentsQuery
} from './apis/getAllPayments'