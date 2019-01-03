/**
 * Module dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import {
  Text,
  Checkbox,
} from 'react-native-paper';
import styles from './styles';

/**
 * TaskLite Component
 */
export default class TaskLite extends Component {
  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    priority: PropTypes.string,
    dueData: PropTypes.shape({
      date: PropTypes.string,
      month: PropTypes.string,
    }),
    checked: PropTypes.bool,
  }

  static defaultProps = {
    category: '',
    title: '',
    priority: '',
    dueData: null,
    checked: false,
  }

  onCheck = (e) => {
    const {
      onCheck,
    } = this.props;

    if (onCheck && typeof onCheck === 'function') {
      onCheck()
    }
  }

  render() {
    const {
      category,
      title,
      priority,
      dueData,
      checked,
    } = this.props;
    
    return (
      <View elevation={3} style={styles.task}>
        <View style={Object.assign({}, styles.column, styles.check)}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={e => this.onCheck(e)}
          />
        </View>
        <View style={Object.assign({}, styles.column, styles.content)}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.sub}>{priority}</Text>
        </View>
        {dueData && <View style={Object.assign({}, styles.column, styles.due)}>
          <Text style={styles.dueText}>DUE</Text>
          <Text style={styles.dueDate}>{dueData.date}</Text>
          <Text style={styles.dueMonth}>{dueData.month}</Text>
        </View>}
      </View>
    )
  }
}