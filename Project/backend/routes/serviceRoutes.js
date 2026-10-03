import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("SERVICE ROUTE HIT");

    res.json([
        {
            id: 1,
            name: "Oil Change",
            description: "Engine oil and filter replacement"
        },
        {
            id: 2,
            name: "General Service",
            description: "Complete vehicle inspection and maintenance"
        },
        {
            id: 3,
            name: "Brake Service",
            description: "Brake inspection and maintenance"
        },
        {
            id: 4,
            name: "AC Service",
            description: "Air conditioning inspection and service"
        }
    ]);
});

export default router;