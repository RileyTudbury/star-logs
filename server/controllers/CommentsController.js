import express from "express";
import commentsService from "../services/CommentsService";

export default class CommentsController {

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
      let data = await commentsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getbyId(req, res, next) {
    try {
      let data = await commentsService.getById(req.params.id)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await commentsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await commentsService.edit(req.params.id, req.body)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await commentsService.delete(req.params.id)
      res.send("Deleted")
    } catch (error) {
      next(error)
    }
  }



}
