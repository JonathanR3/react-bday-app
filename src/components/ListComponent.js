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
              <div>{person.name}</div>
              <div>{person.year}</div>
              <div>{person.age}</div>
              <a href={'mailto:${person.email}'}>Send Birthday Greeting</a>
              </>
            )
          })}
      </>
    );
  }
}

export default ListComponent;
