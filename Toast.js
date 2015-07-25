'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View
} = React;

var Toast = React.createClass({
    render: function(){
        return (
            <View style={styles.mask}>
                <View style={styles.toast}>
                    <Text style={styles.toastText}>{this.props.errMsg}</Text>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
	  mask: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',    
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: -64,
        right: 0
    },
    toast: {
        height: 80,
        marginRight: 80,
        marginLeft: 80,
        backgroundColor: '#000',
        opacity: 0.5,
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toastText: {
    	color: '#fff',
    	backgroundColor: 'transparent'
    }
});

module.exports = Toast;
