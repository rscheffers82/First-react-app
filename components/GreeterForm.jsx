var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var update = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      update.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      update.message = message;
    }

    this.props.onNewData(update);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-form">
          <div>
            <input type="text" ref="name" placeholder="Enter a name..."/>
          </div>
          <div>
            <textarea ref="message" rows="3" placeholder="Type your message..."/>
          </div>
          <div>
            <button>Update details</button>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
