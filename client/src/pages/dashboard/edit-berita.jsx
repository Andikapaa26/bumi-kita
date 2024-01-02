import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, TextInput, Textarea, Select, FileInput, Button } from 'flowbite-react';
import '../../components/Cards/Cards';
import { Link, useLocation, useNavigate } from "react-router-dom";



const Edit = ({ }) => {

    const [book, setBook] = useState({
        judul_berita: "",
        penulis: "",
        isi_berita: "",
        kategori: "",
        gambar: "",
    });
    const [error, setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (id, e) => {
        e.preventDefault();

        try {
            await axios.put(`/dashboard/portal-berita/edit-berita/${id}`, book);
            setBook((prevBooks) => prevBooks.filter((book) => book.id !== id));
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };
    return (
        <div className='container grid-one-item grid-common grid-c1 mx-auto my-8 max-w-md'>
            <h1 className='text-3xl font-semibold text-center gap-12 py-5'>Update Berita</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="judul_berita" value="Judul Berita" className="text-neutralSilver" />
                    </div>
                    <TextInput
                        id="judul_berita"
                        type="text"
                        name="judul_berita"
                        placeholder="Judul Berita"
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit" onClick={handleClick}> Update</Button>
                {error && "Something went wrong!"}
            </form>
        </div>
    );
};

export default Edit;
