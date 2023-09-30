import React from 'react';
import axios from '../axios'

function Download() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/getusers'); // Make a GET request to the server endpoint
      const blob = await response.blob(); // Convert the response to a Blob object
      const url = window.URL.createObjectURL(new Blob([blob])); // Create a URL for the Blob
      const link = document.createElement('a'); // Create a new anchor element
      link.href = url; // Set the anchor's href attribute to the URL of the Blob
      link.setAttribute('download', 'users.xlsx'); // Set the download attribute to the desired file name
      document.body.appendChild(link); // Append the anchor element to the document body
      link.click(); // Simulate a click on the anchor element to start the download
      link.parentNode.removeChild(link); // Remove the anchor element from the document body
    } catch (error) {
      console.error('Error downloading Excel file:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Excel File</button>
    </div>
  );
}

export default Download;
