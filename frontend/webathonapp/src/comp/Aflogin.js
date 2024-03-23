import React from 'react'
import { Link } from "react-router-dom";
function Aflogin() {
  return (
    <div className="text-center">
      <h1 className="p-4 ">Community Forum to connect Students and Alumni</h1>
      <div className='d-flex'>
      <img
        src="https://media.licdn.com/dms/image/D4D12AQFhwfPnNsW1-A/article-cover_image-shrink_600_2000/0/1672921742157?e=2147483647&v=beta&t=p9no0h1V1sDzJYUk9Qf0f7wd9QRdM6yoOO7QDtFvGa4"
        className="w-50 img-thumbnail text-start allign-items-left rounded-circle"
        alt=""
      />
      <p className='pt-5 px-5 py-5'>This website offers a range of features aimed at enriching the connection between current students and alumni. Through interactive forums and discussion boards, users can engage in dynamic conversations, share experiences, and seek guidance from peers and mentors alike. Additionally, the platform provides access to exclusive networking events, workshops, and webinars, creating opportunities for personal and professional development. By leveraging the collective wisdom and experiences of its community members, this website cultivates a supportive environment where individuals can thrive and achieve their academic and career goals.</p>
    </div>
    <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 d-flex justify-content-evenly pt-5">
        <div className="card">
          <p className="lead card-title my-1">Alumni Profile</p>
          <Link className="nav-link" to="alumni">
          <button type="submit" class="btn btn-success text-center my-3">Open</button>
          </Link>
        </div>
        <div className="card">
          <p className="lead card-title my-1">Events</p>
          <Link className="nav-link" to="events">
          <button type="submit" class="btn btn-success text-center my-3">Open</button>
          </Link>
        </div>
        <div className="card">
          <p className="lead card-title my-1">Info search</p>
          <Link className="nav-link" to="search">
          <button type="submit" class="btn btn-success text-center my-3">Open</button>
          </Link>
        </div>
    </div>
  </div>
  )
}

export default Aflogin
