function FilterList(list: (string | number)[]): number[] {
  return list.filter((element) => typeof element !== "string") as number[];
}
