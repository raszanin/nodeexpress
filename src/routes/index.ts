import { Router } from "express";
import projects from "./project.routes";

const routes = Router();

routes.use("/projects", projects);

export default routes;
