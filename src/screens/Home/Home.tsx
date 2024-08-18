import { Text, View, Image, TextInput, FlatList, TouchableOpacity, Alert } from "react-native";
import React, { useState } from 'react';

import { styles } from "./styles";
import { Tasks } from "../../components/Tasks/Tasks";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksText, setTasksText] = useState('');
  const [countCreated, setCountCreated] = useState(0);
  const [countDone, setCountDone] = useState(0);
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  function handleTaskAdd() {
    if (tasks.includes(tasksText))
      return Alert.alert("Adicionar tarefa.", "Tarefa já adicionada na lista!");

    setTasks(prevState => [...prevState, tasksText]);
    setCountCreated(prevState => prevState + 1);
    setTasksText('');
  }

  function handleTaskRemove(task:string) {
    Alert.alert("Remover tarefa.", `Deseja remover a tarefa?`, [
      {
        text: "Sim",
        onPress: () => setTasks(prevState => {
          const removeState = prevState.filter(tasks => tasks !== task);
          setCountCreated(prevState => prevState - 1);
          return removeState;
        })
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ]);
  }

  function handleCheckBox(item:string) {
    setChecked(prevState => {
      const newChecked = { ...prevState, [item]: !prevState[item] };
      const increment = newChecked[item] ? 1 : -1;
      setCountDone(prevState => prevState + increment);
      return newChecked;
    });
    // setChecked(prevState => ({
    //   ...prevState,
    //   [item]: !prevState[item],
    // }));
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image 
          source={require('../../../assets/todo_Logo.png')}
        />
      </View>

      <View style={styles.form}>
        <TextInput style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          onChangeText={e => setTasksText(e)}
          value={tasksText}
        />

        <TouchableOpacity style={styles.plusButton} onPress={handleTaskAdd}>
          <Image 
            source={require('../../../assets/plus_Icon.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.count}>
        <View style={styles.countCreated}>
          <Text style={styles.textCreated}>Criadas</Text>
          <Text style={styles.countText}>
            { countCreated }
          </Text>
        </View>
        
        <View style={styles.countDone}>
          <Text style={styles.textDone}>Concluídas</Text>
          <Text style={styles.countText}>
            { countDone }
          </Text>
        </View>
      </View>
    
      <View>
        <FlatList style={styles.list}
          data={tasks}
          keyExtractor={ item => item}
          renderItem={({ item }) => (
            <Tasks 
              key={item}
              task={item}
              onRemove={() => handleTaskRemove(item)}
              onClick={() => handleCheckBox(item)}
              taskChecked={!!checked[item]}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (            
            <View style={styles.boardContainer}>
              <View style={styles.rowSeparator} />

              <Image 
                source={require('../../../assets/clipboard.png')}
              />

              <Text style={styles.textBoardOne}>
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={styles.textBoardTwo}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}