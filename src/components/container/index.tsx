import { Route, Switch as RouterSwitch, useHistory } from "react-router-dom";
import { Past, Upcoming } from "../pages";
import Switch from "react-switch";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../../assets/image/icons8-future-50.png";
import { Form } from "react-bootstrap";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    padding: [10, 0],
  },
  reverseImage: {
    transform: "scaleX(-1)",
  },
  content: {
    padding: [0, 50],
    height: "90vh",
    overflow: "scroll",
  },
  container: {
    height: "100vh",
    background: "#e9e9e9",
  },
});
const Container = () => {
  const styles = useStyles();
  const history = useHistory();
  const [isUpcoming, setIsUpcoming] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isUpcoming) {
      history.push("/upcoming");
    } else {
      history.push("/past");
    }
  }, [isUpcoming, history]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Switch
          checked={isUpcoming}
          onChange={() => setIsUpcoming(!isUpcoming)}
          handleDiameter={24}
          offColor="#08f"
          onColor="#0ff"
          offHandleColor="#0ff"
          onHandleColor="#08f"
          height={40}
          width={200}
          borderRadius={6}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                // color: "orange",
                paddingRight: 2,
              }}
            >
              past
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingLeft: 15,
              }}
            >
              upcoming
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              <img
                src={Icon}
                width={20}
                className={styles.reverseImage}
                alt=""
              />
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
              }}
            >
              <img src={Icon} width={20} alt="" />
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </header>

      <div className={styles.content}>
        <Form>
          <Form.Control
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder={"search..."}
          />
        </Form>
        <RouterSwitch>
          <Route path="/" exact component={() => <Past {...{ input }} />} />
          <Route path="/past" component={() => <Past {...{ input }} />} />
          <Route
            path="/upcoming"
            component={() => <Upcoming {...{ input }} />}
          />
        </RouterSwitch>
      </div>
    </div>
  );
};

export { Container };
