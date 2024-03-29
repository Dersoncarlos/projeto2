import fs from "fs";
import fastcsv from "fast-csv";
import { parse, format } from "date-fns";
import { ptBR } from "date-fns/locale";

const path =  "/src/storage/formated-csv.csv";

/**
 * Upload CSV
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const uploadCsv = (req, res) => {
  try {
    const csvRows = [];
    fs.createReadStream(req.files.csv.tempFilePath)
      .pipe(
        fastcsv.parse({
          headers: true,
          ignoreEmpty: true,
        })
      )
      .transform((row, next) => {
        const { ip, id, data_aniversario, nome, email, ...rest } = row;

        const date = parse(data_aniversario, "dd/MM/yyyy", new Date(), {
          locale: ptBR,
        });

        return next(null, {
          name: nome,
          mail: email,
          birthdate: format(date, "yyyy-MM-dd"),
          ...rest,
        });
      })
      .on("data", (row) => csvRows.push(row))
      .on("end", () => {

        const ws = fs.createWriteStream(`.${path}`);

        fastcsv.write(csvRows, { headers: true }).pipe(ws);

        res.send({ rows: csvRows, link: `${req.protocol}://${req.get("host")}/api/csv/download` });
      });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send(
        "Ocorreu um erro ao tentar enviar o csv, por favor tente novamente mais tarde."
      );
  }
};

/**
 * Download CSV
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const downloadCsv = (_, res) => {
  res.download(`.${path}`);
};

export default {
  uploadCsv,
  downloadCsv,
};
