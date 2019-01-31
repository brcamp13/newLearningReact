// This file is really just showing how a stateless component
// can be represented as just a function: 

class SimpleMessage extends React.Component{
    return(
        <p>Message is: {this.props.message}</p>;
    );
}

function SimpleMessage(props){
    return <p>Message is: {props.message}!</p>
}