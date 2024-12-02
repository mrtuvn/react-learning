import { Typography, Divider } from 'antd';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { setupServer } from './fakeApis';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './components/TodoList/todosSlice';
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";

if (process.env.NODE_ENV === 'development') {
    setupServer();
}

const { Title } = Typography;

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    return (
        <>
        <Header />
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '90vh',
            }}
        >

            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
            <Filters />
            <Divider />
            <TodoList />

        </div>
        <Footer />
        </>
    );
}

export default App;