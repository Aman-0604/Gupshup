import { Router } from "express";
import {
    getAllOptions,
} from "../../../controllers/apps/options/options.controllers.js";

const router = Router();

router.route("/").get(getAllOptions);

export default router;
