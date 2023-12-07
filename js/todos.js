

const asyncGetTodos = async () => {
    try {
        const response = await fetch(`https://656dc6c6bcc5618d3c23ed94.mockapi.io/todo/api/TodoList`)
        return response.json()
    }
    catch (e) {
        console.log(e)
    }
}

console.log(asyncGetTodos())
