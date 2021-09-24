import { useSelector } from "react-redux";
//components
import { Table } from "./MainLeftElements";

const TableData = () => {
  const { postData } = useSelector((state) => state.singlePost);

  return (
    <Table>
      <tbody>
        <tr>
          <td>намена</td>
          <td>{postData.purpose}</td>
        </tr>
        <tr>
          <td>цена</td>
          <td> {postData.price ? `€${postData.price}` : "/"} </td>
        </tr>
        <tr>
          <td>тип</td>
          <td>{postData.realEstateType}</td>
        </tr>
        <tr>
          <td>спални</td>
          <td>{postData.specs.bedrooms ? postData.specs.bedrooms : "/"}</td>
        </tr>
        <tr>
          <td>бањи</td>
          <td>{postData.specs.baths ? postData.specs.baths : "/"}</td>
        </tr>
        <tr>
          <td>балкони</td>
          <td>{postData.specs.balcony ? postData.specs.balcony : "/"}</td>
        </tr>
        <tr>
          <td>површина</td>
          <td>{postData.specs.area ? `${postData.specs.area} m2` : "/"}</td>
        </tr>
        <tr>
          <td>паркинг</td>
          <td>{postData.specs.parking ? "да" : "/"}</td>
        </tr>
        <tr>
          <td>локација</td>
          <td>{postData.location.city} </td>
        </tr>
        <tr>
          <td>додадено</td>
          <td>{postData.updatedAt.substring(0, 10)} </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableData;
