import React from "react";
import ReactDOM from "react-dom";

const App extends React.Component {
  const items = [
    "First Item",
    "Second Item",
    "Third Item"
    ];
  
  const listItems = items.map( message =>
                                 {
    return <p>{ message }</p>;
  })
  
  return (
    <div>
    {listItems}
    </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
