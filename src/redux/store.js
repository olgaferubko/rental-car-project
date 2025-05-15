import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favouritesReducer from "./favourites/slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
} from "redux-persist";


const favouritesPersistConfig = {
  key: "favourites",
  version: 1,
  storage,
};

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favourites: persistedFavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
