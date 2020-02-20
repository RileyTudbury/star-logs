import express from "express";
import logsService from "../services/LogsService";
import commentsService from "../services/CommentsService"

export default class LogsController {


  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:author", this.getLogsByAuthor)
      .get("/:id", this.getbyId)
      .get("/:id/comments", this.getCommentsByLogId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }

  async getAll(req, res, next) {
    try {
      let data = await logsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getbyId(req, res, next) {
    try {
      let data = await logsService.getById(req.params.id)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async getCommentsByLogId(req, res, next) {
    try {
      let data = await commentsService.getCommentsByLogId(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getLogsByAuthor(req, res, next) {
    try {
      let data = await logsService.getLogsByAuthor(req.params.author)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }


  async create(req, res, next) {
    try {
      let data = await logsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await logsService.edit(req.params.id, req.body)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await logsService.delete(req.params.id)
      res.send("Deleted")
    } catch (error) {
      next(error)
    }
  }



}
