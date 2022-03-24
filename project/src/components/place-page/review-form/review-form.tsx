import React, { useRef, useState } from 'react';
import { api, store } from '../../../store';
import { Review } from '../../../types/client';
import { APIRoute } from '../../../const';
import { setPlaceReviewAction } from '../../../store/actions';
import { handleError, handleErrorMessage } from '../../../api/handle-error';

interface ReviewFormProps {
  placeId: string;
}

export function ReviewForm(props: ReviewFormProps) {
  const { placeId } = props;
  const [isActiveElement, setIsActiveElement] = useState<boolean>();
  const [isDataSending, setIsDataSending] = useState<boolean>();
  const rateRef = useRef<HTMLDivElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const setSubmitButtonActive = () => {
    if (rateRef.current?.querySelector('.form__rating-input:checked') && commentRef.current?.value) {
      setIsActiveElement(true);
      return;
    }
    setIsActiveElement(false);
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (commentRef.current && rateRef.current) {
      if (commentRef.current.value.length < 50) {
        handleErrorMessage('Слишком мало буков');
        return;
      }
      if (commentRef.current.value.length > 300) {
        handleErrorMessage('Слишком много буков');
        return;
      }

      try {
        setIsDataSending(true);

        const ratingInput = rateRef.current.querySelector('.form__rating-input:checked') as HTMLInputElement;
        const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${placeId}`, {
          comment: commentRef.current.value,
          rating: ratingInput.value,
        });
        store.dispatch(setPlaceReviewAction(data));

        commentRef.current.value = '';
        ratingInput.checked = false;
      } catch (e) {
        handleError(e);
      } finally {
        setIsDataSending(false);
      }
    }
  };

  return (
    <form className='reviews__form form' onSubmit={onFormSubmit} onChange={setSubmitButtonActive}>
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating' ref={rateRef}>
        <input className='form__rating-input visually-hidden' name='rating' value='5' id='5-stars'
          type='radio' disabled={isDataSending}
        />
        <label htmlFor='5-stars' className='reviews__rating-label form__rating-label' title='perfect'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'/>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden' name='rating' value='4' id='4-stars'
          type='radio' disabled={isDataSending}
        />
        <label htmlFor='4-stars' className='reviews__rating-label form__rating-label' title='good'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'/>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden' name='rating' value='3' id='3-stars'
          type='radio' disabled={isDataSending}
        />
        <label htmlFor='3-stars' className='reviews__rating-label form__rating-label' title='not bad'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'/>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden' name='rating' value='2' id='2-stars'
          type='radio' disabled={isDataSending}
        />
        <label htmlFor='2-stars' className='reviews__rating-label form__rating-label' title='badly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'/>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden' name='rating' value='1' id='1-star'
          type='radio' disabled={isDataSending}
        />
        <label htmlFor='1-star' className='reviews__rating-label form__rating-label' title='terribly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'/>
          </svg>
        </label>
      </div>
      <textarea className='reviews__textarea form__textarea' id='review' name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        ref={commentRef} disabled={isDataSending}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and
          describe
          your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit'
          disabled={!isActiveElement}
        >{isDataSending ? 'Чо-то делаем с сервером' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
