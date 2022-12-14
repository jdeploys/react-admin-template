import React, { ReactNode } from 'react';

interface ColumnWithSidebarLayoutProps {
  navigation: ReactNode;
  children: ReactNode;
}

const ColumnWithSidebarLayout = ({
  navigation,
  children,
}: ColumnWithSidebarLayoutProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
          <div className="sticky top-0 p-4 w-full">
            <ul className="flex flex-col overflow-hidden">{navigation}</ul>
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ColumnWithSidebarLayout;
