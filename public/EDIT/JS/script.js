function teste(){
    var httpRequest = XMLHttpRequest()
    httpRequest.open('PUT', 'http://localhost:10000/main/', true);
    httpRequest.send(null);
    console.log(httpRequest.readyState)
}