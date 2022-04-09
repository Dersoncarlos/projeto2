import fs from "fs";
import fastCsv from "fast-csv";
import { parse, format } from "date-fns";
import { ptBR } from "date-fns/locale";
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const uploadCsv = (req, res) => {
  try {

    const csvRows = [];
    fs.createReadStream(req.files.csv.tempFilePath)
      .pipe(
        fastCsv.parse({
          headers: true,
          ignoreEmpty: true,
        })
      )
      .transform((row, next) => {
        const { ip, id, ...rest } = row;

        const date = parse(row.data_aniversario, "dd/MM/yyyy", new Date(), {
          locale: ptBR,
        });

        return next(null, {
          name: row.nome,
          mail: row.email,
          birthdate: format(date, "yyyy-MM-dd"),
          ...rest,
        });
      })
      .on("data", (row) => csvRows.push(row))
      .on("end", () => {
        res.send(csvRows);
      });
  } catch (error) {
      console.log(error)
    res
      .status(400)
      .send(
        "Ocorreu um erro ao tentar enviar o csv, por favor tente novamente mais tarde."
      );
  }
};

export default {
  uploadCsv,
};
