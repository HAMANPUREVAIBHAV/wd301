import TaskCard from "./TaskCard";
import "./TaskCard.css";

function App() {
  return (
    <>
      <h1 className="pt-4 px-4 md:px-20 lg:px-40 text-3xl md:text-4xl font-semibold text-gray-600 text-center md:text-left">
        Smarter Tasks
      </h1>
      <p className="pt-4 px-4 md:px-20 lg:px-40 text-center md:text-left">
        <span className="text-xl md:text-2xl font-semibold text-gray-600">
          Project:
        </span>{" "}
        Graduation Final Year Project (Revamp College Website)
      </p>
      <div className="pt-4 px-4 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-solid border-2 border-gray-500 rounded-lg ">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-600 text-center pt-2">
            Pending
          </h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard title="Add blog" dueDate="22nd March" assigneeName="Rohit M" />
          <button className="px-4 py-2 mx-4 mb-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition duration-300">
            + New Task
          </button>
        </div>
        <div className="border-solid border-2 border-gray-500 rounded-lg">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-600 text-center pt-2">
            Done
          </h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get Approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </>
  );
}

export default App;
