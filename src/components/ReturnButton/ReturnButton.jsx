import './index.scss';
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
  return (
    <button className="button__general" onClick={goBack}>GO BACK</button>
  )
}

export default ReturnButton