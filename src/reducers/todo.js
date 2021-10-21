const todos = (
  state = [
    {
      id: 1,
      complete: false,
      text: "Go to the Library"
    },
    {
      id: 2,
      complete: false,
      text: "Have Lunch"
    },
    {
      id: 3,
      complete: false,
      text: "Meet friends"
    }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text
        }
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};
export default todos;
