
const Greeting = (message) => {
    return  `Hello, ${message}.`;
}

export default Greeting;

Greeting.defaultProps = {
    message: "Hello World!",
};

