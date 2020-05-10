import React from 'react';
import Container from '@material-ui/core/Container';

import TableWrapper from './components/TableWrapper';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <TableWrapper />
      </Container>
    </div>
  );
}

export default App;
