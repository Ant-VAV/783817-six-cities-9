import { TailSpin } from 'react-loader-spinner';
import React from 'react';

interface LoaderProps {
  radius?: number;
}

export function Loader(props: LoaderProps) {
  const { radius } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TailSpin ariaLabel='loading-indicator' height={radius} width={radius}/>
    </div>
  );
}
