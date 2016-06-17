
// create a pipeline
pipeline = Source({name:"localmongo", namespace: "loopback.tester", tail: true})
  .transform({filename: "transformers/passthrough_and_log.js", namespace: "loopback.tester"})
  .save({name:"es", namespace: "newindex.tester"})

