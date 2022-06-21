import { useSelector } from "react-redux";
//components
import { Table } from "./MainLeftElements";

const TableData = () => {
  const post = useSelector((state) => state.postsReducer.singlePost);

  return (
    <Table>
      <tbody>
        <tr>
          <td>намена</td>
          <td>{post.purpose === "sale" ? "продажба" : "изнајмување"}</td>
        </tr>
        <tr>
          <td>цена</td>
          <td> {post.price ? `€${post.price}` : "/"} </td>
        </tr>
        <tr>
          <td>тип</td>
          <td>
            {post.realEstateType === "apartment"
              ? "стан"
              : post.realEstateType === "house"
              ? "куќа"
              : "гарсоњера"}
          </td>
        </tr>
        <tr>
          <td>спални</td>
          <td>{post.specs.bedrooms ? post.specs.bedrooms : "/"}</td>
        </tr>
        <tr>
          <td>бањи</td>
          <td>{post.specs.baths ? post.specs.baths : "/"}</td>
        </tr>
        <tr>
          <td>балкони</td>
          <td>{post.specs.balcony ? post.specs.balcony : "/"}</td>
        </tr>
        <tr>
          <td>површина</td>
          <td>{post.specs.area ? `${post.specs.area} m2` : "/"}</td>
        </tr>
        <tr>
          <td>паркинг</td>
          <td>{post.specs.parking ? "да" : "не"}</td>
        </tr>
        <tr>
          <td>локација</td>
          <td>{post.location.city} </td>
        </tr>
        <tr>
          <td>додадено</td>
          <td>{post.updatedAt.substring(0, 10)} </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableData;
