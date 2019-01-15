<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>React Components</title>
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </meta>
</head>

<body>
  <div id="container"></div>
  <script type="text/babel">

  </script>
</body>

</html>


class HelloWorld extends React.Component {

    render(){
        return <p>Hello, {this.props.greetTarget}!</p> // If you want something to be evaluated as an expression in JSX, use curly brackets to wrap it
    }
}

ReactDOM.render(
    <div>
        <HelloWorld greetTarget="Batman"/>
        <HelloWorld greetTarget="Iron Man"/>
    </div>,
  document.querySelector("#container")
);	