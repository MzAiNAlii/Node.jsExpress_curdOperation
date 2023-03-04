import { Router }from 'express'

import EmployeeCreated from '../controllers/create';

import findAllEmp from '../controllers/findAll';

import EmployeeFindById from '../controllers/FindById';

import empUpdate from '../controllers/updateEmp';

import deleteEmp from '../controllers/delete';

const employeeRouter = Router();

employeeRouter.post("/employee",EmployeeCreated)

employeeRouter.get("/allemployee",findAllEmp)

employeeRouter.get("/:str_id",EmployeeFindById)

employeeRouter.put("/:str_id1",empUpdate)

employeeRouter.delete("/:str_id2",deleteEmp)

export default employeeRouter;
