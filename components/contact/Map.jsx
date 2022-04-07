import React from 'react';

export default function Map({ maps }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <iframe src={maps} width="100%" height="570"></iframe>
    </div>
  );
}
