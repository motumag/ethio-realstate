import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";

export default function Oath() {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const handleGoogleSubmit = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      nagivate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleGoogleSubmit}
      type="button"
      className="bg-brightCyanBlue p-3 rounded-lg text-white hover:opacity-95 uppercase"
    >
      Continue with Google
    </button>
  );
}
