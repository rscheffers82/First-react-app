var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

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

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'No message provided so display the default one'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message
    };
  },
  handleNewData: function (update) {
    this.setState(update);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div className="output">
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var fullName = 'Roy Scheffers';
var shortMessage = 'Mastering React already, look at this Ninja :)'

ReactDOM.render(
  <Greeter name={fullName} message={shortMessage}/>,
  document.getElementById('app')
);
