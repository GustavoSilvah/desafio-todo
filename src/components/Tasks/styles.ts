import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    width: 327,
    marginLeft: 40,
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 8
  },
  taskText: {
    color: '#F2F2F2',
    width: 235,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 14
  },
  taskTextChecked: {
    textDecorationLine: 'line-through',
    color: '#a9a9a9'
  }
})