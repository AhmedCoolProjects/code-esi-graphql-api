import Person from "../types/Person.js";
import Organization from "../types/Organization.js";
import Activity from "../types/Activity.js";

const resolvers = {
  Query: {
    getPerson: async (_, { id }) => {
      try {
        const person = await Person.findById(id);
        return person;
      } catch (err) {
        throw err;
      }
    },
    getPeople: async () => {
      try {
        const people = await Person.find();
        return people;
      } catch (err) {
        throw err;
      }
    },
    getOrganization: async (_, { id }) => {
      try {
        const organization = await Organization.findById(id);
        return organization;
      } catch (err) {
        throw err;
      }
    },
    getOrganizations: async () => {
      try {
        const organizations = await Organization.find();
        return organizations;
      } catch (err) {
        throw err;
      }
    },
    getActivity: async (_, { id }) => {
      try {
        const activity = await Activity.findById(id);
        return activity;
      } catch (err) {
        throw err;
      }
    },
    getActivities: async () => {
      try {
        const activities = await Activity.find();
        return activities;
      } catch (err) {
        throw err;
      }
    },
    getPersonsByCategory: async (_, { category }) => {
      try {
        const people = await Person.find({ category: category });
        return people;
      } catch (err) {
        throw err;
      }
    },
    getPersonsByPost: async (_, { post }) => {
      try {
        const people = await Person.find({ post: post });
        return people;
      } catch (err) {
        throw err;
      }
    },
    getActivitiesByCategory: async (_, { category }) => {
      try {
        const activities = await Activity.find({ category: category });
        return activities;
      } catch (err) {
        throw err;
      }
    },
    getActivitiesByOrganizer: async (_, { organizer }) => {
      try {
        const activities = await Activity.find({
          organizers: { $in: [organizer] },
        });
        return activities;
      } catch (err) {
        throw err;
      }
    },
    getActivitiesByCollaborator: async (_, { collaborator }) => {
      try {
        const activities = await Activity.find({
          collaborators: { $in: [collaborator] },
        });
        return activities;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createPerson: async (
      _,
      {
        first_name,
        last_name,
        email,
        linkedin,
        profession,
        image,
        category,
        post,
        is_hidden,
      }
    ) => {
      try {
        const person = await Person.create({
          first_name: first_name,
          last_name: last_name,
          email: email,
          linkedin: linkedin,
          profession: profession,
          image: image,
          category: category,
          post: post,
          is_hidden: is_hidden,
        });
        return person;
      } catch (err) {
        throw err;
      }
    },
    createOrganization: async (
      _,
      {
        name,
        facebook_link,
        instagram_link,
        website_link,
        president,
        image,
        description,
        is_hidden,
      }
    ) => {
      try {
        const organization = await Organization.create({
          name: name,
          facebook_link: facebook_link,
          instagram_link: instagram_link,
          website_link: website_link,
          president: president,
          image: image,
          description: description,
          is_hidden: is_hidden,
        });
        return organization;
      } catch (err) {
        throw err;
      }
    },
    createActivity: async (
      _,
      {
        title,
        description,
        image,
        date,
        creator,
        participants,
        organizers,
        is_hidden,
        youtube_link,
        github_link,
        facebook_link,
        competition_link,
        deadline,
        destination,
        destination_link,
      }
    ) => {
      try {
        const activity = await Activity.create({
          title: title,
          description: description,
          image: image,
          date: date,
          creator: creator,
          participants: participants,
          organizers: organizers,
          is_hidden: is_hidden,
          youtube_link: youtube_link,
          github_link: github_link,
          facebook_link: facebook_link,
          competition_link: competition_link,
          deadline: deadline,
          destination: destination,
          destination_link: destination_link,
        });
        return activity;
      } catch (err) {
        throw err;
      }
    },
    updatePerson: async (
      _,
      {
        id,
        first_name,
        last_name,
        email,
        linkedin,
        profession,
        image,
        category,
        post,
        is_hidden,
      }
    ) => {
      try {
        const person = await Person.findByIdAndUpdate(id, {
          first_name: first_name,
          last_name: last_name,
          email: email,
          linkedin: linkedin,
          profession: profession,
          image: image,
          category: category,
          post: post,
          is_hidden: is_hidden,
        });
        return person;
      } catch (err) {
        throw err;
      }
    },
    updateOrganization: async (
      _,
      {
        id,
        name,
        facebook_link,
        instagram_link,
        website_link,
        president,
        image,
        description,
        is_hidden,
      }
    ) => {
      try {
        const organization = await Organization.findByIdAndUpdate(id, {
          name: name,
          facebook_link: facebook_link,
          instagram_link: instagram_link,
          website_link: website_link,
          president: president,
          image: image,
          description: description,
          is_hidden: is_hidden,
        });
        return organization;
      } catch (err) {
        throw err;
      }
    },
    updateActivity: async (
      _,
      {
        id,
        title,
        description,
        image,
        date,
        creator,
        participants,
        organizers,
        is_hidden,
        youtube_link,
        github_link,
        facebook_link,
        competition_link,
        deadline,
        destination,
        destination_link,
      }
    ) => {
      try {
        const activity = await Activity.findByIdAndUpdate(id, {
          title: title,
          description: description,
          image: image,
          date: date,
          creator: creator,
          participants: participants,
          organizers: organizers,
          is_hidden: is_hidden,
          youtube_link: youtube_link,
          github_link: github_link,
          facebook_link: facebook_link,
          competition_link: competition_link,
          deadline: deadline,
          destination: destination,
          destination_link: destination_link,
        });
        return activity;
      } catch (err) {
        throw err;
      }
    },
    deletePerson: async (_, { id }) => {
      try {
        const person = await Person.findByIdAndDelete(id);
        return person;
      } catch (err) {
        throw err;
      }
    },
    deleteOrganization: async (_, { id }) => {
      try {
        const organization = await Organization.findByIdAndDelete(id);
        return organization;
      } catch (err) {
        throw err;
      }
    },
    deleteActivity: async (_, { id }) => {
      try {
        const activity = await Activity.findByIdAndDelete(id);
        return activity;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default resolvers;
