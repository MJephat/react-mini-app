import DoctorDetails from "./Details";
import DoctorList from "./List";

function DoctorInformation() {
  return (
    <div className="doctorsInfo">
      <DoctorList listText="Emily Maina" />
      <p>Jephat is an othodontics specialist</p>
      <p>jephat34@gmail.com</p>
      <p>079848290</p>
      <DoctorDetails detailsText="Ortho" />
      <p>Ortho is an pedeotrian</p>
      <p>Ortho@gmail.com</p>
      <p>0795110710</p>
      <DoctorDetails detailsText="Edwin" />
      <p>Edwin is a brain surgeon</p>
      <p>alooedwin94@gmail.com</p>
      <p>0111770495</p>
      <DoctorDetails detailsText="Medrin" />
      <p>Medrin is the head doctor at our establishment</p>
      <p>medrine@gmail.com</p>
      <p>0783576428</p>

    </div>
  );
}

export default DoctorInformation;
