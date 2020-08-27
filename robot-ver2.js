var getServerTime = () => {
    var serverTime = 0;
    var myList = document.querySelector('span.clock.ng-binding')
    var observer = new MutationObserver(mutations => {
        var observeTime = new Date() //time refered to start observation on local PC
        console.log(`Observing Starts at : ${observeTime.toLocaleTimeString()} : ${observeTime.getMilliseconds()}`);
        var recivedTime = mutations[0].target.nodeValue.trim() //the time grabbed from webpage
        var frames = recivedTime.split(":")
        // real server time which is adjusted 30 ms due to transmisson
        serverTime = observeTime.setHours(frames[0], frames[1], frames[2], observeTime.getMilliseconds() - 30)
        console.log(`Server time must be: ${new Date(serverTime).toLocaleTimeString()} : ${new Date(serverTime).getMilliseconds()}`);
    });
    observer.observe(myList.firstChild, {
        characterData: true,
        characterDataOldValue: true
    });
    observer.disconnect()
    return serverTime;
}


var getCurrentElement = () => {
    var currentElement;
    var container = document.body.querySelectorAll('div.ag-body-container.ag-layout-normal')[2]
    var containerObserver = new MutationObserver(mtations => {
        
    })

    
}