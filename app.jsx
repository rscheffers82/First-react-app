var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React'
    };
  },
  render: function(){
    var name = this.props.name;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>Text from a paragraph within an component</p>
      </div>
    );
  }
})


ReactDOM.render(
  <Greeter name='Roy Scheffers'/>,
  document.getElementById('app')
);
