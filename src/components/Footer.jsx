import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footershow}>
      <div className={styles.footerContent}>
        <div>
          <p>Connect with us at ...</p>
          <Link to={"https://twitter.com/prathameshL32"} target="_blank" className={styles.icon}>
            <FaTwitter />
          </Link>
          <Link to={"https://www.linkedin.com/in/prathamesh-lohar-67687524b/"} target="_blank" className={styles.icon}>
            <FaLinkedin />
          </Link>
          <Link to={"https://www.instagram.com/prathameshlohar32?igsh=ZXplNzVlemZnNjFq"} target="_blank" className={styles.icon}>
            <RiInstagramFill />
          </Link>
        </div>
        <div>&copy; All Rights Reserved By Currency convert.</div>
      </div>
    </footer>
  );
};

export default Footer;
