const getBiodataByUrl = (req, res) => {
  const biodata = {
    nama: req.query.nama,
    "tempat-lahir": req.query["tempat-lahir"],
    "tanggal-lahir": req.query["tanggal-lahir"],
    alamat: req.query.alamat,
  };
  res.send(biodata);
};
const postBiodata = (req, res) => {
  const biodata = {
    nama: req.body.nama,
    "tempat-lahir": req.body["tempat-lahir"],
    "tanggal-lahir": req.body["tanggal-lahir"],
    alamat: req.body.alamat,
  };
  res.send(biodata);
};
module.exports = { getBiodataByUrl, postBiodata };
