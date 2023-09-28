export const Materials = ({items, onDelete, onUpdate}) =>{
    return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>Name: {item.title}</p>
              <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
            <button type="button" onClick={() => onUpdate({id: item.id, title: Date.now()})}>Put</button>
            </li>

          ))}
        </ul>
      );
}