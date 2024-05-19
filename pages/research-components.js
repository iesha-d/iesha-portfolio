import React from 'react';

function ImageWithCaption({ src, alt, caption }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={src} alt={alt} style={{ width: '150px' }} />
      <p>{caption}</p>
    </div>
  );
}



export default ImageWithCaption;