import React from 'react';
import {Text,View,Image,TouchableOpacity,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) =>{
    console.log(props)
    const {sketchStyle,thumbnailBorderStyle,textContainerStyle,albumTitleStyle} = styles;
    return (
        <Card>

            <CardSection>
                <View style={thumbnailBorderStyle}>
                    <Image
                    style={{width: 50, height: 50}}
                    source={{uri:props.album.thumbnail_image}}
                    />
                </View>
                    
                <View style={textContainerStyle}>
                    <Text style={albumTitleStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                    <Image style={sketchStyle} source={{uri:props.album.image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(props.album.url)}>
                    Buy Now
                </Button>
            </CardSection>

        </Card>
    )
}

const styles = {
    textContainerStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    albumTitleStyle:{
        fontWeight:'bold',
        fontSize:22
    },
    thumbnailBorderStyle:{
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    sketchStyle:{
        width:null,
        height:300,
        flex:1
    }
}


export default AlbumDetail;