type guest = { name: string; surname: string };
function SortGuests(guests: guest[]) {
  guests.sort(function (a, b) {
    if (a.surname < b.surname) return -1;
    if (a.surname > b.surname) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

function CreateOutput(guests: guest[]): string {
  let string = "";
  guests.forEach((guest) => (string += `(${guest.surname}, ${guest.name}) `));
  return string;
}

function EditString(str: string): string {
  str = str.toUpperCase();
  const guests: guest[] = [];
  str.split(";").forEach((guest) => {
    const fullnameArray = guest.split(":");
    guests.push({ name: fullnameArray[0], surname: fullnameArray[1] });
  });
  SortGuests(guests);
  return CreateOutput(guests);
}

console.log(
  EditString(
    "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill;Alfred:Corwill"
  )
);
