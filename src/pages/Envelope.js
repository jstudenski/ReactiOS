import React from 'react';
import SegmentControl from '../components/SegmentControl';
import Header from '../components/Header';
import Segments from '../components/Segments';

const Envelope = () => (
  <div>
    <Header title="Envelope" secondary={false} />
    <div>
      <SegmentControl color="rebeccapurple" values={['One', 'Two']} selectedIndex={1} />
      <Segments tabs={['Salmon', 'Dark Slate Gray', 'Aquamarine']} color="#007AFF" />
    </div>
  </div>
);

export default Envelope;
