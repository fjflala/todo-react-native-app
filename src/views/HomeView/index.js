/**
 * Module dependencies
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import TaskLite from '../../components/TaskLite';

const mock = [
  {
    id: 1,
    title: 'Feedback meeting with Pepe',
    category: 'Meetings',
    priority: 'LOW',
    dueData: {
      date: '88',
      month: 'JAN',
    }
  },
  {
    id: 2,
    title: 'Feedback meeting with Pepe',
    category: 'Meetings',
    priority: 'LOW',
    dueData: null,
  },
];

/**
 * Home View
 */
export default class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: mock,
    };
  }

  onCheck = (id) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.id === id);

    todos[index].checked = !todos[index].checked;

    this.setState({
      todos,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos && this.state.todos.map(todo => (
          <TaskLite
            key={todo.id}
            category={todo.category}
            title={todo.title}
            priority={todo.priority}
            dueData={todo.dueData}
            onCheck={() => this.onCheck(todo.id)}
            checked={todo.checked}
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
});
