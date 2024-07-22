import "./Stay.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
// import AWS from 'aws-sdk';

import React, { useState, useEffect } from "react";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export default function Stay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [secret, setSecret] = useState(null);

  useEffect(() => {
    const fetchCredentialsAndSecret = async () => {
      const credentialsSecretName = "aws-credentials";
      const secretName = "ootygoseckey";
      const region = "ap-south-1";

      // Create a SecretsManagerClient to retrieve the credentials
      const credentialsClient = new SecretsManagerClient({ region });

      try {
        // Retrieve the AWS credentials from Secrets Manager
        const credentialsResponse = await credentialsClient.send(
          new GetSecretValueCommand({
            SecretId: credentialsSecretName,
          })
        );

        const credentials = JSON.parse(credentialsResponse.SecretString);
        const { accessKeyId, secretAccessKey } = credentials;

        // Create a new SecretsManagerClient with the retrieved credentials
        const client = new SecretsManagerClient({
          region,
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
        });

        // Retrieve the desired secret
        const secretResponse = await client.send(
          new GetSecretValueCommand({
            SecretId: secretName,
            VersionStage: "AWSCURRENT",
          })
        );

        setSecret(secretResponse.SecretString);
      } catch (error) {
        console.error("Error retrieving secret:", error);
      }
    };

    fetchCredentialsAndSecret();
  }, []);



  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
        <div className="Stay_contant_Hotels">
          {/* {items.slice(0, 10).map(({ name, imgurl, rate }, index) => (
            <div key={index}>
              <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
              <h3 className="Stay_hotel_title">{name}</h3>
              <span>₹{rate}</span>
            </div>
          ))} */}
          <div>
            <h1>
              <div>{secret ? <p>Secret: {secret}</p> : <p>Loading...</p>}</div>
            </h1>
          </div>
        </div>
        <div className="Stay_data"></div>
      </div>

      <Footer />
    </>
  );
}
