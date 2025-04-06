import React from 'react';

export default function BackgroundElements() {
  return (
    <>
      {/* Background design elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
    </>
  );
}