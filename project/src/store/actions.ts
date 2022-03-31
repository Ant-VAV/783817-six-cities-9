import { createAction } from '@reduxjs/toolkit';
import { Page, StoreAction } from '../const';

export const redirectToPageAction = createAction<Page>(StoreAction.RedirectToPage);
