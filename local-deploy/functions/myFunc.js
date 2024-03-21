exports = async function(authEvent) {
  // An Authentication Trigger will always call a function with an authEvent.
  // Documentation on Triggers: https://www.mongodb.com/docs/atlas/app-services/triggers/

  // Access the user associated with the authEvent:
  const user = authEvent.user

  // Access the time the authEvent happened:
  const time = authEvent.time

  // Access the operation type for the authEvent:
  const operationType = authEvent.operationType

  // Access the providers associated with the authEvent:
  const providers = authEvent.providers

  // Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.

  // Get the MongoDB service you want to use (see "Linked Data Sources" tab)
  const serviceName = "<SERVICE_NAME>";
  const databaseName = "<DB_NAME>";
  const collectionName = "<COLL_NAME>";
  const collection = context.services.get(serviceName).db(databaseName).collection(collectionName);

  try {
    await collection.insertOne({ message: "authEvent", user, time, operationType, providers });
  } catch (err) {
    console.log("error performing mongodb insertOne: ", err.message);
  }
};
