var tolerance = 0;
var time = [08, 30, 00, 000]
//document.querySelector("body > div.layout-main > div:nth-child(2) > div > div.layout-center.ng-scope > div > div.layout-action.new-ui.open.splitter_container.splitter-horizontal > div:nth-child(3) > div > ul > li:nth-child(5)").click()
var container = document.body.querySelectorAll('div.ag-body-container.ag-layout-normal')[2]
var buttons = container.querySelectorAll('i.Font.Ico-shopping-cart');
var loopSize = buttons.length;
var myList = document.querySelector('span.clock.ng-binding')
var observer = new MutationObserver(mutations => {
    var observeTime = new Date() //time refered to start observation on local PC
	var obeseveTime2= performance.now()
    console.log(`Observing Starts at : ${observeTime.toLocaleTimeString()} : ${observeTime.getMilliseconds()}`);
    var recivedTime = mutations[0].target.nodeValue.trim() //the time grabbed from webpage
    var frames = recivedTime.split(":")
    // real server time which is adjusted 30 ms due to transmisson
    var serverTime = observeTime.setHours(frames[0], frames[1], frames[2], observeTime.getMilliseconds() - 30)
    console.log(`Server time must be: ${new Date(serverTime).toLocaleTimeString()} : ${new Date(serverTime).getMilliseconds()}`);
    var executionTime = new Date(serverTime).setHours(time[0], time[1], time[2], time[3])
    console.log(`Execution Time will be: ${new Date(executionTime).toLocaleTimeString()} : ${new Date(executionTime).getMilliseconds()}  `);
    console.log(`waiting time is: ${(executionTime - serverTime+tolerance)/1000} ms`);
    let lagTime = serverTime-observeTime
	console.warn("server is "+lagTime+" ahead of you")
    setTimeout(() => {
        var dealy
        for (let index = 0; index < loopSize; index++) {
            var desiredButton = container.querySelector('i.Font.Ico-shopping-cart');
            dealy = setInterval(() => {
                desiredButton.click()
            }, 300);
        }
    

        while (container.querySelector('i.Font.Ico-shopping-cart')) {
            var desiredButton = container.querySelector('i.Font.Ico-shopping-cart');
            var habil = setInterval(() => {
                desiredButton.click()
            }, 300);
            
         }



        buttons.forEach((button, index) => {
            setTimeout(() => {
                let t = new Date()
                console.log(`REQUEST ${index + 1} SENT @:  ${t.getSeconds() + ":" + t.getMilliseconds()}`);
               // button.focus()
                button.click();
            }, 300 * index);

        })
    }, (executionTime - serverTime+tolerance))
     observer.disconnect()
});
observer.observe(myList.firstChild, {
    characterData: true,
    characterDataOldValue: true
    ,subtr
});

var timeConverter= (milliseconds) =>{
	let ms = milliseconds%1000;
	let seconds = (milliseconds - ms)/1000
	let s = seconds%60
	let min = (seconds - s)/60
	return min+":"+s+":"+ms	
}


let tableObserver = new MutationObserver(mutations => { console.log(mutations) })
tableObserver.observe(container, { childList: true, subtree: true })