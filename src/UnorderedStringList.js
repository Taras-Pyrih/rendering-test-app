import { ListItem } from "./ListItem.js";

export const UnorderedStringList = (props) => {
  const stringList = props.items.map(item => <ListItem key={item.id} string={item.string}/>);

  return (
    stringList.length == 0
    ? <div>Ви задали порожній масив!</div>
    : <ul>{stringList}</ul>
  );
}