import React from 'react';
import SegmentControl from '../../components/SegmentControl';
import Header from '../../components/Header';

const Envelope = () => (
  <div>
    <Header title="Envelope" secondary={false} search={false} />
    <div className="container">
      <SegmentControl
        color="rebeccapurple"
        values={['One', 'Two']}
        selectedIndex={1}
      />
    </div>
  </div>
);

export default Envelope;
