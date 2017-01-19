var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var $ = require('jquery');

var App =
  React.createClass({
    componentWillMount: function() {
      $.ajax({
        method: "GET",
        url: "/auth/is_signed_in.json"
      })
      .done(function(data){
        this.setState({ signedIn: data.signed_in });
      }.bind(this));
    },
    getInitialState: function() {
      return { signedIn: null };
    },
    render: function(){
      return <RouteHandler signedIn={this.state.signedIn}/>;
    }
  });
  module.exports = App;
