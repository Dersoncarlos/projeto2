/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export default (req, res, next) => {
  console.log(req.files)
  if (!req.files) {
    return res.status(400).send("Arquivo não foi enviado.");
  }
  if (!req.files.csv) {
    return res.status(400).send("Csv não encontrado.");
  }

  if (req.files.csv.mimetype !== "text/csv") {
    return res.status(400).send("Formado inválido.");
  }

  next();
};
