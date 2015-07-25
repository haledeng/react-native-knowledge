

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  Image
} = React;

var RepeatImage = React.createClass({
  render: function(){
    var images = [],  
        imgWidth = 7,
        winWidth =Dimensions.get('window').width;
    for(var i=0;i<Math.ceil(winWidth / imgWidth);i++){
      images.push((
        <Image source={{uri: 'http://xxx.png'}} style={} />
      ))
    }
    
    return (
      <View style={{flex:1,flexDirection:'row'}}>
      {
        images.map(function(img,i){
          return img;
        })
      }
      </View>
    )
  }
}
