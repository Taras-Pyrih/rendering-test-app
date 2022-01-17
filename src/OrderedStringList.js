import { ListItem } from "./ListItem.js";

export const OrderedStringList = (props) => {
  const stringList = props.strings.map((string, index) => <ListItem key={index} string={string}/>);

  return (
      stringList.length == 0
      ? <div>Ви задали порожній масив!</div>
      : <ol>{stringList}</ol>
  );
}