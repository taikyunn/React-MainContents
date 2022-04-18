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

// コンポーネントの再利用
// 新規Reactアプリは海藻の一番上に単一のAppコンポーネントを持っている。
function App() {
  return (
    <div>
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// コンポーネントの分割
// 全てのReactコンポーネントは自己のpropsに対して順関数のように振る舞う必要がある
function Comment(props) {
  return (
    <div className="Comment">
    <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className='Avatar'
      src={props.user.avatarUrl}
      alt={props.user.name}
      />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  );
}
