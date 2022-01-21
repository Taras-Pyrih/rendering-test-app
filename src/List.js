import { ListItem } from './ListItem.js';
import { v4 as uuidv4 } from 'uuid';

export const List = (props) => {
  const list = props.data.map(item => {
    if (typeof item == 'string') {
      return <ListItem key={uuidv4()} value={item}/>
    }
    else if (typeof item == 'object') {
      return <ListItem key={uuidv4()} value={item.text} id={item.id}/>
    }
  });

  return (
    list.length != 0 &&
    <div>
      {props.flag == "strings" && <ul>{list}</ul>}
      {props.flag == "objects" && <ol>{list}</ol>}
    </div>
  );
}





