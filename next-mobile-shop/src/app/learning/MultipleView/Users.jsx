export default function Users({ dataSource = [], currentUser, gotoUser }) {
  return (
    <div className="race_user">
      {dataSource.map((data) => (
        <div
          className="view"
          style={{
            color: data.id === currentUser?.id ? "rgb(17 0 255)" : "#000",
          }}
          key={data.id}
          onClick={() => gotoUser(data)}
        >
          {data.title}
        </div>
      ))}
    </div>
  );
}
