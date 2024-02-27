import express from "express";
import { db } from "../fireBase/config.js";
import { FieldValue } from "firebase-admin/firestore";
import { getDatabase, ref, onValue, set } from 'firebase/database';


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const ref = db.ref('trips2');

        // Attach an asynchronous callback to read the data at our posts reference
        ref.once('value', (snapshot) => {
            if (snapshot.exists()) {
              // Iterate over each child and log its key
              const wycieczki = [];
              snapshot.forEach((childSnapshot) => {
                    // console.log(childSnapshot.val());
                    const childKey = childSnapshot.key;
                    // console.log('Child key:', childKey);
                    // console.log('Child value:', childSnapshot.val());
                    const child = {};
                    child['key'] = childKey;
                    child['data'] = childSnapshot.val();
                    if(child != null) {
                        wycieczki[childKey] = child;
                    }
                    wycieczki.flat(0);
              });
            //   console.log(wycieczki);
              res.send(wycieczki.flat(0));
            } else {
              console.log('No data found at the specified path.');
            }
          });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const ref = db.ref('trips2/' + req.params.id);
        // console.log(req.params.id);

        // Attach an asynchronous callback to read the data at our posts reference
        ref.once('value', (snapshot) => {
            if (snapshot.exists()) {
                // Iterate over each child and log its key
                const childKey = snapshot.key;
                const child = {};
                child['key'] = childKey;
                child['data'] = snapshot.val();
                // console.log(child);
                res.send(child);
            } else {
                console.log('No data found at the specified path.');
            }
          });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put("/:id/reserved_places", async (req, res) => {
    try {
        const ref = db.ref('trips2/' + req.params.id);
        // Attach an asynchronous callback to read the data at our posts reference
        ref.update( {
            reserved_places: req.body.reserved_places,
          });
        res.send(req.body);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put("/:id/rate", async (req, res) => {
    try {
        const ref = db.ref('trips2/' + req.params.id);
        // Attach an asynchronous callback to read the data at our posts reference
        ref.update( {
            rate: req.body.rate,
          });
        res.send(req.body);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const listRef = db.ref('trips2/' + req.params.id); // Replace 'yourList' with your actual database path
        listRef.remove();
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
