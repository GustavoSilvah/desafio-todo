import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  image: {
    width: '100%',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    position: 'absolute'
  },
  form: {
    marginTop: '35%',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },
  textInput: {
    width: 275,
    height: 54,
    padding: 16,
    marginRight: 4,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#FFF'
  },
  plusButton: {
    width: 54,
    height: 54,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  textCreated: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
    marginRight: 8,
    justifyContent: 'flex-start'
  },
  textDone: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
    marginRight: 8,
    justifyContent: 'flex-end'
  },
  count: {
    width: 327,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40
  },
  countText: {
    width: 25,
    height: 19,
    color: '#D9D9D9',
    backgroundColor: '#333333',
    textAlign: 'center',
    borderRadius: 999
  },
  countCreated: {
    flexDirection: 'row'
  },
  countDone: {
    flexDirection: 'row'
  },
  rowSeparator: {
    height: 1,
    width: 327,
    backgroundColor: '#333333',
    marginBottom: 48
  },
  boardContainer: {
    width: 327,
    marginLeft: 40,
    marginTop: 20,
    alignItems:'center'
  },
  textBoardOne: {
    color: '#808080',
    fontWeight: 'bold',
    marginTop: 16
  },
  textBoardTwo: {
    color: '#808080'
  },
  list: {
    marginTop: 20,
    height: 450
  }
})