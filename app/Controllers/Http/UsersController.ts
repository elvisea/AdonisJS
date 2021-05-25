import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { name, username } = request.only(["name", "username"]);

    const user = new User();

    user.name = name;
    user.username = username;

    await user.save();

    console.log(user.$isPersisted); // true

    return user;
  }

  public async index() {
    const all = await User.all()
    return all;
  }
}
