/**
 * Module dependencies
 */
import {
  StyleSheet,
} from 'react-native';

/**
 * Styles
 */
const styles = StyleSheet.create({
  task: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    backgroundColor: '#fff',
    borderRadius: 2,
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#333',
    fontSize: 16,
  },
  category: {
    color: '#666',
    fontSize: 12,
  },
  column: {
    flexDirection:'column',
  },
  sub: {
    color: '#666',
    fontSize: 12,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  due: {
    borderLeftWidth: .5,
    borderLeftColor: '#ddd',
    padding: 16,
    justifyContent: 'center',
  },
  dueDate: {
    fontSize: 20,
    fontWeight: '700',
    color: '#666',
  },
  dueText: {
    fontSize: 10,
    color: '#666',
  },
  dueMonth: {
    fontSize: 10,
    color: '#666',
  },
  check: {
    paddingLeft: 8,
  },
});

/**
 * Expose
 */
export default styles;
