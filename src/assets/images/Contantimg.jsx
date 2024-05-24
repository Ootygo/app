import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const Contantimg = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Initialize AWS configuration (set your credentials and region)
    AWS.config.update({
      accessKeyId: process.env.AKIAQVUQ5OG74QJJ6MZJ,
      secretAccessKey: process.env.bpXMtqVhKnFYALKcH9mifmOK2xeAwQp50ooMO6s,
      region: 'ap-south-1', // Set your desired region
    });

    // Create an S3 instance
    const s3 = new AWS.S3();

    // Specify the S3 bucket and object key (image path)
    const params = {
      Bucket: 'ootygo-img',
      Key: 'contant-img/Screenshot 2024-04-25 212911.png',
    };

    // Get a signed URL for the image (safe to use)
    s3.getSignedUrlPromise('getObject', params)
      .then(url => setImageUrl(url))
      .catch(err => console.error('Error fetching image URL:', err));
  }, []);

  return (
    <div>
      <h1>Displaying Image from S3</h1>
      <img src={imageUrl} alt="My S3 Image" />
    </div>
  );
};

export default Contantimg;
