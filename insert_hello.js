document.onkeydown=function(e){ 
	if(e.keyCode==115){
        let fulName = '';
        let onlyName = '';
        let curHost = document.location.host;
        let curMonth = 'апреле';
        let myMessage = '';
        if (curHost.indexOf('vk') >= 0){
            fulName = document.getElementsByClassName('im-page--title-main')[0].title;
            onlyName = fulName.split(' ')[0];
            let inputchat = document.getElementsByClassName('im_editable im-chat-input--text _im_text')[0];
            myMessage = `Здравствуйте, ${onlyName}! Газету в ${curMonth} делаем?`;
            inputchat.insertAdjacentText('afterbegin', myMessage);
        }
        else if (curHost.indexOf('whatsapp') >= 0){
            console.log('whatsapp');
            fulName = document.querySelector('[data-testid="conversation-info-header-chat-title"]');
            onlyName = fulName.innerText.split(' ')[0];
            myMessage = `Здравствуйте, ${onlyName}! Газету в ${curMonth} делаем?`;
            navigator.clipboard.writeText(myMessage)
              .then(() => {
                // Получилось!
              })
              .catch(err => {
                console.log('Something went wrong', err);
              });
        }
        console.log(myMessage);
	} 
}

