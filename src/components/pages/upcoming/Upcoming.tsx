import { useQuery } from "react-query";
import { Data, getLaunchUpcoming, filterList } from "../../../core";
import { ListItem } from "../../list/ListItem";
import { useEffect, useState } from "react";

const Upcoming = ({ input }: any) => {
  const { data, isLoading } = useQuery("getLaunchUpcoming", async () => {
    const { data } = await getLaunchUpcoming();
    setFilteredList(data);
    return data;
  });
  const [filteredList, setFilteredList] = useState(data);
  useEffect(() => {
    let f = filterList(data, input);
    setFilteredList(f);
  }, [input, data]);

  return (
    <>
      {filteredList && !isLoading ? (
        filteredList?.map((item: Data, index: number) => (
          <ListItem key={index} {...{ item }} />
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export { Upcoming };
