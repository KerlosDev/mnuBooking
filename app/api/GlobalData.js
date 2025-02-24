import request from "graphql-request";
import { gql } from "graphql-request";

const endpoint = "https://ap-south-1.cdn.hygraph.com/content/cm7dkvpt700te07w6as05bh2b/master";

const query = async (data) => {
  const fetchQuery = gql`
        query MyQuery {
            human(where: { id: "cm7ghgz5s15xs07of0vjs1pch" }) {
                jsonres
            }
        }
    `;

  const currentResults = await request(endpoint, fetchQuery);
  let existingResults = currentResults.human?.jsonres || [];

  // Ensure existingResults is an array
  if (!Array.isArray(existingResults)) {
    existingResults = [];
  }

  // Append new data
  const updatedResults = [...existingResults, data];

  // Update results
  const updateQuery = gql`
        mutation MyMutation($jsonres: Json!) {
            updateHuman(data: { jsonres: $jsonres }, where: { id: "cm7ghgz5s15xs07of0vjs1pch" }) {
                id
            }
            publishHuman(where: { id: "cm7ghgz5s15xs07of0vjs1pch" }) {
                id
            }
        }
    `;

  const variables = {
    jsonres: updatedResults
  };

  const result6 = await request(endpoint, updateQuery, variables);
  return result6;
}

const query2 = async () => {
  const fetchQuery = gql`
        query MyQuery {
            human(where: { id: "cm7ghgz5s15xs07of0vjs1pch" }) {
                jsonres
            }
        }
    `;

  const currentResults = await request(endpoint, fetchQuery);
  return currentResults
}


export default { query, query2 };