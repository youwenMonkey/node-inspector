module.exports = {
  frontend: {
    modules: [
      {
        name: "node-console",
        dependencies: [ "console" ],
        scripts: [ "ConsoleExtentions.js" ]
      }
    ]
  },
  inspector: {
    agents: [
      {
        name: "Console",
        path: "ConsoleAgent.js"
      }
    ]
  }
};