// dynamoDBService.js
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";


const client = new DynamoDBClient({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const postHotelData = async (hotelData) => {
 


  const params = {
    TableName: "Ootygo-hotel",
    Item: {
      id: { N: hotelData.id },
      name: { S: hotelData.name },
      imgurl: { S: hotelData.imgurl },
      rate: { S: hotelData.rate },
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
