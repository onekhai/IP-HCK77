const { MyList } = require("../models");
module.exports = async function guardUser(req, res, next) {
    try {
        // if (req.user.role.toLowerCase() === "admin") {
        //   next();
        //   return;
        // }
        const myListId = Number(req.params.id);
        const userId = req.user.id;

        const myList = await MyList.findByPk(myListId);

        if (!myList) {
            res.status(404).json({ message: "MyList Not Found" });
            return;
        }

        if (myList.userId !== userId) {
            res.status(403).json({ message: "Forbidden Access" });
            return;
        }

        next();
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}