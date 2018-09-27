import React from 'react';
import SegmentControl from '../../components/SegmentControl';

const Envelope = () => (
  <div>
    <h2 className="page-heading">Envelope</h2>
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
