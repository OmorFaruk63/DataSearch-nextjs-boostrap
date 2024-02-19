"use client";
import "./page.css";
import data from "../public/MOCK_DATA.json";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <main>
      <h1 className="display-4 text-center mt-5 mb-4">Search Filter</h1>
      <form className="mb-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by First Name"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>

      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((f) => {
                  return text.toLowerCase() == ""
                    ? data
                    : f.first_name.toLowerCase().includes(text);
                })
                .map((d) => (
                  <tr key={d.id}>
                    <td>{d.first_name}</td>
                    <td>{d.last_name}</td>
                    <td>{d.email}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
