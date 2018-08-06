let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

let schema = buildSchema(`
      type User {
        id : String!
        nickname : String!
        avatar : String!
      }
      type Post {
          id: String!
          user: User!
          caption : String!
          image : String!
      }
      type Query{
        user(id: String) : User!
        post(user_id: String, post_id: String) : Post!
        posts(user_id: String) : [Post]
      }
    `);

let userslist = {
          a: {
            id: "a",
            nickname: "aquib",
            avatar: "https://www.facebook.com/photo.php?fbid=1593525877430133&set=a.101842909931778.2205.100003182074204&type=3&theater"
          },
        };


let postslist = {
          a: {
            a: {
              id: "a",
              user: userslist["a"],
              caption: "Mundeyyyy",
              image: "https://www.facebook.com/photo.php?fbid=1593525877430133&set=a.101842909931778.2205.100003182074204&type=3&theater"
            },
            b: {
              id: "b",
              user: userslist["a"],
              caption: "Aseeeeem",
              image:
                "{require('./img2.jpg')}"
            },
          }
        };

let root = {
              user: function ({id}) {
                return userslist[id];
              },
              post: function({user_id , post_id}) {
                return postslist[user_id][post_id];
              },
              posts: function({ user_id }){
                return Object.values(postslist[user_id]);
              }
            };



let app = express();
              app.use(cors());
                app.use(
                  "/graphql",
                  graphqlHTTP({
                    schema: schema,
                    rootValue: root,
                    graphiql: true
                  })
                );
app.listen(4000);
