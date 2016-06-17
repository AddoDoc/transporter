
// create a pipeline
pipeline = Source({name:"localmongo", namespace: "loopback.question", tail: true})
  .transform({filename: "transformers/passthrough_and_log.js", namespace: "loopback.question"})
  .save({name:"stdout", namespace: "loopback.question"})

