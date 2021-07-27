export const errorHandling = (type: string, error: any) => {
  return {
    type: "ERROR",
    payload: `Request failed for ${type}. Please try again later. ${getError(
      error
    )}`,
  };
};
function getError(error: any) {
  let errorName;
  if (error.message) errorName = error.message;
  else if (error.title) errorName = error.title;
  return errorName ? `Error is ${errorName}` : "";
}
