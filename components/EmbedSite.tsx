import React, { useState } from 'react';

const EmbedSite = ({ url }: { url: string }) => {
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setError(false);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className="mt-4">
      {error ? (
        <div className="text-red-500">
          Unable to embed this website. It may have restrictions.
        </div>
      ) : (
        <iframe
          src={url}
          style={{ width: '100%', height: '80vh' }}
          sandbox="allow-scripts allow-same-origin allow-forms"
          onLoad={handleLoad}
          onError={handleError}
        ></iframe>
      )}
    </div>
  );
};

export default EmbedSite;
