import React from 'react';

const LoadingPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    </div>
  );
};

export default LoadingPage;
