import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="amount">💳 Bill Value:</label>
      <input type="number" name="amount" />
      <label htmlFor="mine">👨🏽 Your Expense:</label>
      <input type="number" name="mine" />
      <label htmlFor="friend">🧑🏾‍🤝‍🧑 X Expenese:</label>
      <input type="number" name="friend" disabled />
      <label>Who is paying:</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
