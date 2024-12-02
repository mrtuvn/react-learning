import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toggleTodoStatus } from '../../redux/actions';
import todoListSlice, {removeTodo, updateTodo} from '../TodoList/todosSlice.jsx';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ name, prioriry, completed, id }) {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(completed);

    const toggleCheckbox = () => {
        setChecked(!checked);
        // dispatch(todoListSlice.actions.toggleTodoStatus(id));

        dispatch(updateTodo(id));
    };

    const handleRemoveRow = () => {
        dispatch(removeTodo(id))
    }

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <div>
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                {prioriry}
            </Tag>
            </div>
            <button onClick={handleRemoveRow}
                    style={{fontWeight: 'bold', color: 'black', padding: '.5rem', marginLeft: '8px', cursor: 'pointer'}}
            >X</button>
        </Row>
    );
}