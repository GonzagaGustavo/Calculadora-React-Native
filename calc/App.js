import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [display, setDisplay] = useState("");

  function insert(num) {
    const e = display + num;
    if(num != '/' && '*' && '+' && '-') {
      setDisplay(e)
    } else {
      if(display.length != 0) {
      if(display.substring(display.length, display.length -1) != '/') {
        if(display.substring(display.length, display.length -1) != '*') {
          if(display.substring(display.length, display.length -1) != '+') {
            if(display.substring(display.length, display.length -1) != '-') {
              setDisplay(e);
            }
          }
        }
      }
    } 
    }
  }
  function calc() {
    if (display) {
      const result = eval(display)
      setDisplay(`${result}`.substring(0, 9));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <ScrollView>
          <Text style={styles.display}>{display}</Text>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', width: '100%', height: '100%', flexWrap: 'wrap'}}>
        <View style={styles.btn} onTouchEnd={() => insert('1')}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('2')}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('3')}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('/')}>
          <Text style={styles.text}>➗</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('4')}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('5')}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('6')}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('*')}>
          <Text style={styles.text}>X</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('7')}>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('8')}>
          <Text style={styles.text}>8</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('9')}>
          <Text style={styles.text}>9</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('+')}>
          <Text style={styles.text}>+</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => setDisplay(display.substring(0, display.length -1))}>
          <Text style={styles.text}><Icon name="backspace-outline" size={50} /></Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('0')}>
          <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => setDisplay("")}>
          <Text  style={styles.text}>C</Text>
        </View>
        <View style={styles.btn} onTouchEnd={() => insert('-')}>
          <Text  style={styles.text}>-</Text>
        </View>
        <View style={styles.btn2} onTouchEnd={() => calc()} onTouchStart={() => styles.hover}>
          <Text  style={styles.text}>=</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  display: {
    fontSize: 80,
    margin: 5,
    marginTop: 20
  },
  div: {
    height: "20%",
    backgroundColor: "#0001",
    alignItems: "flex-end",
  },
  btn: {
    backgroundColor: "#3f9",
    borderRadius: 100,
    padding: 10,
    margin: 10,
    width: '20%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
  btn2: {
    backgroundColor: "#3f9",
    borderRadius: 100,
    padding: 10,
    margin: 10,
    width: '94%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hover: {
    backgroundColor: 'blue'
  }
});
