
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const express = require('express');
const app = express();


const port = process.env.PORT || 5500;


app.use(express.urlencoded({extended: true}));
app.use(express.static('frontend'));

// A unique identifier for the given session
const sessionId = uuid.v4();
let checkQuerry;

app.get("/", (req, res) => {
  res.sendFile('index.html', {root: __dirname });
});

app.post('/send-msg', (req, res) => {
    runSample(req.body.MSG).then(data => {
        res.send({Reply:data});
    });
});

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, projectId = 'rn-bot-ngny') {
  

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename: "./ChatBotCredentials.json"
  });
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msg,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  console.log(sessionId);
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
    // if(result.intent.displayName === 'Default Fallback Intent'){
    //   return 'Your Query has been noted! Can you please share your email id, so that we can contact you regarding you query.';
    // }
  } else {
    console.log('  No intent matched.');
  }
  return result.fulfillmentText;
}


// runSample();
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});