// State transition functions
export const loading = (): AppLoading => ({ type: "loading" });
export const success = <T extends unknown>(data: T): AppSuccess<T> => ({
  type: "success",
  data,
});
export const error = (error: Error): AppError => ({ type: "error", error });

// The type of our application state can be the return type of any of the state
// transition functions
export type AppStatus<T> = AppLoading | AppSuccess<T> | AppError;

export type AppLoading = { type: "loading" };
export type AppSuccess<T> = { type: "success"; data: T };
export type AppError = { type: "error"; error: Error };
