function calculateFive() {
    'use strict';
    var bill = document.getElementById("total-bill").value,
        nop = document.getElementById("nop").value;
    calculateAll(bill, nop, 5);

    document.getElementById("five-per").style.backgroundColor = "hsl(172, 67%, 45%)";

    document.getElementById("ten-per").style.backgroundColor = null;
    document.getElementById("fiftn-per").style.backgroundColor = null;
    document.getElementById("twent-per").style.backgroundColor = null;
    document.getElementById("fift-per").style.backgroundColor = null;
}

function calculateTen() {
    'use strict';
    var bill = document.getElementById("total-bill").value,
        nop = document.getElementById("nop").value;
    calculateAll(bill, nop, 10);
    document.getElementById("five-per").style.backgroundColor = null;
    document.getElementById("ten-per").style.backgroundColor = "hsl(172, 67%, 45%)";
    document.getElementById("fiftn-per").style.backgroundColor = null;
    document.getElementById("twent-per").style.backgroundColor = null;
    document.getElementById("fift-per").style.backgroundColor = null;
}

function calculateFifteen() {
    'use strict';
    var bill = document.getElementById("total-bill").value,
        nop = document.getElementById("nop").value;
    calculateAll(bill, nop, 15);
    document.getElementById("five-per").style.backgroundColor = null;
    document.getElementById("ten-per").style.backgroundColor = null;
    document.getElementById("fiftn-per").style.backgroundColor = "hsl(172, 67%, 45%)";
    document.getElementById("twent-per").style.backgroundColor = null;
    document.getElementById("fift-per").style.backgroundColor = null;
}

function calculateTwentyFive() {
    'use strict';
    var bill = document.getElementById("total-bill").value,
        nop = document.getElementById("nop").value;
    calculateAll(bill, nop, 25);
    document.getElementById("five-per").style.backgroundColor = null;

    document.getElementById("ten-per").style.backgroundColor = null;
    document.getElementById("fiftn-per").style.backgroundColor = null;
    document.getElementById("twent-per").style.backgroundColor = "hsl(172, 67%, 45%)";
    document.getElementById("fift-per").style.backgroundColor = null;
}

function calculateFifty() {
    'use strict';
    var bill = document.getElementById("total-bill").value,
        nop = document.getElementById("nop").value;
    calculateAll(bill, nop, 50);
    document.getElementById("five-per").style.backgroundColor = null;
    document.getElementById("ten-per").style.backgroundColor = null;
    document.getElementById("fiftn-per").style.backgroundColor = null;
    document.getElementById("twent-per").style.backgroundColor = null;
    document.getElementById("fift-per").style.backgroundColor = "hsl(172, 67%, 45%)";

}

function calculateCustom() {
    'use strict';
    var bill = document.getElementById("total-bill").value,
        nop = document.getElementById("nop").value,
        percentage = document.getElementById("custom").value;
    calculateAll(bill, nop, percentage);
}

function calculateAll(bill, nop, per) {
    'use strict';
    var tt = per / 100 * bill,
        tp,
        ap,
        text;

    if (!nop) {
        text = "Can't be zero";
        document.getElementById("nop").style.outline = "2px solid #ea5b5b";
    } else if (nop === 0) {
        text = "Can't be zero";
        document.getElementById("nop").style.outline = "2px solid #ea5b5b";
    } else {
        document.getElementById("warning").style.display = "none";
        document.getElementById("nop").style.outline = "none";
    }
    tp = tt / nop;
    ap = bill / nop + tp;
    document.getElementById("warning").innerHTML = text;
    document.getElementById("tip-amnt").innerHTML = "$" + Number.parseFloat(tp).toFixed(2);
    document.getElementById("total-per").innerHTML = "$" + Number.parseFloat(ap).toFixed(2);
}

//reset function

function reset() {
    'use strict';
    document.getElementById("total-bill").value = null;
    document.getElementById("custom").value = null;
    document.getElementById("nop").value = null;
    document.getElementById("tip-amnt").innerHTML = "$0.00";
    document.getElementById("total-per").innerHTML = "$0.00";
    document.getElementById("five-per").style.backgroundColor = null;
    document.getElementById("ten-per").style.backgroundColor = null;
    document.getElementById("fiftn-per").style.backgroundColor = null;
    document.getElementById("twent-per").style.backgroundColor = null;
    document.getElementById("fift-per").style.backgroundColor = null;
    document.getElementById("warning").style.display = "none";
    document.getElementById("nop").style.outline = "none";
}


// some backup/useless code no edit needed -->

//        'use strict';
//        var bill = document.getElementById("total-bill").value,
//            nop = document.getElementById("nop").value,
//            tt = 5 / 100 * bill,
//            tp,
//            ap;
//    
//        if (!nop) {
//    
//            nop = 1;
//        }
//        tp = tt / nop;
//        ap = bill / nop + tp;
//        document.getElementById("tip-amnt").innerHTML = "$" + Number.parseFloat(tp).toFixed(2);
//        document.getElementById("total-per").innerHTML = "$" + Number.parseFloat(ap).toFixed(2);
//backgroud backup
