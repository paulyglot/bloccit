const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

 describe("Topic", () => {
     beforeEach((done) => {
        this.topic;
        this.post;
        sequelize.sync({ force: true }).then((res) => {
            Topic.create({
                title: "Favorite Climbing Destinations",
                description: "NorCal Crags"
            })
                .then((topic) => {
                    this.topic = topic;
                    Post.create({
                        title: "Lover's Leap",
                        body: "This area is an excellent 250 to nearly 600 foot tall chunk of mostly vertical granite, containing hundreds of cracks…",
                        topicId: this.topic.id
                    })
                        .then((post) => {
                            this.post = post;
                            done();
                        });
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });
     });
     describe("#create()", () => {
         it("should create a topics object that is stored in the database", (done) => {
            Topic.create({
                title: "Best Bouldering in the Bay",
                body: "A non-comprehensive list of bay area bouldering crags.",
            })
                .then((topics) => {
                    expect(topics.title).toBe("Best Bouldering in the Bay");
                    expect(topics.description).toBe("A non-comprehensive list of bay area bouldering crags.");
                    done();
                 })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });
     });
     describe("#getPosts()", () => {
         it("should create and associate a topic and a post together", (done) => {
            this.topics.getPosts(newPost)
            .then((newPost) => {
                expect(newPost.topicId).toBe(this.topics.id);
            });
        });
         it("should return an array of post objects associated with topic", (done) => {
            this.topics.getPosts()
                .then((postArray) => {
                    expect(postArray.title).toBe("Favorite Climbing Destinations");
                    done();
                });
        });
         it("should confirm associate post and is returned when method is called", (done) => {
            this.topics.getPosts().then((posts) => {
                expect(posts[0].title).toContain("Lover's Leap");
                expect(posts[0].description).toContain("This area is an excellent 250 to nearly 600 foot tall chunk of mostly vertical granite, containing hundreds of cracks…");
                done();
            });
         });
     });
 });