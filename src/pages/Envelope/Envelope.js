import React from 'react';
import SegmentControl from '../../components/SegmentControl';
import Header from '../../components/Header';

const Envelope = props => (
  <div>
    <Header title="Envelope" secondary={false} />
    <div>
      <SegmentControl
        color="rebeccapurple"
        values={['One', 'Two']}
        selectedIndex={1}
      />
    </div>
  </div>
);

export default Envelope;
