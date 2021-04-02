import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: "Loading"
        };
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?t=superman&apikey=28f4dae9")
        .then(data => data.json())
        .then(data2 => {
            console.log(data2.Title);
            this.setState({
                movieName: data2.Title,
                year: data2.Year,
                rated: data2.Rated,
                released: data2.Released,
                runTime: data2.RunTime,
                genre: data2.Genre,
                director: data2.Director
            });
        });
    }

    render() {
        return (
            <View style={{ flex: 1, top: '10%' }}>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Move Name : {this.state.movieName}
                </Text>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Year : {this.state.year}
                </Text>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Rated : {this.state.rated}
                </Text>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Released : {this.state.released}
                </Text>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Run Time : {this.state.runTime}
                </Text>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Genre : {this.state.genre}
                </Text>
                <Text style={{ fontSize: 25 }}> 
                {" "}
                Director : {this.state.director}
                </Text>
                
            </View>
        );
    }

}


export default MyApi;