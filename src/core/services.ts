import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err);
  }
);
export const getLaunchPast = () => {
  return instance.get("/launches/past");
};
export const getLaunchUpcoming = () => {
  return instance.get("/launches/upcoming");
};
export type Data = {
  flight_id: "string";
  mission_name: "string";
  details: "string";
  launch_date_local: "string";
};
