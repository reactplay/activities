import {
  submit as gsubmit,
  submit_multi as gsubmit_multi,
} from "json-graphql-parser/v2/index.js";

const BACKEND_URL = `${process.env.NEXT_PUBLIC_NHOST_BACKEND_URL}/${process.env.NEXT_PUBLIC_NHOST_VERSION}/${process.env.NEXT_PUBLIC_NHOST_ENDPOINT}`;

/**
 * Run GraphQL queries using Axios using multiple  JSON object
 * @param {object[]} requests           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 */
export const submit_multi = (requests, url, reqheder) => {
  return gsubmit_multi(requests, BACKEND_URL);
};

/**
 * Run GraphQL queries using Axios using a simple JSON object
 * @param {object} request           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 * @returns {Promise} single promise
 */
export const submit = (request, url, reqheder) => {
  return gsubmit(request, BACKEND_URL);
};

export const submitMutation = (query, object) => {
  const mutationQuery = query;
  mutationQuery.object = object;
  return submit(mutationQuery);
};
