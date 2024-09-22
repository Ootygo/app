import React from "react";
import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./Mybookings.css";
import { MdDeleteForever } from "react-icons/md";
import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

function Mybookings() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [data, setData] = useState([]);
  // Initialize AWS SDK
  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Ootygo-travel",
    };

    dynamodb.scan(params, (err, result) => {
      if (err) {
        console.error("Error fetching data from DynamoDB:", err);
      } else {
        setData(result.Items);
      }
    });
  }, []);

  const loginUserName = user.username;
  const loginUserVehicle = data.filter(
    (element) => element.username === loginUserName
  );

  // delet vehicle
  const client = new DynamoDBClient({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
  });

  const id = loginUserVehicle.map(({ id }) => {
    return id;
  });
//   const idString = id["0"].toString();

  const deleteItem = async (id) => {
    // console.log("id type:", typeof id); // Add this line
    // console.log("id value:", id); // And this one, if you want to see the actual value

    const params = {
      TableName: "Ootygo-travel",
      Key: {
        id: { S: id },
        // Adjust the key attribute based on your table schema
      },
    };

    try {
      

      const command = new DeleteItemCommand(params);
      const response = await client.send(command);
      console.log("Delete successful:", response);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className="Mybooking">
        <h1>My vehicles</h1>

        {loginUserVehicle.map(({ name, imgurl, pkg }, index) => (
          <div key={index} className="Mybooking_contant_Vehicles">
            <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
            <h3 className="Travel_Vehicle_title">{name}</h3>
            <div className="Travel_Rete">
              Pkg starts @ <b>{pkg}</b>
            </div>

            <button>Update Info</button>
            <button onClick={() => deleteItem(id)} className="Delete_vehicle">
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}
export default Mybookings;
