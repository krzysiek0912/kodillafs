const fs = require("fs"),
  StatMode = require("stat-mode"),
  colors = require("colors");

fs.stat("./dir/cat.jpg", function(err, stats) {
  let statMode = new StatMode(stats);
  console.log(statMode.toString());
});

// fs.readFile("./tekst.txt", "utf-8", function(err, data) {
//   console.log("Dane przed zapisem!".blue);
//   console.log(data);
//   fs.writeFile("./tekst.txt", "A tak wyglądają po zapisie!", function(err) {
//     if (err) throw err;
//     console.log("Zapisano!".blue);
//     fs.readFile("./tekst.txt", "utf-8", function(err, data) {
//       console.log("Dane po zapisie".blue);
//       console.log(data);
//     });
//   });
// });

fs.readdir("./dir", function(err, files) {
  listFiles = "";
  for (file of files) {
    listFiles += file + ", ";
  }

  const data = new Uint8Array(Buffer.from(listFiles));
  fs.writeFile("filelist.txt", data, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
