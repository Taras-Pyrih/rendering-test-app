export const ListItem = (props) => {
  return (
    props.id
    ? <li>{props.value} (id = {props.id})</li>
    : <li>{props.value}</li>
  );
}