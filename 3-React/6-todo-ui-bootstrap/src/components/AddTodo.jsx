import Button from "./Button";

const AddTodo = () => {

  const addHandler = () => {
    console.log(`Trying to add item`);
  }

  const textChangeHandler = (event) => {
    console.log(event.target.value, event);
  }

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            onChange={textChangeHandler}
          ></input>
        </div>
        <div className="col-3">
          <input type="date" className="form-control"></input>
        </div>
        <div className="col-2">
          <Button btnType="success" btnText="Add" handler={addHandler}/>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
