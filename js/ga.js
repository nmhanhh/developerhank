window.dataLayer = window.dataLayer || [];
// Creates a global array called dataLayer
// If it already exists, reuse it
// this array stores analytics “messages” (events)
function gtag(){dataLayer.push(arguments);}
// Defines a function called gtag()
// Every time I call gtag(...), it pushes the command into dataLayer
// arguments: array-like objects
gtag('js', new Date());
// Tells GA: “Analytics started at this time”
// Used internally for timing and session calculations
gtag('config', 'G-'); // github page

document.addEventListener("click",function(e){
    // e is event object, contains info about the click: what was clicked, when, where, etc.
    const a = e.target.closest('a');
    // e.target: exact element that was clicked
    if (!a) return;
    // if no <a> was found, stop immediately, do nothing
    if (a.href.includes('redbubble')){
        gtag('event','outbound_redbubble', {link: a.href});
        //sends a custom event to ga4, event name, event parameter (link is exact url clicked)
    }

    if (a.href.includes('inprnt')){
        gtag('event','outbound_inprnt', {link: a.href});
    }
})