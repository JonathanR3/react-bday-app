function ListComponent({ data, setMonthValue, setBdays }) {
  if(setMonthValue) {
    return (
      <>
        {data
          .filter((person) => {
            return person.month == setMonthValue;
          })
          .map((person, index, array) => {
            setBdays(array.length);
            return (
              <>
              <img src = {person.image} width ="200"/>
              <div>{person.name}</div>
              <div>{person.year}</div>
              <div>{person.age}</div>
              {person.email ? <a href="">Send Greetings</a>:""}
              </>
            )
          })}
      </>
    );
  }
}

export default ListComponent;
