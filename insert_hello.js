document.onkeydown=function(e){ 
	if(e.keyCode==115){
    console.log('key down');
        let fulName = '';
        let onlyName = '';
        let curHost = document.location.host;
        let MonthList = ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 
            'сентябре', 'октябре', 'ноябре', 'декабре'];
        let curMonthNum = (new Date).getMonth() // 0 - 11

        let myMessage = '';
        console.log(MonthList[curMonthNum]);
        if (curHost.indexOf('vk') >= 0){
            fulName = document.querySelector('conversation-info-header-chat-title')[0].title;
            onlyName = fulName.split(' ')[0];
            let inputchat = document.getElementsByClassName('im_editable im-chat-input--text _im_text')[0];
            myMessage = `Здравствуйте, ${onlyName}! Газету в ${MonthList[curMonthNum]} делаем?`;
            inputchat.insertAdjacentText('afterbegin', myMessage);
        }
        else if (curHost.indexOf('whatsapp') >= 0){
            console.log('whatsapp');
            let mainBlock = document.querySelector('#main');
            let mainHeader = mainBlock.querySelector('header');
            fulName = mainHeader.querySelector('span');
            onlyName = fulName.innerText.split(' ')[0];
            myMessage = `Здравствуйте, ${onlyName}! Газету в ${MonthList[curMonthNum]} делаем?`;
            navigator.clipboard.writeText(myMessage)
              .then(() => {
                console.log('Ok');
              })
              .catch(err => {
                console.log('Something went wrong', err);
              });
        }
        console.log(myMessage);
	} 
}
