import { useEffect, useState } from "react";
import BannerComp from "./components/BannerComp";
import CardList from "./components/CardList";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const url = "https://api.escuelajs.co/api/v1/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setCategories(result.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProducts(result.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <Spinner aria-label="Default status example" />
        Sedang Load..
      </div>
    );
  }

  return (
    <>
      <BannerComp />
      <CardList data={categories} type="category" />
      <CardList data={products} type="products">
        <div className="flex justify-between mb-5 mt-5">
          <div className="text-xl font-bold">Daftar Produk Populer</div>
          <Link to="/products">
            <Button color="blue">Lihat Selengkap nnya</Button>
          </Link>
        </div>
      </CardList>
    </>
  );
}

export default App;
