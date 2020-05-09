import React from 'react';
import Container from '@material-ui/core/Container';

import TableWrapper from './components/TableWrapper';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Container maxWidth="lg">
        <TableWrapper />
      </Container>
    </div>
  );
}

export default App;
