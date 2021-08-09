import axios from "../../../utils/http";
import * as types from "../types.json";
import { CreateQuestionType } from "../../../common/types/CreateQuestionType";
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
      const endpoint = await getEndpoint(dispatch, getState);
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
const getEndpoint = async (dispatch: any, getState: any) => {
  let endpoint = getState().quizzard.endpoint;
  if (!endpoint) {
    await dispatch(await getEndPoint());
    endpoint = getState().quizzard.endpoint;
  }
  return endpoint;
};

export const createQuestion =
  (question: CreateQuestionType) =>
  async (dispatch: any, getState: any): Promise<any> => {
    try {
      const endpoint = await getEndpoint(dispatch, getState);
      await axios.post(`${endpoint}`, question);
      dispatch({
        type: types.CREATE_QUESTION,
      });
      return true;
    } catch (err) {
      console.log(err, err.message, err.title);
      dispatch(errorHandling(types.CREATE_QUESTION, err));
    }
  };

export const validateResult =
  (questionObj: CreateQuestionType) => (dispatch: any, getState: any) => {
    // TODO: in future versions add with joi for better validation.
    let result;
    if (!questionObj.question) result = false;
    else if (questionObj.choices.length === 0) result = false;
    else result = true;

    if (!result) {
      dispatch({
        type: types.ERROR,
        payload: "Please fill question and Choice correctly.",
      });
    }
    return result;
  };

export const clearError = () => (dispatch: any, getState: any) => {
  dispatch({
    type: types.ERROR_CLEAR,
  });
};

const errorHandling = (type: string, error: any) => {
  return {
    type: "ERROR",
    payload: `Request failed for ${type}. Please try again later. ${
      error.message && `Error is ${error.message}`
    }`,
  };
};
