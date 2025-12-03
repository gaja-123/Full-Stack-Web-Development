function TodoRowItem() {
    const rownum=1
    const rowdesc='complete react fully today'
    const rowassign='raja'
  return (
    <tr>
      <td scope="row">{rownum}</td>
      <td>{rowdesc}</td>
      <td>{rowassign}</td>
    </tr>
  );
}
export default TodoRowItem;
