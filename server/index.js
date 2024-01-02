const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

app.use(upload.single('gambar'));



app.listen(3002, () => {
  console.log('Server is running on port 3002')
})
// Let us create our database (mysql)
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '', //If you have set xampp password please enter it here
  database: 'bumikita',

})

app.post('/regist', (req, res) => {
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password


  const SQL = 'INSERT INTO User (email, username, password) VALUES (?,?,?)' //We are going to enter these values through a variable
  const Values = [sentEmail, sentUserName, sentPassword]

  // Query to execute the sql statement stated above
  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err)
    }
    else {
      console.log('User inserted succcessfully!')
      res.send({ message: 'akun telah ditambahkan' })
    }
  })

})

app.post('/login', (req, res) => {
  const sentLoginUserName = req.body.LoginUserName
  const sentLoginPassword = req.body.LoginPassword


  const SQL = 'SELECT * FROM user WHERE username = ? && password = ? ' //We are going to enter these values through a variable
  const Values = [sentLoginUserName, sentLoginPassword]


  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({ error: err })
    }
    if (results.length > 0) {
      res.send(results)
    }
    else {
      res.send({ message: `Credentials Don't match!` })
    }
  })
})


app.get('/berita', (req, res) => {
  const q = 'SELECT * FROM berita';
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Konversi gambar BLOB ke base64
    const booksWithBase64Images = data.map(book => ({
      ...book,
      gambar: `data:image/jpeg;base64,${book.gambar.toString('base64')}`, // Ubah tipe MIME sesuai kebutuhan
    }));

    return res.status(200).json(booksWithBase64Images);
  });
});

app.post('/dashboard/portal-berita', (req, res) => {
  const q =
    'INSERT INTO berita(`judul_berita`, `penulis`, `isi_berita`, `kategori`, `gambar`) VALUES (?, ?, ?, ?, ?)';

  const values = [
    req.body.judul_berita,
    req.body.penulis,
    req.body.isi_berita,
    req.body.kategori,
    req.file.buffer,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(201).json({ message: 'Berita berhasil ditambahkan' });
  });
});

app.delete("/dashboard/portal-berita/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM berita WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/dashboard/portal-berita/edit-berita/:id", (req, res) => {
  const idBerita = req.params.id;
  const query = "UPDATE berita SET `judul_berita`= ?, `penulis`= ?, `isi_berita`= ?, `kategori`= ?, `gambar`= ?";

  const values = [
    req.body.judul_berita,
    req.body.penulis,
    req.body.isi_berita,
    req.body.kategori,
    req.file.buffer, // Jika file hadir, gunakan buffer, jika tidak, gunakan null
  ];

  db.query(query, [...values,idBerita], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});