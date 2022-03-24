import axios from 'axios';
import { HttpCode, Page } from '../const';
import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { redirectToPageAction, setErrorAction } from '../store/actions';

export const handleErrorMessage = (message: string) => {
  store.dispatch(setErrorAction(message));
  store.dispatch(clearErrorAction());
};

export const handleError = (error: unknown): void => {
  if (!axios.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
      case HttpCode.Unauthorized:
        handleErrorMessage(response.data.error);
        break;
      case HttpCode.NotFound:
        store.dispatch(redirectToPageAction(Page.NotFound));
        handleErrorMessage(response.data.error);
        break;
    }
  }
};
