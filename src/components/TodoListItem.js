export const TodoListItem = (props) => {
  return (
    <li>
      <input type="checkbox" checked={props.item.isCompleted} onChange={(e) => props.onTaskChanged(e, props.item)}/>
      {props.item.name}
    </li>
  );
};
