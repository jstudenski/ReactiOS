import React from 'react';

class Segments extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.state = {
      tabs: this.props.tabs || [],
      selected: 0,
      tintColor: this.props.color || '#007AFF',
    };
  }

  handleTabClick(index) {
    this.setState({ selected: index });
  }

  tabRadius(index) {
    switch (index) {
      case 0:
        return '3px 0 0 3px';
      case this.state.tabs.length - 1:
        return '0 3px 3px 0';
      default:
        return '0 0 0 0';
    }
  }

  render() {
    const { tabs, selected } = this.state;
    const styles = {
      tabContainer: {
        display: 'flex',
        flex: 1,
        border: `1px solid ${this.state.tintColor}`,
        borderRadius: 4,
      },
    };
    return (
      <div style={styles.tabContainer}>
        {
          tabs.map((tab, i) => {
            const tabStyles = {
              tab: {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                padding: 8,
                borderRadius: this.tabRadius(i),
                borderRight: (i === (this.state.tabs.length - 1)) ? `0px solid ${this.state.tintColor}` : `1px solid ${this.state.tintColor}`,
                background: (i === this.state.selected) ? this.state.tintColor : '#FFFFFF',
                cursor: 'pointer',
                userSelect: 'none',
              },
              content: {
                color: (i === selected) ? '#FFFFFF' : this.state.tintColor
              }
            };

            return (
              <div key={i} style={tabStyles.tab} onClick={() => this.handleTabClick(i)}>
                <span style={tabStyles.content}>{tab}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Segments;