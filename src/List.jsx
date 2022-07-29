function List(props) {
  const { task, checked, onToggle, id } = props;

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={task}
        name={task}
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <label htmlFor={task} className={checked ? "lineThrough" : undefined}>
        {task}
      </label>
    </div>
  );
}

export default List;
