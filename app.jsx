var React = require('react');
var ReactDOM = require('react-DOM');
var Greeter = require('Greeter');

var fullName = 'Roy Scheffers';
var shortMessage = 'Mastering React already, look at this Ninja :)'

ReactDOM.render(
  <Greeter name={fullName} message={shortMessage}/>,
  document.getElementById('app')
);
