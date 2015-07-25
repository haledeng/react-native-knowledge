var React = require('react-native');

var Toast = require('Toast');

var {
    StyleSheet,
    Text,
    View
} = React;

var Demo = React.createClass({
    render: function(){
        return (
            <Toast errMsg='show tips'/>
        )
    }
})
