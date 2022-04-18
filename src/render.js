// 秒刻みで動く時計
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

// setInterval(func, [delay, arg1, arg2, ...]);
// func delayミリ秒が経過するたびに実行される関数のこと。
// 下記の場合は1000ミリ秒つまり1秒ごとにtick関数を実行するという意味。
setInterval(tick, 1000);

// Reactは必要な要素のみを更新する
// ReactDOMは要素とその子要素を以前のものと比較しDOMを望ましい状態へ変えるのに必要なだけのDOMの更新を行う
