import React from 'react';
import Layot from '../Components/Layout/Layout';
import Banner from '../Components/Banner/Banner';
import List from '../Components/List/List';
import datContent from '../Content/Content';

const App = () => (
  <>
    <Layot>
      <Banner />
      <List 
        title='List Items'
        items={datContent.items}
      />
    </Layot>
  </>
);

export default App;
