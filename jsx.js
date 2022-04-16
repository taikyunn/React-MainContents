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
    <a href="https://www.reactjs.org"> link </a>;
  </h1>
)

ReactDOM.render(
  element1,
  document.getElementById('root')
)

// console:Hello, Harper Perez!
// console:Hello, Stranger.

// />で閉じることが可能
const element3 = <img src={user.avatarUrl} />;

// JSXのタグは小要素を持つことができる
const element4 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
)

// XSS対策でJSXは描画前に内部の値を全て文字列にエスケープするようになっている
// つまりユーザーの入力したあらゆるコードが注入できないようになっている。
const title = response.potentiallyMaliciousInput;
// This is safe
const element5 = <h1>{title}</h1>

// element6とelement7は等価である
const element6 = (
  <h1 className="greeting">
    Hello World
  </h1>
);

const element7 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello World'
);


// element7で使ったReact.createElementを詳しくみてみる
// 別名:React要素と呼ばれる
const element8 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello World',
  }
}
