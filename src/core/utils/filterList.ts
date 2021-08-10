function filterList(data: any, input: string) {
  return data?.filter((item: any) =>
    item.mission_name.toLowerCase().includes(input.toLowerCase())
  );
}
export { filterList };
