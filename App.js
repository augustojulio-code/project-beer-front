import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={testes2}
        title="Dont click"
        color="#841584"
        accessibilityLabel="Dont click"
      />
    </View>
  );
}

function getData() {
  const user = {
    id: 0,
    name: '',
    password: '',
    email: ''
  }

  const [objUser, setObjUser] = useState(user);

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then(resp => resp.json())
      .then(data => setObjUser(data));
  }, []);

}



/*function testes() {
  fetch("localhost:8080/", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application.json'
    },
    body: JSON.stringify({
      name: 'josé',
      email: 'email@email.com',
      password: '123456'
    })
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error))
}*/

function testes2() {

  alert("Olá imbecil");
  console.log("Olá imbecil");
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
