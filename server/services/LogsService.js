import mongoose from "mongoose";
import Log from "../models/Log";

const _repository = mongoose.model("Log", Log);

class LogsService {


  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    await _repository.findById(id)
  }

  async getLogsByShipId(id) {
    return await _repository.find({ shipId: id })
  }

  async getLogsByAuthor(author) {
    return await _repository.find({ author })
  }

  async create(rawData) {
    return await _repository.create(rawData)
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async  delete(id) {
    return await _repository.findByIdAndDelete(id)
  }

}

const logsService = new LogsService();
export default logsService;
