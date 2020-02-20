import express from "express";
import shipsService from "../services/ShipsService";

export default class ShipsController {

  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getbyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await shipsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getbyId(req, res, next) {
    try {
      let data = await shipsService.getById(req.params.id)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await shipsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await shipsService.edit(req.params.id, req.body)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await shipsService.delete(req.params.id)
      res.send("Deleted")
    } catch (error) {
      next(error)
    }
  }



}
