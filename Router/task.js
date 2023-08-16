import  express  from "express";
import { newTask,getMyTask, deleteTask, UpdateTask } from "../controllers/task.js";
import { isauthenticate } from "../middleweares/auth.js";


 const router= express.Router();

router.post("/new",isauthenticate,newTask)
router.get("/my",isauthenticate,getMyTask)
router.route("/:id").put(isauthenticate,UpdateTask).delete(isauthenticate,deleteTask)



export default router