import { TailSpin } from 'react-loader-spinner';
import React from 'react';

export function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TailSpin ariaLabel='loading-indicator'/>
    </div>
  );
}
