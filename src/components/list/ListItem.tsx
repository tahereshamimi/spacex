import { createUseStyles } from "react-jss";
import { Data } from "../../core";

const useStyles = createUseStyles({
  card: {
    background: "white",
    margin: [10, 0],
    borderRadius: 5,
    padding: 20,
  },
  missionName: {
    fontWeight: "bolder",
    fontSize: 18,
    display: "inline-block",
    marginRight: 20,
  },
  launchDate: {
    fontSize: 12,
    color: "#999999",
  },
});
interface Props {
  item: Data;
}
const ListItem = (props: Props) => {
  const { item } = props;
  const styles = useStyles();
  const getDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  };
  return (
    <div className={styles.card}>
      <div className={styles.missionName}>{item.mission_name}</div>
      <span className={styles.launchDate}>
        {getDate(item.launch_date_local)}
      </span>
      <div>{item.details}</div>
    </div>
  );
};

export { ListItem };
