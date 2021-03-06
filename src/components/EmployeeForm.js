import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
  render() {
    return (
      <View>
       <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text }) }
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="+91-929-3939"
            onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text }) }
            value={this.props.phone}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerLabelStyle} >Select</Text>
          <View style={{flex: 1, marginLeft: 5}}>
            <Picker
              style={{flex: 1}}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect (mapStateToProps, { employeeUpdate })(EmployeeForm);