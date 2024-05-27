import Button from "./components/Button";
import FormAddfriend from "./components/FormAddfriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsLists from "./components/FriendsLists";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsLists />
        <FormAddfriend />
        <Button>Add A Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
