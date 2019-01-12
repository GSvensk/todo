import { connect } from 'react-redux'
import CronTasks from '../components/CronTasks'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(CronTasks)
