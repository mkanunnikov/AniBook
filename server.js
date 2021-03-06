const fs = require('fs');
// const config = require('./config');
var ps = require('pocketsphinx').ps;

modeldir = "../../pocketsphinx/model/en-us/"

var config = new ps.Decoder.defaultConfig();
config.setString("-hmm", modeldir + "en-us");
config.setString("-dict", "vocabular.dict");
config.setString("-lm", modeldir + "en-us.lm.bin");
var decoder = new ps.Decoder(config);

fs.readFile("../../pocketsphinx/test/data/goforward.raw", function (err, data) {
    if (err) throw err;
    decoder.startUtt();
    decoder.processRaw(data, false, false);
    decoder.endUtt();
    console.log(decoder.hyp())
});