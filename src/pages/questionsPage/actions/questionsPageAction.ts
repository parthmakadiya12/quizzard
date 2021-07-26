import { errorHandling } from "../../../common/redux/commonActions";
import axios from "../../../utils/http";
import * as types from "../types.json";

const getEndPoint = () => async (dispatch: any) => {
  try {
    const res = await axios.get("/");
    dispatch({
      type: types.GET_ENDPOINT,
      payload: res.data.questions_url,
    });
  } catch (err) {
    errorHandling(types.GET_ENDPOINT, err);
  }
};

const getQuestions =
  (page: number = 0) =>
  async (dispatch: any, getState: () => any) => {
    const endpoint = getState().quizzard.endpoint;
    try {
      const res = await axios.get(`${endpoint}`, { params: { page: page } });
      dispatch({
        type: types.GET_QUESTIONS,
        payload: res.data,
      });
    } catch (err) {
      errorHandling(types.GET_QUESTIONS, err);
    }
  };

export { getEndPoint, getQuestions };
