const ToDoForm = ({
  title,
  setDescription,
  description,
  setTitle,
  formSubmit,
}) => {
  return (
    <form
      onSubmit={formSubmit}
      className="flex items-center mt-8 space-x-4 justify-center"
    >
      <input
        className="py-3 px-6 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter ToDo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="py-3 px-6 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
