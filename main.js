var indexName = "invertToggle";

if (localStorage[indexName] && localStorage[indexName] === "100"){
    localStorage[indexName]="0";
} else {
    localStorage[indexName]="100";
}

var percent = `${localStorage[indexName]}%`

document.body.style = `filter: invert(${percent});`;