import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { styles } from './styles'

type Props = {
  task: string,
  taskChecked:boolean,
  onRemove: () => void,
  onClick: () => void
}

export function Tasks({ task, onRemove, onClick, taskChecked }:Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Image source={taskChecked == false ? require('../../../assets/uncheck.png') : require('../../../assets/check.png')}/>
      </TouchableOpacity>

      {/* <Text style={check && styles.taskText}> */}
      <Text style={[styles.taskText, taskChecked == true && styles.taskTextChecked]}>
        {task}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={require('../../../assets/trash.png')}/>
      </TouchableOpacity>
    </View>
  )
}