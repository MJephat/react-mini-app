import DoctorDetails from "./Details";
import DoctorList from "./List";

function DoctorInformation() {
  return (
    <div className="doctorsInfo">
      <DoctorList listText="Jephat Maina" />
      <p>Jephat is an othodontics specialist</p>
      <DoctorDetails detailsText="Ortho" />
    </div>
  );
}

export default DoctorInformation;
