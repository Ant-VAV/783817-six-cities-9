import { Header } from '../../components/layout/header/header';

export function NotFound() {
  return (
    <div className='page page--gray'>
      <Header />
      <main className='page__main'>
        <h1 style={{textAlign: 'center'}}>Oops. Page not found.</h1>
      </main>
    </div>
  );
}
