import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './reducers/counterSlice';


function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => dispatch(increment())} >
          <Text style={{ color: "#000" }}>Increment</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())} >
          <Text style={{ color: "#000" }}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Counter;