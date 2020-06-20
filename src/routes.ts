import { Router } from 'express'
import UsersController from '@controllers/UsersController'

const routes = Router()

routes.get('/', UsersController.index)

export default routes
