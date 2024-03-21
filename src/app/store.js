// import { configureStore } from "@reduxjs/toolkit";
// import { cryptoApi } from "../services/cryptoApi";
// export default configureStore({
//   reducer: {
//     [cryptoApi.reducerPath]: cryptoApi.reducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    // other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoNewsApi.middleware,
      cryptoApi.middleware
    ),
});

// setupListeners(configureStore.dispatch);
