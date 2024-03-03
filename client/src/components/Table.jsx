
export default function Table({data}) {
  return (
            <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.sno}>
            <td>{row.sno}</td>
            <td>{row.customer_name}</td>
            <td>{row.age}</td>
            <td>{row.phone}</td>
            <td>{row.location}</td>
            <td>{new Date(row.created_at).toLocaleDateString()}</td>
            <td>{new Date(row.created_at).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

