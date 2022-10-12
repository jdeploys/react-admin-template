import React, { ReactNode } from 'react';

interface FullScreenBackgroundImageWithCenteredOverlayLayoutProps {
  children?: ReactNode;
}

const FullScreenBackgroundImageWithCenteredOverlayLayout = ({
  children,
}: FullScreenBackgroundImageWithCenteredOverlayLayoutProps) => {
  return (
    <div className="w-full p-4">
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-center"
      >
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
          <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FullScreenBackgroundImageWithCenteredOverlayLayout;
