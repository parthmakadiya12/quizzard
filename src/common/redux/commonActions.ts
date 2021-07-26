export const errorHandling =
  (type: string, error: any) => async (dispatch: any) => {
    dispatch({
      type: "ERROR",
      payload: `Request failed for ${type}. Please try again later. Error is ${error.response.data}`,
    });
  };
