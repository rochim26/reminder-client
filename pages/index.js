import React from "react";
import ModalTambahTugas from "../components/ModalTambahTugas";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <h2>Daftar Tugas</h2>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#tambahTugas"
          >
            Tambah
          </button>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Deadline</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Opsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button type="button" class="btn btn-secondary">
                  Edit
                </button>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ModalTambahTugas />
    </>
  );
};

export default index;
