import { Header } from '../../components/layout/header/header';
import React, { useRef } from 'react';
import { useAppDispatch } from '../../hooks/state';
import { getAuthTokenAction } from '../../store/api-actions';
import { Link, useNavigate } from 'react-router-dom';
import { City, Page } from '../../const';

export function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (emailRef.current && passwordRef.current) {
      dispatch(getAuthTokenAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }

    navigate(Page.Main);
  };

  return (
    <div className='page page--gray page--login'>
      <Header isLoginPage/>
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action=''>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input className='login__input form__input' type='email' name='email' placeholder='Email' required
                  ref={emailRef}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input className='login__input form__input' type='password' name='password' placeholder='Password'
                  required ref={passwordRef}
                />
              </div>
              <button className='login__submit form__submit button' type='submit' onClick={handleSubmitButtonClick}>
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={`/${City.Amsterdam}`}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
