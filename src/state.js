
class Clock extends React.Component {
  // 1:constructor実行
  constructor(props) {
    // super キーワードは、オブジェクトの親の関数を呼び出すために使用
    super(props);
    this.state = {date: new Date()};
  }

  // 出力がDOMにレンダーされた後に実行される動作がマウント(mounting)
  componentDidMount() {
    // timerIDを新たに作成し保存したい場合はthis.timerIDのように作成できる
    this.timerID = setInterval (
      () => this.tick(),
      1000
    )
  }

  // DOMの削除時に行われる動作がアンマウント(unmounting)
  componentWillUnmount() {
    // タイマーのリセットを実行
    clearInterval(this.timerID)
  }

  tick() {
    // Reactのメソッド
    // constructor関数のように値の設定や更新を行うことができる
    // 非同期的に実行される。
    this.setState({
      date: new Date()
    });
  }

  // 2:constructor関数の次に実行される
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}


