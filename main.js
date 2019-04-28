//console.log(window.confirm('ゲームを開始します'));
//windowオブジェクトのconfirmメソッドで確認ダイアログボックスを表示している。
const you = 'あなたは'
const ok = 'OKボタンをクリックしました！'
const ng = 'キャンセルボタンをクリックしました！'

if(window.confirm('OKまたはキャンセルをクリックして下さい')){
  window.alert(ok)
  document.getElementById('choose').textContent = you + ok ;
  console.log('OK');
}
else {
  window.alert(ng)
  document.getElementById('choose').textContent = you + ng ;
  console.log('キャンセル');
}
