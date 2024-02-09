const knex = require("../db/connection");
const table = "posts";

function create(post) {
  // updated here a
  return knex(table)
    .insert(post)
    .returning("*")
    .then((createdPosts) => createdPosts[0]);
}

function read(postId) {
  return knex(table).select("*").where({ post_id: postId }).first();
}

function update(updatedPost) {
  // updated here
  return knex(table)
    .select("*")
    .where({ post_id: updatedPost.post_id })
    .update(updatedPost, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(postId) {
  // more updates
  return knex(table).select("*").where({ post_id: postId }).del();
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};