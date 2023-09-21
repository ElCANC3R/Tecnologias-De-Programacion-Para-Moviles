import { useState } from "react";
import { createAlert } from "../helpers/showError";
import CustomModal from "../components/modal";

export const useTodos = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editando, setEditando] = useState(false);
    const [nombreEditando, setNombreEditando] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [idGlobal, setIdGlobal] = useState(0);
    const [done, setDone] = useState(false);
    const [date, setDate] = useState("");
    const [name, setName] = useState("");

    const handleAddTodo = () => {
        if (inputValue === "") {
            return createAlert("El campo esta vacio");
        }
        if (todos.some(todo => todo.name.toLowerCase() === inputValue.toLowerCase())) {
            return createAlert('Ya existe una tarea con ese nombre')
        }
        const now = new Date();
        const createdDate = now.toISOString();

        if (!editando) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    name: inputValue,
                    done: false,
                    createdDate: createdDate,
                    edited: false
                },
            ]);
        }
        else {
            const newTodos = todos.map((todo) => {
                if (todo.name === nombreEditando) {
                    todo.name = inputValue;
                    todo.createdDate = createdDate;
                    todo.edited = true;
                }
                return todo;
            });
            setTodos(newTodos);
            setEditando(false);
        }
        setInputValue("");
    };

    const handleDeleteTodo = (id) => {
        const filteredArray = todos.filter(todo => todo.id !== id);
        setTodos(filteredArray);
    }

    const handleCompeltedTodo = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                if (todo.done) {
                    todo.done = false;

                } else {
                    todo.done = true;

                }
            }
            return todo;
        });

        setTodos(newTodos);
    }

    const handleEditTodo = (id) => {
        if (editando) {
            setEditando(false);
            setInputValue("");
        }
        else {
            setEditando(true);
            const filteredArray = todos.filter(todo => todo.id == id);
            setNombreEditando(filteredArray[0].name);
            setInputValue(filteredArray[0].name);
        }
    }

    const handleModal = (id) => {
        setModalVisible(!modalVisible);
        const filteredArray = todos.filter(todo => todo.id == id);
        setIdGlobal(filteredArray[0].id);
        setName(filteredArray[0].name);
        setDate(filteredArray[0].createdDate);
        setDone(filteredArray[0].done);

    }

    /*const createModal = () => {
        let name = "";
        let createdDate = "";
        let done = false;
        todos.map((todo) => {
            if (todo.id === idGlobal) {
                name = todo.name;
                createdDate = todo.createdDate;
                done = todo.done;
            }
        });
        return <CustomModal name={name} createdDate={createdDate} done={done} modalVisible={modalVisible} />
    }*/


    return {
        inputValue,
        setInputValue,
        todos,
        editando,
        nombreEditando,
        handleAddTodo,
        handleDeleteTodo,
        handleCompeltedTodo,
        handleEditTodo,
        handleModal,
        modalVisible,
        //createModal,
        name,
        date,
        done,
        idGlobal
    }

}