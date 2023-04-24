function ProfileController(app) {
    app.get("/profile/:name", function(req, res) {
        const name = req.params.name;
        const profile = {
            name: name,
            firstName: "Nola",
            lastName: "Corgi",
            username : "corgi",
            handle: "@corgi",
            password: "12345",
            email: "corgi@gmail.com",
            phone: "123-456-7890",
            role: "WRITER",
            photo: "../images/cola.jpg",
            id: "101",
            bio: "I'm a corgi",
            location: "Boston, MA",
            dateOfBirth: "09/18/2018",
            dateJoined: "3/2023",
        };
        res.send(profile);
});
    app.get("/login", function (req, res) {
        res.send("Login");
    })
    app.get("/register", function(req, res) {
        res.send("Register");
    })
}
export default ProfileController;