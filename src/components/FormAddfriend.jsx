import Button from "./Button";

export default function FormAddfriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">🧑🏼‍🤝‍🧑Friend&apos;s Name:</label>
      <input type="text" name="name" />
      <label htmlFor="image">🍗 Image Url:</label>
      <input type="text" name="image" />

      <Button>Add</Button>
    </form>
  );
}
