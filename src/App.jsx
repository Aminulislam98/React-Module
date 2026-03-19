import "./App.css";
import ModulePractice from "./Hero-section/Module-31";
import Todo from "./Hero-section/Todo";

function App() {
  return (
    <>
      <ModulePractice name="I Phone 12 Pro Max" brand="Apple" price="$1200" />
      <ModulePractice name="Samsung s25 Ultra" brand="Samsung" price="$1300" />
      <ModulePractice name="I Phone 17 Pro Max" brand="Apple" price="$1399" />
      <Todo
        isDone={true}
        task={"Practice React.js today at least 30 Minutes "}
        time={"30 Minutes"}
      />
      <Todo
        isDone={false}
        task={"Practice React.js today at least 30 Minutes "}
        time={"30 Minutes"}
      />
      <Todo
        isDone={true}
        task={"Read JavaScript documentation for 20 minutes"}
        time={"40 Minutes"}
      />
    </>
  );
}

export default App;
