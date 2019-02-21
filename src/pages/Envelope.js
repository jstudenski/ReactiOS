import React from 'react';
import Header from '../components/Header';
import Segments from '../components/Segments';

const Envelope = () => (
  <div>
    <Header title="Envelope" secondary={false} />
    <div>
      <Segments
        tabs={['Salmon', 'DarkSlateGray', 'Aquamarine']}
        color="#007AFF"
      />
    </div>
  </div>
);

export default Envelope;
