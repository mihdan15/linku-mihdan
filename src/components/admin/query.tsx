import { gql, useMutation, useQuery } from "@apollo/client";

// Query Add Data
const ADD_LINK_MUTATION = gql`
  mutation Insert_Linku(
    $nama_link: String!
    $url_link: String!
    $icon_link: String!
  ) {
    insert_Linku(
      objects: { nama: $nama_link, url: $url_link, icon: $icon_link }
    ) {
      returning {
        id
        nama
        url
        icon
      }
    }
  }
`;

//Query Get Data
const GET_DATA = gql`
  query MyQuery {
    Linku {
      id
      icon
      nama
      url
    }
  }
`;

const EDIT_DATA_MUTATION = gql`
  mutation UpdateLinku(
    $id: Int!
    $nama_link: String!
    $url_link: String!
    $icon_link: String!
  ) {
    update_Linku(
      where: { id: { _eq: $id } }
      _set: { nama: $nama_link, url: $url_link, icon: $icon_link }
    ) {
      affected_rows
    }
  }
`;

const DELETE_DATA = gql`
  mutation DeleteData($id: Int!) {
    delete_Linku(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export { ADD_LINK_MUTATION, GET_DATA, EDIT_DATA_MUTATION, DELETE_DATA };
