import { useQuery } from "react-query";
import { Data, getLaunchPast, filterList } from "../../../core";
import { ListItem } from "../../list/ListItem";
import { useEffect, useState } from "react";

const Past = ({ input }: any) => {
  const { data, isLoading } = useQuery("getLaunchPast", async () => {
    const { data } = await getLaunchPast();
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
        filteredList.map((item: Data) => <ListItem {...{ item }} />)
      ) : (
        <div></div>
      )}
    </>
  );
};

export { Past };
