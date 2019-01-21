import React from 'react';

class Message extends React.Component {

  render() {
    return (
      <div>
          <b>{this.props.message}</b>
      </div>
    )
  }
}

export default Message
