var addItem = function(e) {
    var list = document.getElementById("thelist");

    var items = document.getElementsByTagName("li");
    var last = items[items.length-1];
    var next;

    if (last) {
        next = parseInt(last.innerHTML.split(" ")[1]) + 1;
    } else {
        next = 0;
    }

    var item = document.createElement("li");
    item.innerHTML = "item " + next;
    setEventListeners(item);
    list.appendChild(item);
};

var setHeading = function(e) {
    var heading = document.getElementById("h");
    if (e.type == "mouseover") {
        h.innerHTML = this.innerHTML;
    } else {
        h.innerHTML = "Hello World!";
    }
};

var removeItem = function(e) {
    this.remove();
};

var setEventListeners = function(item) {
    item.addEventListener("mouseover", setHeading);
    item.addEventListener("mouseout", setHeading);
    item.addEventListener("click", removeItem);
};

var button = document.getElementById("b");
button.addEventListener("click", addItem);

var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    setEventListeners(item);
};


var fib = function(x) {
    if (x<=1){
	return 1;
    }

    return fib(x-2) + fib(x-1);
};


var fibadd = function() {
    var list = document.getElementById('fiblist');
    var new_item = document.createElement("li");
    new_item.innerHTML = fib(list.childElementCount);
    list.appendChild(new_item);
}

var fibbutton = document.getElementById("f");
fibbutton.addEventListener("click", fibadd);
