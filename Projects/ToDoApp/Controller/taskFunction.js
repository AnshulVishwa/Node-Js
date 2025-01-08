const { TODO } = require("../Model/model");

async function handleGetAllTasks(req, res) {
    const user = req.params.user;
    try {
        const details = await TODO.findOne({ username: user });
        if (!details) return res.status(400).json({ msg: "No user found" });

        return res.status(200).json(details.tasks);
    } catch (err) {
        console.error(`Error fetching tasks: ${err}`);
        return res.status(500).json({ msg: "Server error" });
    }
}

module.exports = {
    handleGetAllTasks,
};
