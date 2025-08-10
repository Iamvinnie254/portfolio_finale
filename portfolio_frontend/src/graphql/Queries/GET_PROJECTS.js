import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      project_preview_image
      live_demo_url
      source_code_url
      tech_stack
    }
  }
`;
