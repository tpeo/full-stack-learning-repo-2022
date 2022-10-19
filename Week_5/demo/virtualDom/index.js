function tick() {

    //javascript rendering (entire DOM manipulation)
    document.getElementById("container1").innerHTML = 
      "<div><h1>JS DOM Rendering</h1><input type=text/><p>It is "
        + new Date().toLocaleTimeString()+
      ".</p></div>";

    //using React (virtual dom)
      const element = React.createElement(
          'div',
          null,
          React.createElement('h1', null, 'React'),
          React.createElement('div', null,
          React.createElement('input', {type: "text"})
          ),
          React.createElement('p', null, new Date().toLocaleTimeString())
      );

      ReactDOM.render(element, document.getElementById("container2"));
  }
  
  setInterval(tick, 1000);