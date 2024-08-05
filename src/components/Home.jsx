import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-6 ">home</div>
    </div>
  );
}
