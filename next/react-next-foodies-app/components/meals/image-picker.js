"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ name, label }) {
  const [pickedImage, SetPickedImage] = useState();
  const imageInputRef = useRef();
  const handlePickImageClick = () => {
    // document.getElementById(name).click();
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      SetPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      SetPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image selected by user." fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
            multiple
          accept="image/png, image/jpeg image/webp"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImageClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
