import { gql } from "@apollo/client";

export const GET_DETAILS = gql`
  query GetDetails {
    user_details {
      id
      name
      image
      cv
    }
  }
`;
