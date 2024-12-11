// Create web server
// Create a server using the built-in XMLHttpRequest object
function createServer() {
    var server = {
      start: function(port, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:' + port, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            callback();
          }
        };
        xhr.send();
      }
    };
    return server;
  }
  
  // Define the port
  var port = 3000;
  
  // Create and start the server
  var server = createServer();
  server.start(port, function() {
    console.log('Server running at http://localhost:' + port + '/');
  });