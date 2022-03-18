import axios from 'axios';
import { HttpCode } from '../const';
import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { setErrorAction } from '../store/actions';

export const handleError = (error: unknown): void => {
  if (!axios.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  const handleErrorMessage = (message: string) => {
    store.dispatch(setErrorAction(message));
    store.dispatch(clearErrorAction());
  };

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleErrorMessage(response.data.error);
        break;
      case HttpCode.Unauthorized:
        handleErrorMessage(response.data.error);
        break;
      case HttpCode.NotFound:
        handleErrorMessage(response.data.error);
        break;
    }
  }
};
