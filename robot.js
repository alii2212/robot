
var x= new Date()
x.setHours(08);
x.setMinutes(29);
x.setSeconds(59)
x.setMilliseconds(997)
var targetDate = x.getTime() - Date.now()
var container = document.body.querySelectorAll('div.ag-body-container.ag-layout-normal')[2]
var buttons = container.querySelectorAll('i.Font.Ico-shopping-cart.buy');

setTimeout(() => {
    buttons.forEach((button, index) => {
        var t1 = new Date()
        console.log("ENTER INTO FUNCTION @ " + t1.getSeconds() + ":" + t1.getMilliseconds());
        setTimeout(() => {
            var t2 = new Date()
            console.log(`REQUEST ${index} SENT @`  + t2.getSeconds() + ":" + t2.getMilliseconds());
            button.click();
        }, 300 * index);
    })
}, targetDate)