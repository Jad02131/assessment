(function () {
  'use strict';
  const userNameInput = document.getElementById('user-name');
  const assessmentButton = document.getElementById('assessment');
  const resultDivided = document.getElementById('result-area');
  const tweetDivided = document.getElementById('tweet-area');
  
  /**
  * 指定した要素の子供をすべて除去する
  * @param {HTMLElement} element HTMLの要素数
  */
  
  function removeAllChildren(element) {
    while (element.firstChild) {  //子供の要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }
  
  assessmentButton.onClick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) { //名前が空の時は処理を終了する
      return;
    }
    
    //診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);
    
    const paragraoph = document.createElement('p');
    const result = assessment(userName);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
