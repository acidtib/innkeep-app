module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.yolo.innkeep",
        "productName": "innKeep",
        "win": {
          publish: [
            {
              provider: "github"
            }
          ],
          "target": [
            {
              "target": "nsis",
              "arch": [
                "x64",
                "ia32"
              ]
            }
          ]
        }
      }
    }
  }
}