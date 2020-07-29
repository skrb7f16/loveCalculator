import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button, Card, Title, Paragraph } from 'react-native-paper';

class App extends React.Component {
  state = {
    You: "",
    crush: "",
    title:"",
    result:"",
    percentage:""
  }
  submit() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.You}&sname=${this.state.crush}`, {
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "f986d898e8mshf870453b8c75fa9p1618f2jsn35e6fde6d020"
      }
    })
      .then(data => data.json())
      .then(data2 => {
        this.setState({title:`${this.state.You} and ${this.state.crush}`});
        this.setState({result:`${data2.result}`})
        this.setState({percentage:`${data2.percentage}%`})
        console.log(data2);
      })
  }
  render() {
    return (

      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love Calculator"
            style={{
              alignItems: "center"
            }}

          />
        </Appbar.Header>
        <TextInput
          label="You"
          value={this.state.You}
          onChangeText={text=>this.setState({You:text})}
        />
        <TextInput
          label="Crush"
          value={this.state.crush}
          onChangeText={text=>this.setState({crush:text})}
        />
        <Button
          icon="heart"
          mode="contained"
          style={{
            margin: 10
          }}
          onPress={this.submit.bind(this)}
        >
          Calculate
        </Button>


    <Card
    style={{flex:1,justifyContent:"center",alignItems:"center",textAlign:"center"}}
    >
    <Card.Content>
        <Title>{this.state.title}</Title>
        <Paragraph>{this.state.percentage}</Paragraph>
        <Paragraph>{this.state.result}</Paragraph>
    </Card.Content>
  </Card>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1',
  },
});
