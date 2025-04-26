// export default FlightSearch; import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FormFlightSearch = () => {
  const [form, setForm] = useState({ from: "", to: "", date: "", passengers: 1 });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!form.from || !form.to) {
      toast.error("Asal dan tujuan harus diisi!");
      return;
    }
    navigate("/hasil");
  };

  return (
    <div>
      <input placeholder="Asal" onChange={(e) => setForm({ ...form, from: e.target.value })} />
      <input placeholder="Tujuan" onChange={(e) => setForm({ ...form, to: e.target.value })} />
      <button onClick={handleSubmit}>Cari</button>
    </div>
  );
};

export default FormFlightSearch;