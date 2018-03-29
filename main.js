const exec = require('child_process').exec;

exports.handler = function (event, context, callback) {
  const child = exec("./foliator " + "'" + JSON.stringify(event) + "'", (error, stdout, stderr) => {
    const resultLines = stdout.split("\n");
    const urlLine = resultLines.find(line => line.startsWith("url:"));
    let success = null;
    if (urlLine) {
      console.log("Attachment's url:");
      console.log(urlLine);
      const url = (urlLine.split(" "))[1];
      success = {
        url
      };
    }
    callback(error, success);
  });

  // Log process stdout and stderr
  child.stdout.on('data', console.log);
  child.stderr.on('data', console.error);
}
