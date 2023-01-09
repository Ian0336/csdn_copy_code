let pre = document.getElementsByTagName("pre");
for (elt of pre) {
  console.log(elt);
  elt.style["user-select"] = "text";
}
let code = document.getElementsByTagName("code");
for (elt of code) {
  elt.style["user-select"] = "text";
}
