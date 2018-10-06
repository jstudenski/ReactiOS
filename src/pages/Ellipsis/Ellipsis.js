import React from 'react';
import Header from '../../components/Header';
import theme from '../../theme';
import Card from '../../components/Card';

const { style } = theme;

const Ellipsis = () => (
  <div>
    <Header title="Ellipsis" secondary search={false} />
    <div style={{ padding: style.padding }}>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h3 className="medium">h3 medium</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
      </p>
      <Card />
    </div>
  </div>
);

export default Ellipsis;
