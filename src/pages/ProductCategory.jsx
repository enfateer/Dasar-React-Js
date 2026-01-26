import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";

export default function ProductCategory() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    const url =
      "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProducts(result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <Spinner aria-label="Default status example" />
        Sedang Mengambil data....
      </div>
    );
  }

  return (
    <>
      <div className="text-4xl font-bold mt-3">
        Produk Kategori {products[0].category.name}
      </div>
      <div className="mb-5 mt-5">
        <CardList data={products} type="products" />
      </div>
    </>
  );
}
