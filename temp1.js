var exec = require("child_process").exec;

commandMapMac = {
  ShutdownNow: "sudo shutdown -r now",
  ShutdownTimer: `sudo shutdown -r ${11}`,
  Sleep: "pmset sleepnow",
  Restart: "sudo shutdown -r now",
  RestartTimer: `sudo shutdown -r ${11}`,
};
function runCommand(command) {
  exec(command, function (error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
}

runCommand(commandMapMac[userCommand]);
// runCommand(commandMapMac.ShutdownNow);

// export default runCommand;
