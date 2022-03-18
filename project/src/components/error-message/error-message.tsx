import { useAppSelector } from '../../hooks/state';

function ErrorMessage() {
  const {error} = useAppSelector((state) => state);

  if (error) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30px',
          left: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
