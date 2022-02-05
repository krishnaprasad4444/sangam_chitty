import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';

const HomeScreen = (props) => {

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Admin Options</Text>
      </View>

      <View style={[styles.footer, { backgroundColor: colors.background }]}>
        <View style={{ marginVertical: 20, width: 200, borderRadius: 50, overflow: 'hidden' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ChittyMaster')}>
            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.btn}>
              <Text style={[styles.btn_text, { color: '#fff' }]}>Chitty Master</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20, width: 200, borderRadius: 50, overflow: 'hidden' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ChittyOpening')}>
            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.btn}>
              <Text style={[styles.btn_text, { color: '#fff' }]}>Chitty Opening</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  footer: {
    flex: 9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  btn_text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
