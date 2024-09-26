import React from "react";
import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./Mybookings.css";
import { MdDeleteForever } from "react-icons/md";
import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { ImSad } from "react-icons/im";

function Mybookings() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [data, setData] = useState([]);
  const [vehiceData, setVehicleData] = useState([]);
  // Initialize AWS SDK
  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });
  // Hotel Data
  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Ootygo-hotel",
    };

    dynamodb.scan(params, (err, result) => {
      if (err) {
        console.error("Error fetching data from DynamoDB:", err);
      } else {
        setData(result.Items);
      }
    });
  }, []);

  // Vehicle Data

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Ootygo-travel",
    };

    dynamodb.scan(params, (err, result) => {
      if (err) {
        console.error("Error fetching data from DynamoDB:", err);
      } else {
        setVehicleData(result.Items);
      }
    });
  }, []);

  const loginUserName = user.signInDetails.loginId;

  const loginUserHotel = data.filter((item) => item.username === loginUserName);

  const loginUserVehicle = vehiceData.filter(
    (item) => item.username === loginUserName
  );
  // delet vehicle
  const client = new DynamoDBClient({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
  });

  const deleteItem = async (i, n) => {
    if (!i || !n) {
      console.error("ID or Name is undefined");
      return;
    }

    const params = {
      TableName: "Ootygo-hotel",
      Key: {
        id: { N: i.toString() }, // Use DynamoDB format for numbers
        name: { S: n }, // Use DynamoDB format for strings
      },
    };

    try {
      const command = new DeleteItemCommand(params);
      await client.send(command);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const deleteVehicle = async (Vi, Vn) => {
    if (!Vi || !Vn) {
      console.error("ID or Name is undefined");
      return;
    }

    const params = {
      TableName: "Ootygo-travel",
      Key: {
        id: { S: Vi }, // Use DynamoDB format for numbers
        name: { S: Vn }, // Use DynamoDB format for strings
      },
    };

    try {
      const command = new DeleteItemCommand(params);
      await client.send(command);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <>
      <div className="Mybooking">
        <h1>My Assets</h1>
        <div className="Mybooking_Assets">
          {loginUserHotel.map(({ id, name, imgurl, rate }, index) => (
            <div key={index} className="Mybooking_contant_Vehicles">
              <img
                src={imgurl}
                alt="test-img"
                className="Paid_user__Vehicle_Img"
              />
              <h3 className="Travel_Vehicle_title">{name}</h3>
              <div className="Travel_Rete">
                Pkg starts @ <b>{rate}</b>
              </div>

              <button>Update</button>
              <button
                onClick={() => deleteItem(id, name)}
                className="Delete_vehicle"
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
          {loginUserHotel ? null : (
            <p className="No_vehicle_found">
              <ImSad /> No assets found, Add your asset below
            </p>
          )}
          {loginUserVehicle.map(({ id, name, imgurl, pkg }, index) => (
            <div key={index} className="Mybooking_contant_Vehicles">
              <img
                src={imgurl}
                alt="test-img"
                className="Paid_user__Vehicle_Img"
              />
              <h3 className="Travel_Vehicle_title">{name}</h3>
              <div className="Travel_Rete">
                Pkg starts @ <b>{pkg}</b>
              </div>

              <button>Update</button>
              <button
                onClick={() => deleteVehicle(id, name)}
                className="Delete_vehicle"
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
          {loginUserVehicle ? null : (
            <p className="No_vehicle_found">
              <ImSad /> No assets found, Add your asset below
            </p>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}
export default Mybookings;
