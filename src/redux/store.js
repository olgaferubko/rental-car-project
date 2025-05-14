import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favouriteReducer from "./favourites/slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
} from "redux-persist";


const favouritePersistConfig = {
  key: "favorites",
  version: 1,
  storage,
};

const persistedFavouritesReducer = persistReducer(
  favouritePersistConfig,
  favouriteReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: persistedFavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
