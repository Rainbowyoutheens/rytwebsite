import React from "react";
import { Link } from 'react-router-dom';

function RecentPost() {
  return (
    <div className="mt-4">
      <img className="rounded mb-2" src="images/self-discovery.jpg" alt="Self Discovery" width="350px"/>
      <h4 className="px-1"><strong>Self Discovery</strong></h4>
      <div className="d-flex justify-content-between px-1">
        <p>February 2, 2022</p>
        <p>5 min. Read</p>
      </div>
      <p className="px-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque
        ut magnam esse et blanditiis laboriosam. Nemo, possimus dolor quidem
        voluptas animi esse labore rerum consequatur earum... <Link className="yel-text" to="/post_id">read more</Link>
      </p>
    </div>
  );
}

export default RecentPost;
