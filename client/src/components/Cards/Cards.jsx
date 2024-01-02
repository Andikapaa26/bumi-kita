import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { iconsImgs } from "../../utils/images";
import "./Cards.css";
import { Table } from 'flowbite-react';
import axios from 'axios';

const Cards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3002/berita");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/dashboard/portal-berita/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Hapus/Edit Berita</h3>
        <Link to="/tambah-berita">
          <button className="grid-c-title-icon">
            <img src={iconsImgs.plus} alt="Tambah Berita" />
          </button>
        </Link>
      </div>
      <div className="grid-c1-content">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Judul Berita</Table.HeadCell>
              <Table.HeadCell>Penulis</Table.HeadCell>
              <Table.HeadCell>Kategori</Table.HeadCell>
              <Table.HeadCell>Gambar</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {books.map((book) => (
                <Table.Row key={book.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.judul_berita}
                  </Table.Cell>
                  <Table.Cell>{book.penulis}</Table.Cell>
                  <Table.Cell>{book.kategori}</Table.Cell>
                  <Table.Cell>
                    <img src={book.gambar} alt="Gambar Berita" style={{ width: '50px', height: 'auto' }} />
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`edit-berita/${book.id}`}>
                      <span className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 px-3">
                        Edit
                      </span>
                    </Link>
                    <span
                      className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                      onClick={() => handleDelete(book.id)}
                    >
                      Hapus
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Cards;
