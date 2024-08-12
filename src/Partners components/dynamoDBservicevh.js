// dynamoDBService.js
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const postVehicleData = async (vehicleData) => {
  const params = {
    TableName: "Ootygo-travel",
    Item: {
      id: { S: vehicleData.id },
      name: { S: vehicleData.name },
      imgurl: { S: vehicleData.imgurl },
      number: { N: vehicleData.number },
    },
  };

  try {
    const command = new PutItemCommand(params);
    await client.send(command);
    window.alert("Hotel added sucessfull");
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
