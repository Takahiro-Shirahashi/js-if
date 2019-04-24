//console.log(window.confirm('ゲームを開始します'));
//windowオブジェクトのconfirmメソッドで確認ダイアログボックスを表示している。
if(window.confirm('このページを読み込みます')){
  document.getElementById('choose').textContent = 'OKボタンをクリックしました！';
  console.log('OK');
}
else {
  document.getElementById('choose').textContent = 'キャンセルボタンをクリックしました！';
  console.log('キャンセル');
}
