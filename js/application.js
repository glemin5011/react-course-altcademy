//React is a tool for creating user interfaces using JS

const element = React.createElement(
  "h1", // type
  {
    className: "title",
    onClick: () => {
      console.log("clicked!");
    },
    style: { fontFamily: "sans-serif", color: "rgb(255, 100, 100)" },
  }, // props
  "Hello World!" // children
);

//Type - either HTML element tag (div / span) or a React component type
//Props - object of properties you want to pass to the element
//Children - child elements you want to be nested inside the element

/* INJECTING ELEMENTS TO THE DOM */

//Rendering the element to div ID's root
ReactDOM.render(element, document.getElementById("root"));
//Rendering the SAME element to another div ID's root2
ReactDOM.render(element, document.getElementById("root2"));

/* RETRIEVING DATA FROM THE DOM */

//Another example where we will retrieve info from target DOM and inject it into react element

document
  .querySelectorAll(".button")
  //use querySelectorAll to select all three spans with class "button"
  .forEach((domNode) => {
    //use forEach to loop through each of the span DOM node
    //retrieve the message ID from the data attribute through the dataset property

    const messageId = parseInt(domNode.dataset.messageId);

    //create and render a React element for a button and attach an onClick event handler, it will log the messageId abvoe

    ReactDOM.render(
      React.createElement(
        "button",
        {
          onClick: () => {
            console.log(`liked message: ${messageId}`);
          },
        },
        "Like"
      ),
      domNode
    );
  });

//This could have also been separated:

/* 

  const button = React.createElement(
      'button', 
      {
          onClick: () => { console.log (`liked message: ${messageId}`); }
      },
      'Like'
  );

  ReactDOM.render(
      button,
      domNode
  )
*/
