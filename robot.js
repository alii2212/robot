var _start = performance.now()
var tolerance = 0;
var time = [08, 30, 00, 000]
var container = document.body.querySelectorAll('div.ag-body-container.ag-layout-normal')[2]
var buttons = container.querySelectorAll('i.Font.Ico-shopping-cart');
var myList = document.querySelector('span.clock.ng-binding')
var observer = new MutationObserver(mutations => {
    var observeTime = new Date() //time refered to start observation on local PC
    console.log(`Observing Starts at : ${observeTime.toLocaleTimeString()} : ${observeTime.getMilliseconds()}`);
    var recivedTime = mutations[0].target.nodeValue.trim() //the time grabbed from webpage
    var frames = recivedTime.split(":")
    // real server time which is adjusted 30 ms due to transmisson
    var serverTime = observeTime.setHours(frames[0], frames[1], frames[2], observeTime.getMilliseconds() - 30)
    console.log(`Server time must be: ${new Date(serverTime).toLocaleTimeString()} : ${new Date(serverTime).getMilliseconds()}`);
    var executionTime = new Date(serverTime).setHours(time[0], time[1], time[2], time[3])
    console.log(`Execution Time will be: ${new Date(executionTime).toLocaleTimeString()} : ${new Date(executionTime).getMilliseconds()}  `);
    console.log(`waiting time is: ${(executionTime - serverTime+tolerance)/1000} ms`);
    setTimeout(() => {
        buttons.forEach((button, index) => {

            console.log(`ENTER INTO FUNCTION @: ${performance.now()}`);

            setTimeout(() => {
                let t = new Date()
                console.log(`REQUEST ${index + 1} SENT @: ${performance.now()} ${t.getSeconds() + ":" + t.getMilliseconds()}`);
                button.click();
            }, 300 * index);

        })
    }, (executionTime - serverTime+tolerance))
     observer.disconnect()
});
observer.observe(myList.firstChild, {
    characterData: true,
    characterDataOldValue: true
});
console.log(`Process time takes ${performance.now - _start} totally!`);