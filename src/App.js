import './App.css';
import React from 'react';
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import FoodEntryStack from './components/FoodEntryStack';
import logo from './logo.png';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>
      <Segment inverted textAlign='center' style={{ padding: '1em 0em', backgroundColor: '#8294C4' }}>
        <Header as='h1' style={{ fontFamily: 'Kaushan Script', fontSize: '4em', margin: 0, color: '#eeeeee' }}>
          <Image src={logo} style={{ width: '2em', height: '2em', marginRight: '0.5em' }} />
          Dear Dairy
        </Header>
      </Segment>
      <Container style={{ marginTop: '2em' }}>
      <div className="app-content">
        <FoodEntryStack />
      </div>
      </Container>
    </div>
  );
}

export default App;


