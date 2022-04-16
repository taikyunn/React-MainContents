// コンポーネント名は大文字スタートにすること
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

// ES6
// function Welcomeと下記クラスは等価である
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

// ユーザ定義のコンポーネント

// 流れ
// ①elementを引数にしてReactDOM.renderを呼び出す
// ②ReactはWelcomeコンポーネントを呼び出し、その際propsとして{name: 'Sara'}を渡す
// ③Welcomeコンポーネントにてname=Saraで出力される
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
)
