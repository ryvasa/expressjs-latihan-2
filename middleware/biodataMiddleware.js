const verifyBody = (req, res, next) => {
  const format = {
    nama: "value",
    "tempat-lahir": "value",
    "tanggal-lahir": "value",
    alamat: "value",
  };

  const nama = req.body.nama;
  const tempatLahir = req.body["tempat-lahir"];
  const tanggalLahir = req.body["tanggal-lahir"];
  const alamat = req.body.alamat;

  if (!nama || !tempatLahir || !tanggalLahir || !alamat) {
    res.status(400).send({
      message: `Pastikan data yang dikirim sesuai format!`,
      format,
    });
  } else {
    next();
  }
};

const verifyQuery = (req, res, next) => {
  const format =
    "http://localhost:5000/biodata?nama=value&tempat-lahir=value&tanggal-lahir=value&alamat=value";

  const nama = req.query.nama;
  const tempatLahir = req.query["tempat-lahir"];
  const tanggalLahir = req.query["tanggal-lahir"];
  const alamat = req.query.alamat;

  if (!nama || !tempatLahir || !tanggalLahir || !alamat) {
    res.status(400).send({
      message: `Pastikan query yang dikirim sesuai format!`,
      format,
    });
  } else {
    next();
  }
};

module.exports = { verifyBody, verifyQuery };
