import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Platform, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import DatePicker from 'react-native-neat-date-picker';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import LinearGradient from 'react-native-linear-gradient';

const ChittyMaster = () => {

  const { colors } = useTheme();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [asiCheck, setAsiCheck] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false)

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Chitty Master</Text>
      </View>

      <View style={[styles.footer, { backgroundColor: colors.background }]}>
        <ScrollView>
          <View style={styles.action}>
            <TextInput placeholder="Resolution No" placeholderTextColor="#666666" style={styles.textInput} autoCapitalize="none" />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Opening Date" placeholderTextColor="#666666" style={styles.textInput} onPressIn={openDatePicker} />
            <DatePicker isVisible={showDatePicker} mode={'single'} onCancel={onCancel} onConfirm={onConfirm} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Period in months" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Maturity Date" placeholderTextColor="#666666" style={styles.textInput} editable={false} />
          </View>

          <View style={styles.action}>
            <TextInput placeholder="Inst Amount" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="No Of Persons" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Sala" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={false} />
          </View>

          <View style={styles.action}>
            <TextInput placeholder="Call upto (%)" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Commission (%)" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Fine % (Called)" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Fine % (Un Called)" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>

          <View style={styles.action}>
            <TextInput placeholder="Maximum shares" keyboardType='number-pad' placeholderTextColor="#666666" style={styles.textInput} editable={true} />
          </View>

          <View style={{ paddingLeft: 10, marginTop: 15, }}>
            <CircleCheckBox innerColor={'#009387'} outerColor={'#009387'} outerSize={20} filterSize={16} innerSize={13} checked={asiCheck} onToggle={(checked) => setAsiCheck(checked)} labelPosition={LABEL_POSITION.RIGHT} label="Adjust Share Interest ?" styleLabel={{ color: colors.text }} />
          </View>

          <View style={{marginVertical: 30, width: '100%', borderRadius: 50, overflow: 'hidden' }}>
            <TouchableOpacity>
              <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.btn}>
                <Text style={[styles.btn_text, { color: '#fff' }]}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

export default ChittyMaster;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  footer: {
    flex: 9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },

  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  btn: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  btn_text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});