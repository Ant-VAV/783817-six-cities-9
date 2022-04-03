import { useAppSelector } from '../../hooks/state';
import { APIRoute, FavoritePlaceAction, Page } from '../../const';
import { api } from '../../store';
import { useState } from 'react';
import { getAuthorizationStatus } from '../../store/selectors/selectors';
import { isAuthorized } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { handleError } from '../../api/handle-error';
import { Loader } from '../loader/loader';
import { PlaceInfo } from '../../types/client';

interface PlaceFavoriteButtonProps {
  isFavorite: boolean;
  placeId: number;
  onRefresh: () => void;
}

export function PlaceFavoriteButton(props: PlaceFavoriteButtonProps) {
  const { isFavorite, placeId, onRefresh } = props;
  const [isLoading, setIsLoading] = useState<boolean>();

  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoggedIn = isAuthorized(authorizationStatus);

  const handleButtonClick = async () => {
    if (!isLoggedIn) {
      navigate(Page.LogIn);
    }
    try {
      setIsLoading(true);
      await setFavorite(placeId, isFavorite ? FavoritePlaceAction.RemoveFromFavorite : FavoritePlaceAction.AddToFavorite);
      await onRefresh();
    } catch (e) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    isLoading ? (
      <Loader radius={18}/>
    ) : (
      <button
        className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
        type='button'
        onClick={handleButtonClick}
      >
        <svg className='place-card__bookmark-icon' width='18' height='19'>
          <use xlinkHref='#icon-bookmark'/>
        </svg>
        <span className='visually-hidden'>To bookmarks</span>
      </button>
    )
  );
}

async function setFavorite(id: number, action: FavoritePlaceAction) {
  await api.post<PlaceInfo>(`${APIRoute.Favorite}/${id}/${action}`);
}
