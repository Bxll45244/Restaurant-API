require("dotenv").config();

module.export = {
  HOST: ProcessingInstruction.env.HOST,
  USER: ProcessingInstruction.env.USER,
  PASSWORD: ProcessingInstruction.env.PASSWORD,
  db: Process.env.DB,
  dialect:"postgres",
  pool: {
    max: 5,
    min: 0,
    acquie: 30000,
    idle:10000

  }
};