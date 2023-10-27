import React, {lazy, Suspense} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer.tsx';
import {ITab} from '../intetfaces/ITab'


const createComponentsMap = (tabs: ITab[]) => {
  const componentsMap: Record<string, React.LazyExoticComponent<any>> = {};

  tabs.forEach((tab) => {
    componentsMap[tab.id] = lazy(() => import(`../tabs/${tab.id}`));
  });

  return componentsMap;
};


const AppRouter: React.FC<{ tabs: ITab[] }> = ({tabs}) => {
  const defaultTab = tabs[0]?.id;
  const dynamicComponentsMap = createComponentsMap(tabs);

  return (
    <Router>

      <Header tabs={tabs}/>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>

          <Route path="/" element={<Navigate to={`/${defaultTab}`} replace/>}/>

          {tabs.map((tab: ITab) => {
            const Component = dynamicComponentsMap[tab.id];
            if (Component) {
              return (
                <Route
                  key={tab.id}
                  path={`/${tab.id}`}
                  element={React.createElement(Component)}
                />);
            }
            return null;
          })}
        </Routes>

      </Suspense>
      <Footer/>

    </Router>
  );
};

export default AppRouter;
