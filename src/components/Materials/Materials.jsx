export const Materials = ({items, onDelete}) =>{
    return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>Name: {item.title}</p>
              <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      );
}