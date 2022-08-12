// 定义、open、处理函数、send
//get请求
let xhr = new XMLHttpRequest();
xhr.open("get", "/data");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log("一些其他情况");
  }
};
XPathEvaluator.send(); //get请求不用传参

//post请求
let xhr_post = new XMLHttpRequest();
_xhr.open("post", "path");
_xhr.onreadystatechange = function () {
  if (_xhr.readyState == 4 && _xhr.status == 200) {
    console.log(_xhr.response);
    console.log(JSON.parse(_xhr.responseText));
  } else {
    console.log("一些其他情况");
  }
};
let obj = {
  username: "aaa",
  password: "123",
};
_xhr.send(JSON.stringify(obj));
