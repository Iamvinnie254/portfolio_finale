import { gql } from "@apollo/client";

export const GET_TRUSTEES = gql`
  query GetTrustees {
    trustees {
      id
      name
      logo
    }
  }
`;
