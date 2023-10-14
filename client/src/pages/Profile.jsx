// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
export default function Profile() {
  const userFromRedux = useSelector((state) => state.user);
  const { currentUser } = userFromRedux.user;
  const fileRef = useRef(null);
  const [imageFile, setImageFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setUploadFileError] = useState(false);
  const [formData, setFormData] = useState({});
  // console.log(imageFile, "selected image file");
  // console.log(filePerc, "perc");
  // console.log(formData, "formData");
  // console.log(fileUploadError, "error");
  useEffect(() => {
    if (imageFile) {
      handleFileUpload(imageFile);
    }
  }, [imageFile]);
  const handleFileUpload = (imageFile) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("The progress is:" + progress + "% done");
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setUploadFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({
            ...formData,
            avator: downloadURL,
          })
        );
      }
    );
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setImageFile(e.target.files[0])}
          type="file"
          className="bg-red-400"
          ref={fileRef}
          hidden
          accept="image/.*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avator || currentUser.rest.avator}
          alt="profile"
          className="rounded-full w-24 h-24 object-cover self-center"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          className="rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="rounded-lg p-3 "
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="rounded-lg p-3 "
          id="password"
        />
        <button className="bg-brightRedLight text-white p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
