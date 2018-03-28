const exec = require('child_process').exec;

exports.handler = function (event, context, callback) {
  const child = exec("./foliator " + "'" + JSON.stringify(event) + "'", (error, stdout, stderr) => {
    // Resolve with result of process
    //context.done(stdout);
    console.log("Script's result:");
    console.log(stdout);
    console.log("-----------------")
    const resultLines = stdout.split("\n");
    //console.log(resultLines[0]);
    console.log(resultLines[resultLines.length - 2]);
    const urlLine = resultLines.find(line => line.startsWith("url:"));
    if (urlLine) {
      console.log("Attachment's url:");
      console.log(urlLine);
    }
    callback(null, 'test jose');
  });

  // Log process stdout and stderr
  child.stdout.on('data', console.log);
  child.stderr.on('data', console.error);
}
