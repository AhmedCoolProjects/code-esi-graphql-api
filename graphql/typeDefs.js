import { gql } from "apollo-server";

const typeDefs = gql`
  enum Category {
    competition
    visit
    collaboration
    meeting
    training
    project
    news
    gaming
    form
    other
  }
  enum PersonCategory {
    board
    member
    guest
  }
  enum PersonPost {
    prof
    student
    laureate
    other
  }
  type Person {
    id: ID!
    first_name: String!
    last_name: String!
    email: String
    linkedin: String
    profession: String!
    image: String!
    category: PersonCategory!
    post: PersonPost!
    is_hidden: Boolean
    createdAt: String!
    updatedAt: String!
  }
  type Organization {
    id: ID!
    name: String!
    facebook_link: String
    instagram_link: String
    website_link: String
    president: ID!
    image: String!
    is_hidden: Boolean
    description: String!
    createdAt: String!
    updatedAt: String!
  }
  type Activity {
    id: ID!
    title: String!
    description: String!
    image: String!
    date: String!
    creator: ID!
    participants: [ID]
    organizers: [ID]
    is_hidden: Boolean
    youtube_link: String
    github_link: String
    facebook_link: String
    competition_link: String
    deadline: String
    destination: String
    destination_link: String
    report: String
    axes: [String]
    tags: [String]
    collaborators: [ID]
    images: [String]
    category: Category!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    getPerson(id: ID!): Person
    getOrganization(id: ID!): Organization
    getActivity(id: ID!): Activity
    getPeople: [Person]
    getOrganizations: [Organization]
    getActivities: [Activity]
    getPersonsByCategory(category: PersonCategory): [Person]
    getPersonsByPost(post: PersonPost): [Person]
    getActivitiesByCategory(category: String!): [Activity]
    getActivitiesByOrganizer(organizer: ID!): [Activity]
    getActivitiesByCollaborator(collaborator: ID!): [Activity]
  }
  type Mutation {
    createPerson(
      first_name: String!
      last_name: String!
      email: String
      linkedin: String
      profession: String!
      image: String!
      category: String!
      post: String!
      is_hidden: Boolean
    ): Person
    createOrganization(
      name: String!
      facebook_link: String
      instagram_link: String
      website_link: String
      president: ID!
      image: String!
      description: String!
      is_hidden: Boolean
    ): Organization
    createActivity(
      title: String!
      description: String!
      image: String!
      date: String!
      creator: ID!
      participants: [ID]
      organizers: [ID]
      is_hidden: Boolean
      youtube_link: String
      github_link: String
      facebook_link: String
      competition_link: String
      deadline: String
      destination: String
      destination_link: String
    ): Activity
    updatePerson(
      id: ID!
      first_name: String
      last_name: String
      email: String
      linkedin: String
      profession: String
      image: String
      category: String
      post: String
      is_hidden: Boolean
    ): Person
    updateOrganization(
      id: ID!
      name: String
      facebook_link: String
      instagram_link: String
      website_link: String
      president: ID
      image: String
      description: String
      is_hidden: Boolean
    ): Organization
    updateActivity(
      id: ID!
      title: String
      description: String
      image: String
      date: String
      creator: ID
      participants: [ID]
      organizers: [ID]
      is_hidden: Boolean
      youtube_link: String

      github_link: String
      facebook_link: String
      competition_link: String
      deadline: String
      destination: String
      destination_link: String
    ): Activity
    deletePerson(id: ID!): Person
    deleteOrganization(id: ID!): Organization
    deleteActivity(id: ID!): Activity
  }
`;

export default typeDefs;
