import React from "react";
import Navbar from "../componenets/Navbar";
import Styles from "../styles/navbar.module.css";
import styles from "../styles/mainpage.module.css";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpeg"

const MainPage = () => {
  return (
    <div className={styles.externalDiv}>
      <Navbar />
      <div className={styles.mainpage}>
        <div className={styles.page}>
          <h2 className={styles.header}>
            Online<br></br>Library
          </h2>
          <p>
           Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life.
          </p>
          <button>Join now</button>
        </div>
        <div>
          <img src={img2} alt=""/>
        </div>
      </div>
      <div>
        <div className={styles.newPage}>
          <img src={img1} alt="" srcset="" />
          <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Error at perferendis maxime corrupti aperiam eius nemo. Dignissimos, ipsam<br></br> omnis? Nisi, officiis dolorum voluptates consequatur ex, iusto facilis a magnam<br></br> id totam non corporis odio aspernatur laborum necessitatibus deserunt reprehenderit voluptate!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
