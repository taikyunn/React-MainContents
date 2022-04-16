const name = 'Taichi';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
// result: Hello Taichi

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element1 = (
  <h1>
    Hello, {formatName(user)}!
    {getGreeting()}
  </h1>
)

ReactDOM.render(
  element1,
  document.getElementById('root')
)

// console:Hello, Harper Perez!
// console:Hello, Stranger.
