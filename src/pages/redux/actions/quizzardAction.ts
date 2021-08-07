import axios from "../../../utils/http";
import * as types from "../types.json";
import {
  calculatePercentage,
  increaseVoteCount,
} from "../../../common/helpers/questionsDataHelper";

export const getEndPoint = () => async (dispatch: any) => {
  try {
    const res = await axios.get("/");
    dispatch({
      type: types.GET_ENDPOINT,
      payload: res.data.questions_url,
    });
  } catch (err) {
    dispatch(errorHandling(types.GET_ENDPOINT, err));
  }
};

export const getQuestions =
  (page: number = 1) =>
  async (dispatch: any, getState: () => any) => {
    const endpoint = getState().quizzard.endpoint;
    try {
      const res = await axios.get(endpoint, {
        params: { page: page },
      });
      dispatch({
        type: types.GET_QUESTIONS,
        payload: calculatePercentage(res.data),
      });
    } catch (err) {
      dispatch(errorHandling(types.GET_QUESTIONS, err));
    }
  };

export const voteOnQuestion =
  (optionUrl: string, questionUrl: string) =>
  async (dispatch: any, getState: () => any) => {
    const { questions } = getState().quizzard;
    try {
      await axios.post(optionUrl);
      dispatch({
        type: types.VOTE,
        payload: calculatePercentage(
          increaseVoteCount([...questions], questionUrl, optionUrl)
        ),
      });
    } catch (err) {
      dispatch(errorHandling(types.VOTE, err));
    }
  };

export const getQuestionData =
  (queId: string) => async (dispatch: any, getState: any) => {
    try {
      let endpoint = getState().quizzard.endpoint;
      if (!endpoint) {
        await dispatch(await getEndPoint());
        endpoint = getState().quizzard.endpoint;
      }
      const res = await axios.get(`${endpoint}/${queId}`);
      dispatch({
        type: types.GET_QUESTION,
        payload: calculatePercentage([res.data]),
      });
    } catch (err) {
      console.log(err, err.message, err.title);
      dispatch(errorHandling(types.GET_QUESTION, err));
    }
  };

const errorHandling = (type: string, error: any) => {
  return {
    type: "ERROR",
    payload: `Request failed for ${type}. Please try again later. ${
      error.message && `Error is ${error.message}`
    }`,
  };
};
