import { List, Item } from "./style";

import { TodoContext } from "../../Context/TodoContext";
import { useContext } from "react";

export default function Todo() {
  const { todos, doneTodo } = useContext(TodoContext);

  function handleDone(index) {
    doneTodo(index);
  }
  return (
    <List>
      {todos.map((todo, index) => (
        <Item key={todo.id} done={todo.done}>
          {todo.done ? (
            <p>
              <s>{todo.title}</s>
            </p>
          ) : (
            <p>{todo.title}</p>
          )}

          <svg
            onClick={() => handleDone(index)}
            width="25px"
            height="24px"
            viewBox="0 0 21 20"
            version="1.1"
          >
            <title>done [#1477]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -400.000000)"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M141.9,243 C141.9,242.448 141.4296,242 140.85,242 L126.15,242 C125.5704,242 125.1,242.448 125.1,243 L125.1,257 C125.1,257.552 125.5704,258 126.15,258 L140.85,258 C141.4296,258 141.9,257.552 141.9,257 L141.9,243 Z M144,242 L144,258 C144,259.105 143.06025,260 141.9,260 L125.1,260 C123.93975,260 123,259.105 123,258 L123,242 C123,240.895 123.93975,240 125.1,240 L141.9,240 C143.06025,240 144,240.895 144,242 L144,242 Z M137.72205,247.015 C138.1326,247.405 138.1326,248.039 137.72205,248.429 L133.63965,252.317 C133.0233,252.903 132.0258,252.903 131.40945,252.317 L129.5541,250.55 C129.1446,250.16 129.1446,249.527 129.5541,249.136 C129.96465,248.746 130.6293,248.746 131.0388,249.136 L131.7801,249.842 C132.19065,250.233 132.8574,250.233 133.269,249.842 L136.23735,247.015 C136.64685,246.624 137.31255,246.624 137.72205,247.015 L137.72205,247.015 Z"
                    id="done-[#1477]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </Item>
      ))}
    </List>
  );
}
