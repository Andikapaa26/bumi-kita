import React, { useState } from 'react';
import axios from 'axios';
import { Label, TextInput, Textarea, Select, FileInput, Button } from 'flowbite-react';

const PortalBerita = () => {
  const [formData, setFormData] = useState({
    judul_berita: '',
    penulis: '',
    isi_berita: '',
    kategori: '',
    gambar: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'gambar' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('judul_berita', formData.judul_berita);
      formDataToSend.append('penulis', formData.penulis);
      formDataToSend.append('isi_berita', formData.isi_berita);
      formDataToSend.append('kategori', formData.kategori);
      formDataToSend.append('gambar', formData.gambar);

      const res = await axios.post('http://localhost:3002/dashboard/portal-berita', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res.data);

      // Setelah berhasil, mungkin Anda ingin mereset formulir atau memberikan notifikasi sukses
      setFormData({
        judul_berita: '',
        penulis: '',
        isi_berita: '',
        kategori: '',
        gambar: null,
      });

      alert('Berita berhasil ditambahkan.'); // Notifikasi sukses, Anda bisa mengganti dengan notifikasi yang lebih baik

    } catch (error) {
      console.error(error);
      // Tangani kesalahan, mungkin memberikan notifikasi kesalahan
      alert('Gagal menambahkan berita. Silakan coba lagi.'); // Notifikasi kesalahan, Anda bisa mengganti dengan notifikasi yang lebih baik
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="judul" value="Judul Berita" className="text-neutralSilver" />
          </div>
          <TextInput
            id="judul_berita"
            type="text"
            name="judul_berita"
            placeholder="Judul Berita"
            value={formData.judul}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="penulis" value="Penulis" className="text-neutralSilver" />
          </div>
          <TextInput
            id="penulis"
            type="text"
            name="penulis"
            placeholder="Penulis"
            value={formData.penulis}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <div className="mb-5 block">
            <Label htmlFor="isi_berita" value="Isi Artikel" className="text-neutralSilver" />
          </div>
          <Textarea
            id="isi_berita"
            type="text"
            name="isi_berita"
            placeholder="Isi Berita"
            sizing="lg"
            value={formData.isi_berita}
            onChange={handleInputChange}
            required
            rows={6}
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="kategori" value="Kategori Berita" className="text-neutralSilver" />
          </div>
          <Select
            id="kategori"
            name="kategori"
            value={formData.kategori}
            onChange={handleInputChange}
            required
          >
            <option>Pendidikan</option>
            <option>Kesehatan</option>
            <option>Kelautan</option>
            <option>Kemanusiaan</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="gambar" value="Upload Gambar" className="text-neutralSilver" />
          </div>
          <FileInput
            id="gambar"
            name="gambar"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)"
            className="text-neutralSilver"
            onChange={handleInputChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default PortalBerita;
